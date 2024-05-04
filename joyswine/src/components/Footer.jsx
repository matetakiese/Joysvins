import React from 'react';
import NewsletterForm from './Newletter';

const Footer = () => {
  return (
    <div>
        <div className="bg-slate-200 w-full  pb-8 pt-8 pl-5 pr-5">
          <div className=' flex  justify-between items-center '>
          <div className="text-center mx-4 flex flex-col items-center">
        <img className='w-14' src="src\image\delivery-svgrepo-com.svg" alt="delivery" />
        <p className='font-bold'>Plus de 600 références</p>
      </div>
      <div className="text-center mx-4 flex flex-col items-center">
        <img className='w-14' src="src\image\padlock-dots-svgrepo-com.svg" alt="lock" />
        <p className='font-bold'>sécurisé</p>
      </div>
      <div className="text-center mx-4 flex flex-col items-center">
        <img className='w-14' src="src\image\hand-holding-gift-svgrepo-com.svg" alt="hand" />
        <p className='font-bold'>Dégustées et approuvées</p>
      </div>
      <div className="text-center mx-4 flex flex-col items-center">
        <img className='w-14' src="src\image\cardboard-box-with-lid-svgrepo-com.svg" alt="card" />
        <p className='font-bold'>Emballages anti-casse</p>
      </div> 
          </div>
    </div>


    <div className="bg-green-500 w-full  pb-24 pt-12 flex justify-center items-center">
      <div className='flex'>
        <div className='flex justify-center items-center'>
        <img src="src\image\paginages\Illustration-newsletter.svg" alt="img" />
      <NewsletterForm />
        </div>
        
      </div>
      
    </div>

    <div className="bg-slate-200 w-full  pb-5 pt-5 pl-5 pr-5">
      <div className='flex justify-between items-center'>
      <img className='w-20' src="src\image\paginages\Image12.png" alt="img" />
        <img className='w-20'  src="src\image\paginages\Image1er.png" alt="img" />
        <img className='w-20' src="src\image\paginages\Image1fgf.png" alt="img" />
        <img className='w-20' src="src\image\paginages\Image1jk.png" alt="img" />
        <img className='w-24' src="src\image\paginages\Image2.png" alt="omg" />
      </div>
    </div>


    <div className="bg-black w-full pb-72">
      <div className='flex justify-center items-center gap-4 pt-40 pb-5'>
        <img className='w-32'  src="src\image\images.png" alt="" />
        <img src="src\image\Capture d’écran 2024-04-15 120215.png" alt="" />
      </div>
      <p className='text-center text-white' >L'ABUS D'ALCOOL EST DANGEREUX POUR LA SANTÉ, À CONSOMMER AVEC MODÉRATION﻿</p>
      <p className='text-center text-white'>© 2024 JOYSWINE</p>
    </div>
    </div>
    
  );
}

export default Footer;
