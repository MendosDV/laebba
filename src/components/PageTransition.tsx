"use client"

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

export default function Template({children}: {children: React.ReactNode}){

    let pathname = usePathname();

    return(
      <>
        <AnimatePresence mode={'wait'}>
          <motion.div key={pathname}>
            {children}
            <motion.div
              className="slide-in"
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 0 }}
              exit={{ scaleY: 1  }}
              transition={{duration: 1, ease: [0.22, 1, 0.36, 1]}}
            >
            </motion.div>
            <motion.div
              className="slide-out"
              initial={{scaleY: 1}}
              animate={{scaleY: 0}}
              exit={{scaleY: 0}}
              transition={{duration: 1, ease: [0.22, 1, 0.36, 1]}}
            >
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </>
    )
}
