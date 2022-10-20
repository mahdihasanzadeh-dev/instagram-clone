import Image from 'next/image';
import type { ReactElement } from 'react';
import {
  DotsHorizontalIcon,
  HeartIcon,
  ChatIcon,
  PaperAirplaneIcon,
  BookmarkIcon,
  EmojiHappyIcon,
} from '@heroicons/react/outline';
// import { HeartIcon as HeartIconFilled } from '@heroicons/react/solid';
import type { IPost } from './post-interface';

export function Post({ id, username, postPhoto, profilePhoto, caption }: IPost): ReactElement {
  return (
    <div className="bg-white my-7 border rounded-md">
      {/* header-start */}
      <div className="flex items-center p-5">
        <div className="rounded-full h-12 w-12 object-contain border p-1 mr-3">
          <Image
            src={profilePhoto}
            alt={id}
            className="rounded-full"
          />
        </div>
        <p className="flex-1 font-semibold">{username}</p>
        <DotsHorizontalIcon className="h-5" />
      </div>
      {/* header-end */}
      {/* img-start */}
      <Image
        src={postPhoto}
        alt={username}
        className=" object-cover w-full"
      />
      {/* img-end */}
      {/* buttons-start */}
      <div className="flex justify-between px-4 pt-4">
        <div className="flex space-x-4">
          <HeartIcon className="btn" />
          <ChatIcon className="btn" />
          <PaperAirplaneIcon className="btn rotate-45" />
        </div>
        <BookmarkIcon className="btn" />
      </div>

      {/* buttons-end */}
      {/* caption-start */}
      <p className="p-5 truncate">
        <span className="font-semibold mr-1">{username}</span>
        {caption}
      </p>
      {/* caption-end */}
      {/* comments-start */}
      {/* comments-end */}
      <form className="flex items-center p-4">
        <EmojiHappyIcon className="h-7" />
        <input
          type="text"
          className="border-none flex-1 focus:ring-0 outline-none mx-1"
          placeholder="Add a comment ..."
        />
        <button
          type="submit"
          className="font-semibold text-blue-400"
        >
          Post
        </button>
      </form>
    </div>
  );
}
