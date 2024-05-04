import { Navbar } from "@/components/navbar";
import { BiereProducts } from "@/components/BiereProducts";
import CollectionTwo from "@/components/CollectionTwo";
import Footer from "@/components/Footer";


export function Biere () {
return (
    <div >

        <Navbar />
        <div className="pt-56">
    <div className="pl-5 pr-5">
        <img src="src\image\paginages\bieres-new-1.png" alt="" />
    </div>
    <div className="pt-8 pb-8  pl-5 pr-5">
    <div className="bg-slate-900 text-white text-center p-5 ">
    <h1 className="text-2xl">Avec Joyswine l’achat de bières sur Internet n’a jamais été aussi simple !</h1>
    <span className="mb-4">cheter les meilleures bières de votre région ! Faites le plein de bières artisanales et retrouvez des brasseries incontournables comme la Brasserie du Mont-Blanc, les Brasseurs Savoyards, la Brasserie des Cimes, Ninkasi ou encore Pietra. Achetez des bières à petit prix et régalez vos invités : apéritifs, repas entre amis, grands évènements…il y en a pour tous les goûts et pour tous les budgets !</span>
</div>
    </div>
    
    <CollectionTwo />
<BiereProducts />
            </div>
            <Footer />
    </div>
)
}