import type { StaticImageData } from 'next/image';

export interface IPost {
    id: string;
    username: string;
    postPhoto: StaticImageData ;
    profilePhoto: StaticImageData ;
    caption: string;
}
