import type { ISetState } from '@common/common-interface';
import type { ChangeEvent, MutableRefObject } from 'react';
import type { IModalState } from './modal-interface';

export function modalHelper(
  state: IModalState,
  setState:ISetState<IModalState>,
  captionRef: MutableRefObject<HTMLInputElement | null>,
  filePicker: MutableRefObject<HTMLInputElement | null>,
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

  function uploadPost() {
    console.log(captionRef.current?.value);
  }

  return {
    addImageToPost,
    destroyImage,
    uploadPost,
    setFilePicker,
  };
}
