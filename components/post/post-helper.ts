/* eslint-disable no-restricted-syntax */
import type { ISession, ISetState } from '@common/common-interface';
import type { DocumentData } from 'firebase/firestore/lite';
import { deleteDoc, doc, addDoc, collection, serverTimestamp, query, orderBy, getDocs } from 'firebase/firestore/lite';
import { db } from '../../firebase';
import type { IPostState } from './post-interface';

export function postHelper(
  state:IPostState,
  setState:ISetState<IPostState>,
  session: ISession | null,
  id: string,
) {
  function setComment(event: { target: { value: string; }; }): void {
    setState({
      ...state,
      comment: event.target.value,
    });
  }

  async function sendComment(event: { preventDefault: () => void; }): Promise<void> {
    event.preventDefault();

    try {
      const newDoc = await addDoc(collection(db, 'posts', id, 'comments'), {
        comment: state.comment,
        username: session?.user?.name,
        userImage: session?.user?.image,
        timestamp: serverTimestamp(),
      });

      setState({
        ...state,
        comment: '',
        comments: [{
          commentId: newDoc.id,
          commentText: state.comment,
          username: session?.user?.name,
          userImage: session?.user?.image,
          timestamp: null,
        }, ...state.comments],
      });
    } catch (error) {
      console.log(error);
    }
  }

  async function getComments(): Promise<void> {
    const commentsCol = query(collection(db, 'posts', id, 'comments'), orderBy('timestamp', 'desc'));
    const commentsSnapshot = await getDocs(commentsCol);
    const comments : DocumentData[] = [];

    for (const comment of commentsSnapshot.docs) {
      const { id: commentId } = comment;
      const { comment: commentText, username, userImage, timestamp } = comment.data();
      comments.push({ commentId, commentText, username, userImage, timestamp });
    }

    setState({
      ...state,
      comments,
    });
  }

  async function getLikes(): Promise<void> {
    const likesCol = query(collection(db, 'posts', id, 'likes'));
    const likesSnapshot = await getDocs(likesCol);
    const likes : DocumentData[] = [];

    for (const item of likesSnapshot.docs) {
      const likeId = item.id;
      const { username } = item.data();
      likes.push({ username, likeId });
    }

    setState({
      ...state,
      likes,
    });
  }

  async function likePost():Promise<void> {
    try {
      const newDoc = await addDoc(collection(db, 'posts', id, 'likes'), {
        username: session?.user?.uid,
      });

      setState({
        ...state,
        hasLiked: true,
        likes: [{ likeId: newDoc.id, username: session?.user?.uid }, ...state.likes],
      });
    } catch (error) {
      console.log(error);
    }
  }

  function setHasLiked(): void {
    const index : number = state.likes.findIndex((like) => like.username === session?.user?.uid);

    setState({
      ...state,
      hasLiked: index !== -1,
    });
  }

  async function dislikePost(): Promise<void> {
    if ((session?.user?.uid) != null) {
      try {
        const { likes } = state;
        const index : number = likes.findIndex((like) => like.username === session.user?.uid);
        await deleteDoc(doc(db, 'posts', id, 'likes', likes[index].likeId as string));
        const tempLikes = [...likes];
        tempLikes.splice(index, 1);

        setState({
          ...state,
          hasLiked: false,
          likes: tempLikes,
        });
      } catch (error) {
        console.log(error);
      }
    }
  }

  return {
    setComment,
    sendComment,
    getComments,
    getLikes,
    likePost,
    setHasLiked,
    dislikePost,
  };
}
