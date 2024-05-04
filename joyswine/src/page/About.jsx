import MonP from '@/components/MnP';
import { Navbar } from '@/components/navbar';
import React from 'react';
import Footer from '@/components/Footer';

const About = () => {
  return (
    <div>
<Navbar />
<div className="bg-gray-100 pt-56">
      <header className="bg-white shadow-md">
        
      </header>
      <main className="max-w-4xl mx-auto py-8 px-4">
        <section className="mb-8">
          <h1 className="text-3xl font-bold mb-4">À Propos de JoysWine</h1>
         <MonP texte="Joyswine est un site web spécialisé 
dans la vente de vins de qualité, 
offrant une sélection variée de vins 
provenant des meilleures régions 
viticoles du monde. Ce site propose 
une expérience d'achat en ligne 
conviviale et informative pour les 
amateurs de vin et les connaisseurs 
en quête de découvertes gustatives." />
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Notre Histoire</h2>
          <MonP texte="JoysWine est né d'une passion partagée pour le vin et le désir de faire découvrir aux amateurs congolais une sélection exceptionnelle de vins du monde entier. Fondée le 10 juillet 2023 à Kinshasa, la capitale animée de la République démocratique du Congo, JoysWine a rapidement captivé les palais des connaisseurs de vin et des novices enthousiastes.

L'idée de JoysWine est née lors d'un voyage à travers les régions viticoles de l'Italie, de la France et d'autres pays européens, où les fondateurs ont été inspirés par la diversité des vins et la passion des vignerons. De retour à Kinshasa, ils ont décidé de créer une entreprise qui apporterait cette même diversité et cette même passion aux habitants de la ville.

Avec un engagement envers la qualité et l'authenticité, JoysWine sélectionne méticuleusement chaque bouteille pour offrir à ses clients une expérience gustative inégalée. Notre cave à vin abrite plus de 80 vins soigneusement choisis, en provenance de renommées viticoles telles que l'Italie, la France, le Mexique, le Brésil, l'Allemagne, la Chine, et bien d'autres encore. Chaque vin raconte une histoire unique, reflétant le terroir, le savoir-faire et la tradition de son lieu d'origine.

Depuis nos modestes débuts, JoysWine a su gagner la confiance et l'appréciation de nos clients fidèles. Notre équipe dévouée travaille sans relâche pour élargir notre sélection de vins, recherchant continuellement de nouvelles trouvailles pour satisfaire les palais les plus exigeants.

Nous sommes fiers de notre héritage et de notre engagement envers l'excellence, et nous sommes impatients de partager notre passion pour le vin avec vous, chez JoysWine." />
        </section>
        
      </main>
      
    </div>
    <Footer />
    </div>
    
  );
};

export default About;
