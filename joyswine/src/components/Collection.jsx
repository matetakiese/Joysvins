const callouts = [
    {
      name: 'VINS AMBREES',
      description: 'Plus caramélisées, plus intenses,Vins  ambrées laisent à bon nombre d’amateurs avertis. Avec cette sélection de bières ambrées, allez à l’essentiel pour mieux vous régaler !',
      imageSrc: 'src/image/paginages/blog-les-differents-types-de-cremants.jpg',
      imageAlt: 'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
      href: '#',
    },
    {
      name: 'VINS BRUNES',
      description: 'Fumées, toastées, chocolatées, vins brunes et noires sont souvent les favorites des amateurs de bières et de véritables signatures de la part des brasseurs. Une sélection à découvrir et à déguster avec la plus grande attention !',
      imageSrc: 'src/image/paginages/bieres-pack.jpg',
      imageAlt: 'Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.',
      href: '#',
    },
    {
      name: 'VINS AROMATISEES',
      description: 'Que ça soit à la violette, au génépi comme la Verte du Mont-Blanc ou aux épices, vins aromatisées plaisent au plus grand nombre. Elles ont avantage être relativement légères tout en restant très gouteuses. idéal pour se désaltérer avec gourmandise.',
      imageSrc: 'src/image/paginages/blog-dom-perignon-rose-genese-champagne.jpg',
      imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
      href: '#',
    },
  ]
  
  export default function Collection() {
    return (
<div className="pl-5 pr-5 pb-12">
<div className="bg-gray-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
            <h2 className="text-2xl font-bold text-gray-900">Collections</h2>
  
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