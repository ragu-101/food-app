import { useContext, useReducer } from "react";

const Cartcontext = useContext({
    items:[],
    addItem:(item)=>{},
    deleteItem:(id)=>{}
})

function cartReduderfunc(state,action){
    if(action.type === "AddItem"){
        const existingCartItemIndex = state.items.findIndex(() => item.id === action.item.id) // it returns the index, if not means it return -1

        const updatedItems = [...state.items];

        if(existingCartItemIndex > -1){
            const existingItem = state.items[existingCartItemIndex];

            const updatedItems = {
                ...state.items[existingCartItemIndex],
                quantity:state.items[existingCartItemIndex].quantity + 1
            }
            updatedItems[existingCartItemIndex] = updatedItems;
        }
        else{
            updatedItems.push({...action.item,quantity: 1})
        }
    }
    if(action.type === "DeleteItem"){

    }

    return state; // if the above condition fails then returns a same state
}

function CartContextProvider({children}){
    useReducer()
    return <Cartcontext.Provider>{children}</Cartcontext.Provider>
}