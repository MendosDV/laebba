import { useState } from 'react';

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

      <div className={`fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 ${openModal ? 'block' : 'hidden'}`}>
        <div className="text-white">Chargement en cours...</div>
      </div>

    </div>
  );
}
