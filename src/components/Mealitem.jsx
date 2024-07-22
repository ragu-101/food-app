import { Currencyformatter } from "../util/Currencyformatter";
import Button from "../UI/Button";
import { useContext } from "react";
import CartContext from "../store/CartContext";

export default function Mealitem({meals}){
    const cartCtx = useContext(CartContext)
    function handleAddItemCart(){
        cartCtx.addItem(meals);
    }
    // console.log("sadasdas",meals.image)
    return <li className="meal-item">
        <article>
            <img src={`http://localhost:3000/${meals.image}`} alt={meals.name} />
            <div>
                <h3>{meals.name}</h3>
                <p className="meal-item-price">{Currencyformatter.format(meals.price)}</p>
                <p className="meal-item-description">{meals.description}</p>
            </div>
            <p className="meal-item-actions">
                <Button onClick={handleAddItemCart}>Add to Cart</Button>
            </p>
        </article>
    </li>
}