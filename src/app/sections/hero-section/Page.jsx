import Image from 'next/image';
import React, { useState } from 'react';
import { TypeAnimation } from 'react-type-animation';
import { FaArrowCircleUp, FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Header from "@/app/component/header/Page";
import Link from 'next/link';

import Graph from '@/app/assest/graph.png';
import Pic from '../../../../public/pic.png';

const Page = ({ me }) => {
   const [position] = useState(me?.position || "Software Engineer");
   const socialStyle = 'h-10 w-10 rounded-full bg-primary flex items-center justify-center text-element text-lg hover:drop-shadow-social cursor-pointer duration-700';

   return (
      <div className='flex flex-col items-center border-b-primary border-b-[0.5px] md:h-screen relative' >

         {/* Header component */}
         <Header me={me} />

         {/* Hero section */}
         <div className='flex flex-col md:flex-row w-full md:items-center justify-center h-full gap-10 py-10 md:py-20 z-10'>

            {/* Text Content */}
            <div className='w-full md:w-[50%] flex flex-col gap-5'>
               <p className='text-2xl md:text-6xl font-semibold lg:text-nowrap'>
                  Hi, I am <br />
                  <span className='text-element tracking-wider text-xl md:text-5xl'>
                     <TypeAnimation
                        sequence={[
                           `Malik Ahad Ali`,
                           1500,
                           position,
                           1000
                        ]}
                        wrapper="span"
                        speed={10}
                        style={{ display: 'inline-block' }}
                        repeat={Infinity}
                     />
                  </span>
               </p>
               <p className='w-64 md:w-full'>{me?.about}</p>
               <div className='flex gap-3 items-center duration-700'>
                  <button
                     href={'/'}
                     className='bg-element flex gap-1 md:gap-2 items-center text-black text-sm md:text-md px-4 py-2 font-medium md:px-8 md:py-3 rounded-full hover:scale-105 duration-700 ease-in-out transition-all shadow-lg hover:shadow-element group'
                  >
                     Contact Me <span className='text-xl md:text-2xl rotate-45 group-hover:-translate-y-[2px] group-hover:translate-x-[2px] duration-700'><FaArrowCircleUp /></span>
                  </button>
                  <Link href={me?.linkedin || ''} target='_blank' className={socialStyle}>
                     <FaLinkedinIn />
                  </Link>
                  <Link href={me?.github || ''} target='_blank' className={socialStyle}>
                     <FaGithub />
                  </Link>
               </div>
            </div>

            {/* Image Section */}
            <div className='flex relative group w-full md:w-[50%] justify-center md:justify-end lg:justify-center items-center'>
               <div>
                  <Image className='' src={Graph} width={700} height={700} alt='Malik Ahad Ali'/>
               </div>
               <motion.div
                  initial={{ y: 300, opacity: 0 }}
                  animate={{
                     y: 0,
                     opacity: 1,
                     transition: { duration: 2, ease: "easeInOut" }
                  }}
                  className='absolute flex items-end w-full justify-center'
               >
                  <Image
                     className='relative h-[400px] md:h-96 md:mb-32 w-full md:w-[70%] grayscale hover:grayscale-0 object-cover z-10 rounded-lg cursor-pointer duration-700 shadow-lg '
                     width={1200}
                     height={500}
                     src={Pic}
                     alt='Malik Ahad Ali'
                  />
               </motion.div>
            </div>
         </div>
      </div>
   );
};

export default Page;
