import MonH1 from "@/components/MonH";
import { Navbar } from "@/components/navbar";
import { VinsProducts } from "@/components/VinsProduct";
import Footer from "@/components/Footer";



export function GrandsVins () {
return (
    <div >

        <Navbar />
        <div className="pb-12">
        <div className="pt-56 bg-black">
            <div>
            <MonH1 texte="GRANDS VINS" style={{ color: "white" }}/>
        <p className="text-center text-base font-bold text-white">AVEC JOYSWINE, L'ACHAT DE GRANDS VINS SUR  INTERNET N'A JAMAIS ETE AUSSU SIMPLE !</p>  
        </div>
        <div className="relative flex justify-center items-center">
  <img className="w-4/5 h-auto  pt-8 pb-8" src="src\image\paginages\spiritueux-noel.jpg" alt="" />
  <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">Notre cave GRANDS CRUS BORDEAUX Premiers crus classés, Grands Crus, Grands vins de Bordeaux, ils sont tous là</p>
</div>

<VinsProducts />

<div className="flex justify-center items-center pt-8 pb-8">
            <img className="w-4/5 h-auto" src="src\image\paginages\experts-2-noel.jpg" alt="" />
        </div>

        <div className="bg-gray-200 p-8 rounded-lg">
          <h1 className="text-3xl font-bold mb-4">LES GRANDS VINS : DES VINS HAUTS EN COULEURS !</h1>
          <p className="mb-4">Si les spécialistes tombent généralement d'accord pour reconnaître les plus grands vins, cette qualification n'en reste pas moins très subjective... Quelles sont donc les qualités que doit posséder une cuvée pour rejoindre le rang des grands vins ?</p>
          <h2 className="text-xl font-bold mb-2">TERROIR ET SAVOIR FAIRE</h2>
          <p className="mb-4">En fonction de leur robe (rouge, rosé, blanc ou gris), les qualités requises pour les grands vins ne sont évidemment pas les mêmes. Pour un rouge, on pourra apprécier un vin « fort en bouche », tandis qu'un vin blanc sera apprécié pour sa légèreté. Il existe toutefois quelques données objectives qui permettent de reconnaître et classifier les grands vins.</p>
          <p className="mb-4">Bien souvent, les grands vins naissent dans des régions réputées pour leur climat propice à la culture de la vigne, ou spécialisé dans la fabrication de vin de haute qualité. Le terroir est donc un premier critère à prendre en compte. Les grands vins se distinguent également par le cépage qui a été majoritairement utilisé pour leur fabrication : par exemple, le gamay, le grenache ou la syrah.</p>
          <p className="mb-4">Les grands vins sont enfin identifiables à leur millésime. Une erreur courante consiste à croire que plus un vin est ancien et meilleur il est. En réalité, un beaujolais montre davantage ses qualités lorsqu'il est nouveau (ou pas trop vieux), tandis qu'un bourgogne gagnera effectivement, le plus souvent, à passer un peu de temps en cave. Certains millésimes sont en outre remarquables en raison de conditions météorologiques particulièrement favorables à l'élaboration de grands vins : il s'agit souvent d'années de sécheresse, comme 1976, 2003 ou encore 2013.</p>
          <h2 className="text-xl font-bold mb-2">DES CONSEILS POUR APPRÉCIER LE VIN À SA JUSTE VALEUR</h2>
          <p className="mb-4">Sur votre site qui fait la promotion des plus grands vins, vous découvrirez non seulement des crus de légende, mais en plus des conseils qui vous permettront de les apprécier à leur juste valeur. Nous vous présenterons des vins prestigieux dont particulièrement ceux qui font partie de la classification des vins de Bordeaux de 1855 comme le Château Lafite Rothschild – Pauillac, le Château Mouton Rothschild et le Château Rauzan-Gassies.</p>
          <p className="mb-4">Nous collaborons avec de grands œnologues qui instruisent le public sur la façon de se comporter pour apprécier le vin à sa juste valeur. Les techniques de dégustation sont ainsi exposées et permettent de comprendre que l’œil, le nez et évidemment la bouche entrent en jeu dans cette démarche pour apprécier un grand vin. Vous trouverez également des astuces pour mieux conserver votre vin et augmenter sa valeur.</p>
          <h2 className="text-xl font-bold mb-2">DE BONS PLANS POUR VOUS PERMETTRE DE TROUVER À BON PRIX LES PLUS GRANDS VINS</h2>
          <p className="mb-4">Si vous êtes un collectionneur de vins, vous êtes probablement à l’affut des meilleures opportunités pour en disposer en grande quantité. Sur notre site vous trouverez de bons plans à partir desquels vous pourrez acheter de grands crus à très bon prix.</p>
          <p className="mb-4">BON À SAVOIR ...</p>
          <p className="mb-4">Si vous aimez le vin et que vous souhaitez faire une collection des plus grands crus, vous êtes au bon endroit. Notre site vous présente les vins d’exception que les œnologues les plus expérimentés ont classés comme des produits de légende. Pour vos réceptions, vous pouvez y accéder afin de dénicher un grand vin / grand cru que vos convives apprécieront. Tout est réuni sur ce site pour accroître votre passion pour le vin.</p>
        </div>
    
            </div>
        </div>
        <Footer />
    </div>
)
}