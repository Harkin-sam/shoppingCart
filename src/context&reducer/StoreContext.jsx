import { createContext, useReducer } from "react";
import storeReducer, { initialState } from "./reducer";

export const StoreContext = createContext();

export const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(storeReducer, initialState);

  //ADD
  const addToBasket = (product) => {
    let updatedBasket = state.products;
    let newTotalAmount = state.totalAmount;

    // find existing product
    const existingProductIndex = updatedBasket.findIndex(
      (item) => item.id === product.id
    );

    // get existing object from index
    const existingItem = updatedBasket[existingProductIndex];

    if (existingItem) {
      const updatedProduct = {
        ...existingItem,
        amount: +existingItem.amount + Number(product.amount),
      };

      updatedBasket[existingProductIndex] = updatedProduct;

      newTotalAmount = newTotalAmount + 1;
      updatePrice(updatedBasket); // each time an item is added to removed from the basket the updated price runs  and total amount will be updated automatically

      dispatch({ type: "add", payload: updatedBasket });
      dispatch({ type: "update amount", payload: newTotalAmount });
    } else {
      updatedBasket.push(product);
      newTotalAmount = newTotalAmount + 1;
      updatePrice(updatedBasket); // each time

      dispatch({ type: "add", payload: updatedBasket });
      dispatch({ type: "update amount", payload: newTotalAmount });
    }
  };

  //REMOVE
  const removeFromBasket = (product) => {
    let updatedBasket = state.products;
    let newTotalAmount = state.totalAmount;

    const existingProductIndex = updatedBasket.findIndex(
      (item) => item.id === product.id
    );
    const existingItem = updatedBasket[existingProductIndex];

    if (existingItem.amount === 1) {
      const filteredBasket = state.products.filter(
        (currentProduct) => currentProduct.id !== product.id
      );

      newTotalAmount = newTotalAmount - 1;
      updatePrice(filteredBasket);

      dispatch({
        type: "remove",
        payload: filteredBasket,
      });

      dispatch({
        type: "update amount",
        payload: newTotalAmount,
      });
    } else {
      const updatedProduct = {
        ...existingItem,
        amount: existingItem.amount - 1,
      };

      updatedBasket[existingProductIndex] = updatedProduct;
      newTotalAmount = newTotalAmount - 1;
      updatePrice(updatedBasket);

      dispatch({
        type: "remove",
        payload: updatedBasket,
      });

      dispatch({
        type: "update amount",
        payload: newTotalAmount,
      });
    }
  };

  // receives array of products
  const updatePrice = (products) => {
    let total = 0;
    products.forEach((product) => {
      total += Number(product.price) * product.amount;
    });

    dispatch({
      type: "update price",
      payload: total,
    });
  };

  const clearCart = () => {
    dispatch({
      type: "clear cart",
      payload: [] //idk products array not revaluating in basket.jsx for some reason but i had to add this to work
    });
  };

  const value = {
    total: state.total,
    products: state.products,
    totalAmount: state.totalAmount,
    addToBasket,
    removeFromBasket,
    clearCart,
  };

  return (
    <StoreContext.Provider value={value}>{children}</StoreContext.Provider>
  );
};
