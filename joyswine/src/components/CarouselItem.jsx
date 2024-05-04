import Carousel from "./Carousel"
import { slides } from "@/data/Carousel"

export function Slides_Accueil () {

return(
    <div className="pl-5 pr-5">
    <Carousel autoSlide={true}>
     {slides.map((s) => (
      
<img className=""  src={s} />
      
       
     ))}
    </Carousel>
   </div>
)
}


