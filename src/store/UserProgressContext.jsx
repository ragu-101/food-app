import { createContext, useState } from "react";

 const userProgressContext = createContext({
    progress: "",
    showCart:()=>{},
    hideCart:()=>{},
    showCheckOut:()=>{},
    hideCheckout:()=>{}
})

export function UserProgressContextProvider({children}){
    const [userProgress,setUserProgress] = useState("");

    function showCart(){
        setUserProgress('cart');
    }

    function hideCart(){
        setUserProgress("")
    }

    function showCheckOut(){
        setUserProgress('checkout');
    }

    function hideCheckout(){
        setUserProgress('');
    }

    const userProgressCtx = {
        progress:userProgress,
        showCart,
        hideCart,
        showCheckOut,
        hideCheckout
    };

    return (
        <userProgressContext.Provider value={userProgressCtx}>
            {children}
        </userProgressContext.Provider>
    )
}

export default userProgressContext;
