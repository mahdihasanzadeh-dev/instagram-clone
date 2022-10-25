/* eslint-disable no-restricted-syntax */
import { query } from 'firebase/firestore';
import type { DocumentData } from 'firebase/firestore/lite';
import { collection, getDocs, orderBy } from 'firebase/firestore/lite';
import { db } from '../firebase';

export async function getPosts(): Promise<DocumentData[]> {
  const postsCol = query(collection(db, 'posts'), orderBy('timestamp', 'asc'));
  const postsSnapshot = await getDocs(postsCol);
  const posts : DocumentData[] = [];

  for (const post of postsSnapshot.docs) {
    const { caption, profileImg, image, username } = post.data();
    posts.push({ caption, profileImg, image, username });
  }

  return posts;
}
