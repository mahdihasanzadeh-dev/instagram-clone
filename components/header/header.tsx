/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import type { ReactElement } from 'react';
import Image from 'next/image';
import instagramIcon from '@assets/images/instagram.png';
import arrowDownIcon from '@assets/images/arrowdown.png';
import searchIcon from '@assets/images/search.png';
import homeIcon from '@assets/images/home.png';
import messageIcon from '@assets/images/message.png';
import uploadIcon from '@assets/images/upload.png';
import discoverIcon from '@assets/images/discover.png';
import heartIcon from '@assets/images/heart.png';
import { signIn, signOut, useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useRecoilState } from 'recoil';
import { modalState } from '@atoms/modal-atom/modal-atom';

export function Header(): ReactElement {
  const { data: session } = useSession();
  const [isOpen, setIsOpen] = useRecoilState<boolean>(modalState);
  const router = useRouter();

  return (
    <div className="border-b shadow-sm bg-white sticky top-0 z-10">
      <div className="flex justify-between items-center h-16 px-2 max-w-5xl mx-auto">
        <div className="flex">
          <div
            className="w-28 h-full flex cursor-pointer"
            onClick={async () => router.push('/')}
            role="button"
          >
            <Image src={instagramIcon} alt="Instagram Icon" objectFit="contain" />
          </div>
          <div className="h-3 w-3 mt-1">
            <Image src={arrowDownIcon} alt="arrowDown Icon " />
          </div>
        </div>
        <div className="hidden w-72 sm:flex relative mx-4">
          <div className=" absolute w-3 h-full flex items-center ml-2 mt-1">
            <Image src={searchIcon} alt="search Icon " />
          </div>
          <input
            type="text"
            placeholder="search"
            className="h-9 w-full rounded-md bg-[#efefef] pl-8 outline-none"
          />
        </div>
        {
          session ? (
            <div className="flex space-x-5">
              <div className="nav-btn hidden sm:flex">
                <Image src={homeIcon} alt="homeIcon" />
              </div>
              <div className="nav-btn hidden sm:flex relative">
                <Image src={messageIcon} alt="messageIcon" />
                <div
                  className="absolute flex -top-1 left-3.5 items-center justify-center bg-red-500 text-white w-4 h-4 rounded-full text-xs"
                >
                  1
                </div>
              </div>
              <div role="button" className="nav-btn" onClick={() => setIsOpen(true)}>
                <Image
                  src={uploadIcon}
                  alt="uploadIcon"
                />
              </div>
              <div className="nav-btn hidden sm:flex">
                <Image src={discoverIcon} alt="discoverIcon" />
              </div>
              <div className="nav-btn hidden sm:flex">
                <Image src={heartIcon} alt="heartIcon" />
              </div>
              <div className="flex">
                <div className="nav-btn mr-5">
                  <Image
                    src={session.user?.image ?? ''}
                    alt={session.user?.name ?? 'profile'}
                    className="rounded-full"
                    width={24}
                    height={24}
                  />
                </div>
                <button
                  type="button"
                  className="cursor-pointer text-[#0095f6] font-semibold whitespace-nowrap"
                  onClick={async () => signOut()}
                >
                  Signout
                </button>
              </div>

            </div>
          )
            : (
              <button
                type="button"
                className="cursor-pointer text-[#0095f6] font-semibold whitespace-nowrap"
                onClick={async () => signIn()}
              >
                Signin
              </button>
            )
        }

      </div>
    </div>
  );
}
