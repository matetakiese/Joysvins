import React, { useState } from 'react';

const Newsletter = () => {
  const [email, setEmail] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log('Email soumis :', email);
    setEmail('');
  };

  return (
    <div className="max-w-md mx-auto  p-6 rounded-md">
      <h2 className="text-2xl font-semibold text-white mb-4">S'INSCRIRE A LA NEWSLETTER</h2>
      <div>
        <p className='text-white pb-4'>Recevez en avant-première nos découvertes, nos ventes privilèges et nos meilleures affaires !</p>
      </div>
      <div className="flex items-center">
  <form onSubmit={handleSubmit} className="flex">
    <input
      type="email"
      placeholder="Votre adresse email"
      value={email}
      onChange={handleEmailChange}
      className="w-96 bg-white text-gray-800 px-4 py-2 rounded-l-md mr-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
      style={{ marginRight: '8px' }}    
    />
    <button
      type="submit"
      className="w-40 bg-black hover:bg-blue-600 text-white py-2 px-4 rounded-r-md focus:outline-none focus:ring-2 focus:ring-blue-400"
    >
      je m'inscris
    </button>
  </form>
</div>



    </div>
  );
};

export default Newsletter;
