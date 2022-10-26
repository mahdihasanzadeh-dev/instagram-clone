import Image from 'next/image';
import type { ReactElement } from 'react';
import { useEffect, useState } from 'react';
import Moment from 'react-moment';
import {
  DotsHorizontalIcon,
  HeartIcon,
  ChatIcon,
  PaperAirplaneIcon,
  BookmarkIcon,
  EmojiHappyIcon,
} from '@heroicons/react/outline';
import { HeartIcon as HeartIconFilled } from '@heroicons/react/solid';
import { useSession } from 'next-auth/react';
import type { IPost, IPostState } from './post-interface';
import { postHelper } from './post-helper';

export function Post({ id, username, image, caption, profileImg }: IPost): ReactElement {
  const { data: session } = useSession();

  const [state, setState] = useState<IPostState>({
    comment: '',
    comments: [],
    likes: [],
    hasLiked: false,
  });

  const { comment, comments, hasLiked, likes } = state;
  const helper = postHelper(state, setState, session, id);

  useEffect(():void => {
    helper.getLikes();
    helper.getComments();
  }, []);

  useEffect((): void => {
    helper.setHasLiked();
  }, [likes]);

  return (
    <div className="bg-white my-7 border rounded-md">
      {/* header-start */}
      <div className="flex items-center p-5">
        <div className="rounded-full h-12 w-12 object-contain border p-1 mr-3">
          <Image
            src={profileImg}
            alt={username}
            className="rounded-full"
            width={48}
            height={48}
          />
        </div>
        <p className="flex-1 font-semibold">{username}</p>
        <DotsHorizontalIcon className="h-5" />
      </div>
      {/* header-end */}
      {/* img-start */}
      <Image
        src={image}
        alt={username}
        className=" object-cover w-full"
        width="100%"
        height="100%"
        layout="responsive"
        objectFit="cover"
      />
      {/* img-end */}
      {/* buttons-start */}

      {
        session && (
        <div className="flex justify-between px-4 pt-4">
          <div className="flex space-x-4">
            {
              hasLiked
                ? <HeartIconFilled onClick={helper.dislikePost} className="btn text-red-500" />
                : <HeartIcon onClick={helper.likePost} className="btn" />
            }

            <ChatIcon className="btn" />
            <PaperAirplaneIcon className="btn rotate-45" />
          </div>
          <BookmarkIcon className="btn" />
        </div>
        )
      }
      {/* buttons-end */}
      <p className="pl-5 pt-2">
        <span className="font-semibold mr-1">
          {likes.length}
          {' '}
          likes
        </span>
      </p>
      {/* caption-start */}
      <p className="p-5 truncate pt-2">
        <span className="font-semibold mr-1">{username}</span>
        {caption}
      </p>
      {/* caption-end */}
      {/* comments-start */}
      {
        comments.length > 0 && (
          <div className="ml-10 h-20 overflow-y-scroll scrollbar-thumb-gray-300 scrollbar-thin">
            {
              comments.map((commentInfo) => {
                // eslint-disable-next-line max-len
                const { commentId, userImage, username: userName, commentText, timestamp } = commentInfo;
                return (
                  <div
                    key={commentId}
                    className="flex items-center space-x-2 mb-3"
                  >
                    <Image
                      className="rounded-full "
                      src={userImage}
                      alt={userName}
                      width={28}
                      height={28}
                    />
                    <p className="text-sm flex-1">
                      <span className=" font-semibold">{userName}</span>
                      {' '}
                      {commentText}
                    </p>
                    <Moment fromNow className="pr-5 text-xs">
                      {timestamp?.toDate()}
                    </Moment>
                  </div>
                );
              })
            }
          </div>
        )

      }
      {/* comments-end */}

      {
        session && (
        <form className="flex items-center p-4">
          <EmojiHappyIcon className="h-7" />
          <input
            type="text"
            className="border-none flex-1 focus:ring-0 outline-none mx-1"
            placeholder="Add a comment ..."
            value={comment}
            onChange={helper.setComment}
          />
          <button
            type="submit"
            className="font-semibold text-blue-400"
            disabled={!comment.trim()}
            onClick={helper.sendComment}
          >
            Post
          </button>
        </form>
        )
      }
    </div>
  );
}
