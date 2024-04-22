






//reducer 
// access => state , action
// state => edit by action

import { json } from "react-router-dom";
import { add100, addProduct , addFavorite, deleteProduct, removeFavorite, deleteProduct123, removeFavorite123 } from "./Actions/action-types";

const intialstate = {
    cartTotalQuantity : 0,
    cartTotalAmount : 0, 
}

let cartID = JSON.parse(localStorage.getItem("productsID"))||[];
let favoID = JSON.parse(localStorage.getItem("favoID")) || [];



const reducer1 = (state = {
    x1 : 0 , 
    x2 : JSON.parse(localStorage.getItem("productsID"))||[] , 
    x3 : JSON.parse(localStorage.getItem("productsID"))||[] ,
    x4 : JSON.parse(localStorage.getItem("favoID"))||[] } , action)=>{
    switch (action.type) {  
        case add100:
        {
            localStorage.setItem("key" , action.value);
            return {...state , x1 : action.value}
        }
        case addProduct:
        {
            const c = cartID.find((obj) => {return obj === action.id});
            if(c===undefined)
            {
                cartID.push(action.id);
                //state.x2.push(action.id);
                localStorage.setItem("productsID",JSON.stringify(cartID));
                return {...state , x2 : JSON.parse(localStorage.getItem("productsID")) , x3 : JSON.parse(localStorage.getItem("productsID"))}
            }
        }
        case deleteProduct:
        {
            const c = cartID.findIndex((obj)=>{return obj === action.index});
            if (c!==-1) {
                console.log(1000);
                cartID.splice(c,1);
                //state.x2.splice(c,1);
                localStorage.setItem("productsID" , JSON.stringify(cartID))
                return {...state , x2 : JSON.parse(localStorage.getItem("productsID"))}
            }
        }
        case deleteProduct123:
        {
            console.log(10101);
            const c = cartID.findIndex((obj)=>{return obj == action.index123});
            if (c!==-1) {
                cartID.splice(c,1);
                //state.x2.splice(c,1);
                localStorage.setItem("productsID" , JSON.stringify(cartID))
                return {...state , x3 : JSON.parse(localStorage.getItem("productsID"))}
            }
        }         
        case addFavorite:
            {
                const c = favoID.find((obj) => {return obj === action.id});
                if(c===undefined && action.id !== null)
                {
                    favoID.push(action.id);
                    localStorage.setItem("favoID",JSON.stringify(favoID))
                }
                return {...state}
            }
        case removeFavorite:
            {                    
                console.log(121212);
                const c = favoID.findIndex((obj)=>{return obj == action.index});
                if (c!==-1) {
                    favoID.splice(c,1);
                    localStorage.setItem("favoID" , JSON.stringify(favoID));
                    return {...state , x4 : JSON.parse(localStorage.getItem("favoID"))}
                }
            }            
        default:
            return state;
    }
}
export default reducer1;

