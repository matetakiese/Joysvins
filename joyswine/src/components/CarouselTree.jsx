import Carousel from "./Carousel"
import { slidesTree } from "@/data/CarouselTree"

export function Slides_Champagnes () {

return(
    <div className="pl-5 pr-5">
    <Carousel autoSlide={true}>
     {slidesTree.map((s) => (
       <img src={s} />
     ))}
    </Carousel>
   </div>
)
}


