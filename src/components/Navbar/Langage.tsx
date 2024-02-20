import { useState } from 'react';

export default function Langage() {
  const langs = ['FR', 'EN', 'JAP'];
  const [langage, setLangage] = useState('FR');

  const activeLangage = (lang: string) => {
    setLangage(lang);
  };

  return (
    <ul className="flex justify-center items-center gap-3 mb-5">
      {langs.map((lang) => (
        <li
          key={lang}
          className={langage === lang ? 'font-bold' : ''}
          onClick={() => activeLangage(lang)}
        >
          {lang}
        </li>
      ))}
    </ul>
  );
}
