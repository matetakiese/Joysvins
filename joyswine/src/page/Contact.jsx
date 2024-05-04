import { Navbar } from '@/components/navbar';
import React from 'react';
import MonH1 from '@/components/MonH';
import { WhatsAppWidget } from 'react-whatsapp-widget';
import 'react-whatsapp-widget/dist/index.css';
import Footer from '@/components/Footer';

const  Contact = () => {
  return (

<div>
  <Navbar />
<div className="pt-56">
      <div className=''>
        <MonH1 texte="CONTACT" />
      </div>

<div className='grid grid-cols-1 sm:grid-cols-2 pt-24 pb-12 pl-5 pr-5 gap-4 '>
<div className="ml-24">
        <img src="src\image\telephone-1.jpg" alt="téléphone" />
      </div>
      <div className="mx-auto flex flex-col items-center bg-slate-200 p-32 w-3/4 rounded-lg">

          <img className='w-9' src="src\image\phone-svgrepo-com.svg" alt="phone" />
        <h1 className='text-base text-xl '>Téléphone</h1>
        <p className='text-2xl '>+243 82 099 5306</p>
        <div>
    
      <WhatsAppWidget phoneNumber="+243856361248" message="Bonjour, je suis intéressé par vos services." />
    </div>
      </div>

      <div className="mx-auto flex flex-col items-center bg-slate-200 p-32 w-3/4 rounded-lg">
  <img className='w-9' src="src\image\position-o-svgrepo-com.svg" alt="adresse" />
<h1 className='text-base text-xl '>Adresse</h1>
     <p className='text-2xl text-center'>6 avenue du pré de challes</p>
      </div>

      <div className=" mx-auto flex flex-col items-center bg-slate-200 p-32 w-3/4 rounded-lg">
        <img className='w-9' src="src\image\email-9-svgrepo-com.svg" alt="E-mail" />
<h1 className='text-base text-xl '>E-mail</h1>
     <p className='text-2xl'>joyswine@gmail.com</p>
      </div>
</div>

      
    </div>
    <Footer />
</div>

    
  );
};

export default Contact;
