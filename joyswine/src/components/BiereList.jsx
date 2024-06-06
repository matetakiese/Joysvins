import { ListBierre } from "@/data/ListBierre";

const BiereList = () => {
    return (
        <div className="biere-list">
            {ListBierre.map((biere) => (
                <div key={biere.id} className="biere-card">
                    <img src={biere.cover} alt={biere.name} />
                    <h3>{biere.name}</h3>
                    <p>{biere.description}</p>
                    <p>Prix: {biere.price}€</p>
                </div>
            ))}
        </div>
    );
};

export default BiereList;