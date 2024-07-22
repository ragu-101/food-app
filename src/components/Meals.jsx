import { useState,useEffect } from "react";
import Mealitem from "./Mealitem";

export default function Meals(){
    const [loadedmeals,setLoadedmeals] = useState([]);
    
    useEffect( ()=> {
         async function FetchMeals(){
                const response = await fetch('http://localhost:3000/meals') // default type is get.
                // if(response.ok){
                //     console.log("fetched")
                //     console.log(response)
                // }
                // else{
                //     console.log("unable to fetch")
                // }
                const meals = await response.json();
                setLoadedmeals(meals);
        };

        FetchMeals() 
    },[])

    // console.log(loadedmeals)
    return <ul>
        {loadedmeals.map(item => (<Mealitem key={item.id} meals={item} />) )}
    </ul>
}