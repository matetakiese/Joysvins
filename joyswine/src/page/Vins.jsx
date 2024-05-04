import MonH1 from "@/components/MonH";
import { Slides_Vins } from "@/components/carouselTwo";
import { Navbar } from "@/components/navbar";
import Collection from "@/components/Collection";
import { VinsProducts } from "@/components/VinsProduct";
import Footer from "@/components/Footer";


export function Vins () {
return (
    <div >

        <Navbar />
        <div className="pt-56">
            <div>
            <MonH1 texte="BOUTIQUE DE VINS"  className="text-center text-base font-bold "/>
        <p className="text-center text-base font-bold ">AVEC JOYSWINE, L'ACHAT DE VINS SUR  INTERNET N'A JAMAIS ETE AUSSU SIMPLE !</p>  
        </div>
    <Slides_Vins />
<VinsProducts />
    <Collection />
            </div>
            <Footer />
    </div>
)
}