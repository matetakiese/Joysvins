const ProductItem = ({ product }) => {
    return (
        <div>
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>Prix: {product.price} $</p>
        </div>
    );
}

export default ProductItem;
