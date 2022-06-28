import React, { useState } from "react";
import { AnimatePresence, motion, useCycle } from "framer-motion";
import ShowMenu from "./showMenu";
import CloseMenu from "./CloseMenu";
const links = [
  { name: "About", to: "#about", id: 1 },
  { name: "Experience", to: "#exp", id: 2 },
  { name: "Work", to: "#work", id: 3 },
  { name: "Contact", to: "#", id: 4 },
  { name:"Resume", to:"#", id:5}
];
const itemVariants = {
  closed: {
    opacity: 0,
  },
  open: { opacity: 1 },
};
const sideVariants = {
  closed: {
    transition: {
      staggerChildren: 0.2,
      staggerDirection: -1,
    },
  },
  open: {
    transition: {
      staggerChildren: 0.2,
      staggerDirection: 1,
    },
  },
};
export default function Sidebar() {
  const [open, cycleOpen] = useCycle(false, true);
  return (
    <main>
      <AnimatePresence>
        {open && (
          <motion.aside
            initial={{ width: 0 }}
            animate={{
              width: 300,
            }}
            exit={{
              width: 0,
              transition: { delay: 0.2, duration: 0.1 },
            }}
          >
            <motion.div
              className="fixed w-3/5 left-0 top-0 h-full bg-lightNavy
              flex flex-col gap-y-8 py-32 font-mono pl-4 z-30"
              initial="closed"
              animate="open"
              exit="closed"
              variants={sideVariants}
            >
              {links.map(({ name, to, id }) => (
                <motion.a
                  key={id}
                  href={to}
                  whileHover={{ scale: 1.1 }}
                  variants={itemVariants}
                  onClick={cycleOpen}
                >
                  {name}
                </motion.a>
              ))}
            </motion.div>
          </motion.aside>
        )}
      </AnimatePresence>
      <div className="absolute top-[-30px] left-5 z-30">
        <button onClick={cycleOpen}>
          {!open ? <ShowMenu /> : <CloseMenu />}
        </button>
      </div>
    </main>
  );
}
