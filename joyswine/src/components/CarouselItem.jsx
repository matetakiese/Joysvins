import Carousel from "./Carousel"
import { slides } from "@/data/Carousel"

export function Slides_Accueil () {

return(
    <div className="">
    <Carousel autoSlide={true}>
     {slides.map((s) => (
       <img src={s} />
     ))}
    </Carousel>
   </div>
)
}


