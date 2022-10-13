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
import profileIcon from '@assets/images/profile.jpg';

export function Header(): ReactElement {
  return (
    <div className="border-b shadow-sm bg-white">
      <div className="flex justify-between items-center h-16 px-2 max-w-5xl mx-auto">
        <div className="flex">
          <div className="w-28">
            <Image src={instagramIcon} alt="Instagram Icon" />
          </div>
          <div className="h-3 w-3 mt-1">
            <Image src={arrowDownIcon} alt="arrowDown Icon " />
          </div>
        </div>
        <div className="hidden w-72 sm:flex relative mx-2">
          <div className=" absolute w-3 h-full flex items-center ml-2">
            <Image src={searchIcon} alt="search Icon " />
          </div>
          <input
            type="text"
            placeholder="search"
            className="h-9 w-full rounded-md bg-[#efefef] pl-8 outline-none"
          />
        </div>
        <div className="flex space-x-5">
          <div className="btn hidden sm:flex">
            <Image src={homeIcon} alt="homeIcon" />
          </div>
          <div className="btn hidden sm:flex">
            <Image src={messageIcon} alt="messageIcon" />
          </div>
          <div className="btn">
            <Image src={uploadIcon} alt="uploadIcon" />
          </div>
          <div className="btn hidden sm:flex">
            <Image src={discoverIcon} alt="discoverIcon" />
          </div>
          <div className="btn hidden sm:flex">
            <Image src={heartIcon} alt="heartIcon" />
          </div>
          <div className="flex">
            <div className="btn mr-5">
              <Image src={profileIcon} alt="profileIcon" className="rounded-full" />
            </div>
            <button
              type="button"
              className="cursor-pointer text-[#0095f6] font-semibold whitespace-nowrap"
            >
              Sign out
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
