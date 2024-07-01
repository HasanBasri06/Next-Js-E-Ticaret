// "use client"

// import { toast } from "react-toastify";

// const { createContext, Children, useReducer, useContext } = require("react");

// const BasketContext = createContext()

// const basketReducer = (state, action) => {
//     switch (action.type) {
//         case 'ADD_TO_BASKET':
//             return {...state, items: [...state.items, action.payload]}

//         case 'REMOVE_FROM_BASKET':
//             return { ...state, items: state.items.filter(item => item.id !== action.payload) };
    
//         default:
//             return state
//     }
// }

// export const BasketProvider = ({children}) => {
//     const [state, dispatch] = useReducer(basketReducer, {items: []})

//     const addToBasket = (item) => {
//         dispatch({type: 'ADD_TO_BASKET', payload: item})
//         toast.success("Sepete ürün eklendi", {
//             position: "bottom-right",  
//         })
//     }

//     const removeFromBasket = (id) => {
//         dispatch({type: 'REMOVE_FROM_BASKET', payload: id})
//     }

//     return (
//         <BasketContext.Provider value={{ cart: state, addToBasket, removeFromBasket }}>
//             {children}
//         </BasketContext.Provider>
//     )
// }

// export const useBasket = () => useContext(BasketContext)

"use client"

import { createContext, useContext, useState } from "react"
import { toast } from "react-toastify"


export const BasketContext = createContext()

export const BasketProvider = ({children})  => {
    const [basket, setBasket] = useState([])

    const addToBasket = (product) => {
        setBasket(basket => [...basket, product])
        toast.success('Sepete ürün eklendi', {
            position: 'bottom-right'
        })

        console.log(basket);
    }

    return <BasketContext.Provider value={{addToBasket, basketLength: basket.length}}>
        {children}
    </BasketContext.Provider>
}

export const useBasket = () => useContext(BasketContext)