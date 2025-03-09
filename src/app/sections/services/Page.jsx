import React  from 'react'
import BorderBottom from "../../component/BottomBorder/BorderBottom";
import { services } from '@/app/constants';
const Page = () => {


   return (
      <div name="services" className='py-20 border-b-[0.5px] border-b-primary'>
         <div className='F'>
            <p className='uppercase font-bold text-3xl md:text-4xl lg:text-5xl tracking-wider'>Services I Offer</p>
            <BorderBottom />
         </div>
         <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6  w-full md:px-10 pt-20'>
            {
               services.map((service, index) => (
                  <div className='flex flex-col space-y-5 bg-primary rounded-lg p-5 cursor-pointer hover:scale-105 duration-700 hover:drop-shadow-services' key={index}>
                     <div className='flex items-center gap-3'>
                        <p className='text-lg font-semibold text-element '>{service?.name}</p>
                     </div>
                     <div>
                        <p className='text-justify text-sm'>{service?.description}</p>
                     </div>
                  </div>
               ))
            }
         </div>
      </div>
   )
}

export default Page