import type { DocumentData } from 'firebase/firestore';

export interface IPost {
    id: string;
    image: string;
    username: string;
    caption: string;
    profileImg: string;
}

export interface IPostState {
    comment: string;
    comments: DocumentData[];
    likes: DocumentData[];
    hasLiked: boolean;
}
