import { Products_Accueil } from "@/data/Products_Accueil";
import ProductItem from "./ProductItem";


export const Products = () => {
    return (
        <div>
{Products_Accueil.map((item) => {
return (
    <ProductItem key={item.id} product={item} />
)
})}
        </div>
    )
}