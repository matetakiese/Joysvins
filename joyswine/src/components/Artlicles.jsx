import { Slides_Accueil } from "./CarouselItem"
import MonH1 from "./MonH"
import { Products } from "./Products"

export function Articls () {
return (
<div className="pt-56 ">
    <div className="">
    <div>
  <MonH1 texte="JOYSWINE: ACHAT DE  VINS, GRANDS CRUS, CHAMPAGNES ET BIERES" style={{ fontSize: "16px" }} />
  </div>
 
 <Slides_Accueil />
    <Products />
 

    </div>
  
</div>
)

}