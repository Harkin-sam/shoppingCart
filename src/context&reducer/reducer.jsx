export const initialState = {
  total: 0,
  totalAmount: 0,
  products: [],
};

const storeReducer = (state, action) => {
  switch (action.type) {
    case "add":
      return {
        ...state,
        products: action.payload,
      };
    case "remove":
      return {
        ...state,
        products: action.payload,
      };
    case "update price": 
      return {
        ...state, total: action.payload
      };
    case "clear cart": 
      return{
          ...initialState, products: action.payload
      };
    case "update amount": 
    return{
        ...state, totalAmount: action.payload
    };
    default: throw new Error("cannot match case in the reducer") //else
  }
};

export default storeReducer
