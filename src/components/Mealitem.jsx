export default function Mealitem({meals}){
    // console.log("sadasdas",meals.image)
    return <li className="meal-item">
        <article>
            <img src="" alt="" />
            <div>
                <h3>{meals.name}</h3>
                <p className="meal-item-price">{meals.price}</p>
                <p className="meal-item-description">{meals.description}</p>
            </div>
            <p className="meal-item-actions">
                <button>Add to Cart</button>
            </p>
        </article>
    </li>
}