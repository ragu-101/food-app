
import Mealitem from "./Mealitem";
import useHttp from "../hooks/useHttp";
import Error from "./Error";


const requestConfig = {}

export default function Meals(){
    const {data:loadedmeals, 
        isloading,
        error
    } = useHttp('http://localhost:3000/meals',requestConfig,[]); // by using {} object inside Meals component it recreated again and again when it renders,this cause infinite loop

    if(isloading){
        return <p className="center"> Fetching data</p>
    }

    if(error){
        return <Error title={'Failed to fetch Data'}  message={error}/>
    }
   
    return <ul>
        {loadedmeals.map(item => (<Mealitem key={item.id} meals={item} />) )}
    </ul>
}