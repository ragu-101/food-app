import { createContext, useContext, useReducer } from "react";

const CartContext = createContext({
    items:[],
    addItem:(item)=>{},
    deleteItem:(id)=>{}
})

function cartReduderfunc(state,action){
    if(action.type === "AddItem"){
        const existingCartItemIndex = state.items.findIndex((item) => item.id === action.item.id) // it returns the index, if not means it return -1

        const updatedItems = [...state.items];

        if(existingCartItemIndex > -1){
            const existingItem = state.items[existingCartItemIndex];


            const updatedItems = {
                ...existingItem,
                quantity:existingItem.quantity + 1,
            }
            updatedItems[existingCartItemIndex] = updatedItems;
        }
        else{
            updatedItems.push({...action.item,quantity: 1})}

        return {...state,items:updatedItems}
    }
    if(action.type === "DeleteItem"){
        const existingCartItemIndex = state.items.findIndex((item) => item.id === action.id
    );

    const existingCartItem = state.items[existingCartItemIndex];
    
    const updatedItems = [...state.items]

    if(existingCartItem.quantity === 1){

        updatedItems.splice(existingCartItemIndex,1);
    }else{
        const updatedItems = {
            ...existingCartItem,quantity:existingCartItem.quantity - 1,
        }
        updatedItems[existingCartItemIndex] = updatedItems;
    }
    return {...state,items:updatedItems}
    }

    return state; // if the above condition fails then returns a same state
}

export function CartContextProvider({children}){
    const [cart,dispatchCartAction] = useReducer(cartReduderfunc,{items:[]})

    function addItem(item){
        dispatchCartAction({type:"AddItem",item}) // if we use to assign same name we can use simply "item"  it refers  item => item : item 
    }
    function removeItem(id){
dispatchCartAction({type:'DeleteItem',id})
    }

    const cartContxt ={
        items:cart.items,
        addItem, // it refers addItem : addItem
        deleteItem:removeItem,
    }

    console.log(CartContext)

    return <CartContext.Provider value={cartContxt}>{children}</CartContext.Provider>
}
export default CartContext;