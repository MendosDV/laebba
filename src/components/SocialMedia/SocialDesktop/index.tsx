'use client';

import { TiSocialLinkedin } from "react-icons/ti";
import { FaGithub } from "react-icons/fa";
import { useSizeScreen } from "@/context";

export default function SocialDesktop() {
  const { isMobile } = useSizeScreen();
  const socialMedia = [
    { name: 'Linkedin',
      icon: <TiSocialLinkedin style={{fontSize: '1.4rem'}} aria-label='Linkedin'/>,
      href: 'https://www.linkedin.com/in/mickael-riss'
    },
    { name: 'Github',
      icon: <FaGithub style={{fontSize: '1.4rem'}} aria-label='Github'/>,
      href: 'https://github.com/MendosDV'
    }
  ]

  {
    if (!isMobile) {
      return (
        <div className='absolute top-1/2 flex flex-col gap-5'>
        {socialMedia.map(({ name, icon, href }) => (
            <a href={href} key={name} target='_blank' className="rounded-full p-2 bg-white shadow-lg">
              {icon}
            </a>
        ))}
      </div>
      )
    }
  }
}
