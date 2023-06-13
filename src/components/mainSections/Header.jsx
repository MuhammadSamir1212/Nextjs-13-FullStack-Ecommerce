'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Header() {
  return (
    <header className="sm:px-16 px-6 bg-mainGray pt-[5em] pb-[2em]">
      <div className="flex">
        <div className="xl:flex-[0.75] flex-1 flex flex-col justify-center md:ml-[2em] lg:ml-[4em] xl:ml-[10em] ml-[0em]">
          <motion.h2
            initial={{ y: '3em', opacity: 0, rotateY: 50 }}
            animate={{ y: 0, opacity: 1, rotateY: 0 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            className="font-semibold md:text-[1.2rem] text-[0.7rem] text-primary xs:mb-[-0.5em] mb-[0em] "
          >
            Summer 2023
          </motion.h2>
          <motion.h2
            initial={{ y: '3em', opacity: 0, rotateY: 50 }}
            animate={{ y: 0, opacity: 1, rotateY: 0 }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
            className="font-bold sm:text-[2rem] md:text-[2.5rem] lg:text-[3rem] xl:text-[3.5rem] text-[1rem] text-primary mb-3"
          >
            Our New Collection
          </motion.h2>
          <motion.div
            initial={{ y: '9em', opacity: 0, rotateY: 50 }}
            animate={{ y: 0, opacity: 1, rotateY: 0 }}
            transition={{ duration: 0.7, ease: 'easeInOut' }}
          >
            <Link
              href="/shop"
              className=" text-center font-semibold md:text-[1.1rem] text-[0.8rem] text-mainGray 
                  bg-primary border border-secondary rounded-md py-2 px-3
                  hover:bg-secondary hover:border-primary hover:text-primary 
                    transition-all"
            >
              Go to Shop
            </Link>
          </motion.div>
        </div>
        <motion.div
          initial={{ x: '9em', opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7, ease: 'easeInOut' }}
          className="flex items-end justify-center flex-1 xl:items-center"
        >
          <Image
            src="/slideLaptop1.png"
            alt="Summer 2023"
            width={600}
            height={600}
            priority
            className="sm:w-[400px] md:w-[450px] lg:w-[500px] xl:w-auto w-[300px] 
          sm:h-[400px] md:h-[450px] lg:h-[500px] xl:h-auto h-[200px]"
          />
        </motion.div>
      </div>
    </header>
  );
}
