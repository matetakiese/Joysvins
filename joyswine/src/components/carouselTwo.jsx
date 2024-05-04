import Carousel from "./Carousel"
import { slidesTwo } from "@/data/carouseltwo"

export function Slides_Vins () {

return(
    <div className="pl-5 pr-5">
    <Carousel autoSlide={true}>
     {slidesTwo.map((s) => (
       <img src={s} />
     ))}
    </Carousel>
   </div>
)
}


