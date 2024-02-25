'use client';

import { TiSocialLinkedin } from "react-icons/ti";
import { FaGithub } from "react-icons/fa";
import { useSizeScreen } from "@/context";

export default function SocialDesktop() {
  const { isMobile } = useSizeScreen();

  {
    if (!isMobile) {
      return (
        <div className='absolute top-1/2 flex flex-col gap-3 bg-black'>
          <TiSocialLinkedin style={{fontSize: '2rem'}} aria-label='Linkedin'/>
          <FaGithub style={{fontSize: '2rem'}} aria-label='Github'/>
      </div>
      )
    }
  }
}
