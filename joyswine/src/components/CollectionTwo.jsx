import MonH1 from "./MonH"

const callouts = [
    {
      name: 'TOP 20 MEILLEURS DE VENTES',
      description: 'Les meilleures ventes de Vinatis sont ici ! Découvrez les meilleures bières plébiscitées par nos clients et laissez-vous tenter !' ,
      imageSrc: 'src/image/paginages/bieres-vente.jpg',
      imageAlt: 'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
      href: '#',
    },
    {
      name: 'LES PLUS FORTES PROMOS',
      description: 'Faites le plein de bières à prix cassés grâce à nos plus fortes promotions. C’est le coin idéal pour faire de bonnes affaires !',
      imageSrc: 'src/image/paginages/bieres-promo.jpg',
      imageAlt: 'Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.',
      href: '#',
    },
    {
      name: '100% BIERES ARTISANALES',
      description: 'Elles sont artisanales, elles viennent de partout dans le monde et elles sortent du lot aussi bien visuellement que gustativement. Les Craft Beers progressent en force ! ',
      imageSrc: 'src/image/paginages/craft-beers.jpg',
      imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
      href: '#',
    },
  ]
  
  export default function CollectionTwo() {
    return (
        <div className="pl-5 pr-5">

<div className="bg-gray-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ">
          <div className="mx-auto max-w-2xl py-16  lg:max-w-none ">
        
            <MonH1 texte="LES BONS PLANS"  className="text-center text-base font-bold "/>
        <p className="text-center text-base font-bold ">Achetez vos bières au meilleur prix sur Vinatis ! Dégustez des valeurs sures grâce à notre top meilleures ventes, faites des affaires à travers nos plus fortes promotions et osez les découvertes à travers nos dernières nouveautés de bières !</p>  


            <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
              {callouts.map((callout) => (
                <div key={callout.name} className="group relative">
                  <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                    <img
                      src={callout.imageSrc}
                      alt={callout.imageAlt}
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                  <h3 className="mt-6 text-sm text-gray-500">
                    <a href={callout.href}>
                      <span className="absolute inset-0" />
                      {callout.name}
                    </a>
                  </h3>
                  <p className="text-base font-semibold text-gray-900">{callout.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
        </div>
      
    )
  }