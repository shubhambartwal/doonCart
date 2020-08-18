export const initialState={
basket:[],
user :null,
};
export const getBasketTotal = (basket) =>
basket?.reduce((amount,item) => item.price + amount, 0 )  ;
const reducer =(state,action) =>
{
    console.log(action);
    switch(action.type)
    {
        case "SET_USER" :
            return{
                ...state,
                user: action.user,

            }
        case "ADD_TO_BASKET" :
            //logic for adding items to basket
            return {
                ...state,
                basket :[...state.basket,action.item] ,
            };
        
    case "REMOVE_FROM_BASKET" :
        //logic for removing item from basket
      
      //we copied the basket
        let newBasket = [...state.basket];
        //check to see if item exist
       const index = state.basket.findIndex((basketItem) => basketItem.id === action.id) ;
       if(index>=0){
           //item exist in basket remove it
       newBasket.splice(index,1); 
        }
        else{
           console.warn(
               `Cant remove product (id :${action.id}) as there is nothing`
            ) ;
        }
        return {...state,basket :newBasket};
        
        default :
        return state;
    }
}
export default reducer;