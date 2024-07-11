import { Currencyformatter } from "../util/Currencyformatter";
import Button from "../UI/Button";

export default function Mealitem({meals}){
    // console.log("sadasdas",meals.image)
    return <li className="meal-item">
        <article>
            <img src={`http:localhost:3000/${meals.image}`} alt="image" />
            <div>
                <h3>{meals.name}</h3>
                <p className="meal-item-price">{Currencyformatter.format(meals.price)}</p>
                <p className="meal-item-description">{meals.description}</p>
            </div>
            <p className="meal-item-actions">
                <Button>Add to Cart</Button>
            </p>
        </article>
    </li>
}