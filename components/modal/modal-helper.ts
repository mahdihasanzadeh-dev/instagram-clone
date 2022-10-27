import type { ISession, ISetState } from '@common/common-interface';
import type { ChangeEvent, MutableRefObject } from 'react';
import type { DocumentData, DocumentReference } from 'firebase/firestore/lite';
import { addDoc, collection, serverTimestamp, updateDoc, doc } from 'firebase/firestore/lite';
import { getDownloadURL, ref, uploadString } from 'firebase/storage';
import type { SetterOrUpdater } from 'recoil';
import type { IPost } from '@components/post/post-interface';
import type { IModalState } from './modal-interface';
import { db, storage } from '../../firebase';

export function modalHelper(
  state: IModalState,
  setState:ISetState<IModalState>,
  captionRef: MutableRefObject<HTMLInputElement | null>,
  filePicker: MutableRefObject<HTMLInputElement | null>,
  session: ISession | null,
  setIsOpen: SetterOrUpdater<boolean>,
  postsData: IPost[],
  setPostsData: SetterOrUpdater<IPost[]>,
) {
  function addImageToPost(event: ChangeEvent<HTMLInputElement>): void {
    const reader: FileReader = new FileReader();
    const { files } = event.target as HTMLInputElement;

    if (files?.[0]) {
      reader.readAsDataURL(files[0]);
    }

    reader.onload = (readerEvent) => {
      setState({
        ...state,
        selectedFile: readerEvent.target?.result,
      });
    };
  }

  function setFilePicker() {
    filePicker.current?.click();
  }

  function destroyImage() {
    setState({
      ...state,
      selectedFile: null,
    });
  }

  async function uploadPost() {
    const { isLoading, selectedFile } = state;

    if (!isLoading
      && selectedFile !== null
      && selectedFile !== undefined
      && captionRef.current?.value !== ''
    ) {
      setState({
        ...state,
        isLoading: true,
      });

      const docRef: DocumentReference<DocumentData> = await addDoc(collection(db, 'posts'), {
        username: session?.user?.username,
        caption: captionRef.current?.value,
        profileImg: session?.user?.image,
        timestamp: serverTimestamp(),
      });

      // console.log('New doc added with ID', docRef.id);

      const imageRef = ref(storage, `posts/${docRef.id}/image`);
      let downloadUrl: string = '';

      await uploadString(imageRef, selectedFile as string, 'data_url').then(async () => {
        downloadUrl = await getDownloadURL(imageRef);

        await updateDoc(doc(db, 'posts', docRef.id), {
          image: downloadUrl,
        });
      }).catch((error) => console.log(error));

      setIsOpen(false);

      setPostsData([{
        id: docRef.id,
        username: session?.user?.username ?? '',
        caption: captionRef.current?.value ?? '',
        profileImg: session?.user?.image ?? '',
        image: downloadUrl,
      }, ...postsData]);

      setState({
        isLoading: false,
        selectedFile: null,
      });
    }
  }

  return {
    addImageToPost,
    destroyImage,
    uploadPost,
    setFilePicker,
  };
}
