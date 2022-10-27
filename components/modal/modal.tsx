/* eslint-disable max-len */
import Image from 'next/image';
import type { ReactElement } from 'react';
import { useRef, Fragment, useState } from 'react';
import { useRecoilState } from 'recoil';
import { modalState } from '@atoms/modal-atom/modal-atom';
import { Dialog, Transition } from '@headlessui/react';
import { CameraIcon } from '@heroicons/react/outline';
import { useSession } from 'next-auth/react';
import { postsState } from '@atoms/posts-atom/posts-atom';
import type { IPost } from '@components/post/post-interface';
import type { IModalState } from './modal-interface';
import { modalHelper } from './modal-helper';

export function Modal():ReactElement {
  const { data: session } = useSession();
  const [isOpen, setIsOpen] = useRecoilState<boolean>(modalState);
  const [postsData, setPostsData] = useRecoilState<IPost[]>(postsState);

  const [state, setState] = useState<IModalState>({
    selectedFile: null,
    isLoading: false,
  });

  const { selectedFile, isLoading } = state;
  const filePicker = useRef<null | HTMLInputElement>(null);
  const captionRef = useRef<null | HTMLInputElement>(null);

  const helper = modalHelper(state, setState, captionRef, filePicker, session, setIsOpen, postsData, setPostsData);

  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="fixed z-10 inset-0 overscroll-y-auto"
        onClose={setIsOpen}
      >
        <div className="flex items-center justify-center min-h-[800px] sm:min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <Transition.Child
            as="div"
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
            <span
              className="hidden sm:inline-block sm:align-middle sm:h-screen"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <div
                className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left
                overflow-hidden shadow-lg transform transition-all sm:my-8 sm:align-middle sm:max-w-sm sm:w-full sm:p-6"
              >
                <div>
                  {
                    selectedFile !== null
                    && selectedFile !== undefined
                      ? (
                        <Image
                          src={selectedFile as string}
                          className="w-full object-contain cursor-pointer"
                          onClick={helper.destroyImage}
                          alt=""
                          width="100%"
                          height="128px"
                          layout="responsive"
                        />
                      )
                      : (
                        <div
                          className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-red-100 cursor-pointer"
                          role="button"
                          aria-hidden="true"
                          onClick={helper.setFilePicker}
                        >
                          <CameraIcon
                            className=" h-6 w-6 text-red-600"
                            aria-hidden="true"
                          />
                        </div>
                      )
                  }

                  <div>
                    <div className="mt-3 text-center sm:mt-5">
                      <Dialog.Title
                        as="h3"
                        className="text-lg leading-6 font-medium text-gray-900"
                      >
                        Upload a photo
                      </Dialog.Title>
                      <div>
                        <input
                          ref={filePicker}
                          type="file"
                          hidden
                          onChange={helper.addImageToPost}
                        />
                      </div>
                      <div className="mt-2">
                        <input
                          type="text"
                          className="border-none focus:ring-0 w-full text-center outline-none"
                          ref={captionRef}
                          placeholder="please enter a caption ..."
                        />
                      </div>
                    </div>
                  </div>
                  <div className="mt-5 sm:mt-6">
                    <button
                      type="button"
                      disabled={!!((selectedFile === null || selectedFile === undefined))}
                      className="inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2
                    bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2
                      focus:ring-offset-2 focus:ring-red-500 sm:text-sm disabled:bg-gray-300 disabled:cursor-not-allowed hover:disabled:bg-gray-300"
                      onClick={helper.uploadPost}
                    >
                      {isLoading ? 'Uploading' : 'Upload Post'}
                    </button>
                  </div>
                </div>
              </div>
            </Transition.Child>
          </Transition.Child>
        </div>

      </Dialog>
    </Transition.Root>
  );
}
