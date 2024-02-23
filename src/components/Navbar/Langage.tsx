/* eslint-disable react/no-unescaped-entities */
import { useState } from 'react';
import { GiSandsOfTime } from "react-icons/gi";

export default function Langage() {
  const langs = ['FR', 'EN', 'JAP'];
  const [langage, setLangage] = useState('FR');
  const [openModal, setOpenModal] = useState(false);

  const toggleModal = () => {
    setOpenModal(!openModal);
  }

  const closeModal = () => {
    if (openModal) {
      toggleModal();
    }
  }

  const activeLangage = (lang: string) => {
    setLangage(lang);
    toggleModal();
  };

  return (
    <div>
      <ul className="flex justify-center items-center gap-3 mb-8 lg:mb-0 lg:mx-auto lg:gap-5 lg:text-sm">
        {langs.map((lang) => (
          <li
            key={lang}
            className={langage === lang ? 'font-bold ' : 'text-color-light'}
            onClick={() => activeLangage(lang)}
          >
            {lang}
          </li>
        ))}
      </ul>

      {openModal && langage !== 'FR' && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black/20 flex justify-center items-center"
          onClick={closeModal}
        >
          <div className="bg-white rounded-lg p-6 w-2/6 h-1/3 lg:h-1/5 flex flex-col justify-center items-center gap-5">
            <GiSandsOfTime className='text-5xl bg-emerald-300 p-2 rounded-full text-emerald-800'/>
            <p className='text-xl'>Veuillez nous excuser</p>
            <p className='text-center text-gray-400'>L'utilisation de cette langue n'est pas encore disponible.</p>
          </div>
        </div>
      )}
    </div>
  );
}
