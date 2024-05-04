import MonH1 from "@/components/MonH";
import { Slides_Champagnes } from "@/components/CarouselTree";
import { Navbar } from "@/components/navbar";
import Collection from "@/components/Collection";
import { ChampagnesProducts } from "@/components/ChampagnesProduct";
import Footer from "@/components/Footer";


export function Champagnes () {
return (
    <div >

        <Navbar />
        <div className="pt-56">
            <div>
            <MonH1 texte="BOUTIQUE DE CHAMPAGNES"  className="text-center text-base font-bold "/>
        <p className="text-center text-base font-bold ">AVEC JOYSWINE, L'ACHAT DE CHAMPAGNES SUR  INTERNET N'A JAMAIS ETE AUSSU SIMPLE !</p>  
        </div>
    <Slides_Champagnes />
<ChampagnesProducts />
    <Collection />
            </div>
            <Footer />
    </div>
)
}