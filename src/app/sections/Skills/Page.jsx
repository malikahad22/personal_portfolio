import React from 'react';
import BorderBottom from '@/app/component/BottomBorder/BorderBottom';
import Image from 'next/image';
import { skills } from '@/app/constants';
const Page = () => {  

   return (
      <div name="skills" className='border-b-primary border-b-[0.5px] py-10'>
         <div>
            <h1 className='uppercase font-bold text-3xl md:text-4xl lg:text-5xl tracking-wider'>Technology Stack</h1>
            <BorderBottom />
         </div>
         <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5  gap-5 mx-auto justify-center p-20 w-full'>
            {
               skills.map((skill, index) => (
                  <div key={index} className='md:bg-primary justify-center flex md:p-2 rounded-lg group cursor-pointer'>
                     <Image
                        key={skill?.id}
                        className='w-10 h-10 sm:w-16 sm:h-16 p-1 cursor-pointer md:w-fit group-hover:scale-110 duration-700 group-hover:drop-shadow-services object-cover'
                        src={skill?.logo}
                        width={100}
                        height={100}
                        alt={skill?.name}
                     />
                  </div>
               ))
            }
         </div>

      </div>
   )
}

export default Page;