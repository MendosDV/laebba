import { TiSocialLinkedin } from "react-icons/ti";
import { FaGithub } from "react-icons/fa";

export default function SocialMobile() {
  return (
    <div className='flex justify-center items-center gap-3'>
      <TiSocialLinkedin style={{fontSize: '2rem'}} aria-label='Linkedin'/>
      <FaGithub style={{fontSize: '2rem'}} aria-label='Github'/>
  </div>
  )
}
