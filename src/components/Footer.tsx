'use client';

import { useSizeScreen } from "@/context";
import { FaHeart } from "react-icons/fa";

export default function Footer() {
  const { isMobile } = useSizeScreen();
  const cities = [
    'Montréal',
    'Lyon',
    'Paris',
    'Tours'
  ]
  return (
    ( !isMobile && (
        <footer className="bg-white h-16 w-full">
        <div className="opacity-60 flex h-full w-full justify-between items-end px-10 py-2 font-extralight" style={{color: '#144f4f'}}>
          <p className="flex gap-3 justify-center items-center">
            Made with
            <FaHeart style={{color: '#42b296'}}/>
            <span>by Mickaël</span>
          </p>
          <div className="flex gap-3 justify-center items-center">
            {cities.map((city) =>
              <p key={city} className="flex gap-2 justify-center items-center">
                {city}
                <div className="h-3 w-3 rounded-full" style={{backgroundColor: '#42b296'}}></div>
              </p>
            )}
          </div>
        </div>
      </footer>
    ))
  )
}
