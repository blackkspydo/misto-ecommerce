import CartContext from "./cart-context";
import { useReducer } from "react";

const cartReducer = (state, action) => {
	switch (action.type) {
		case "ADD_ITEM":
			return {
				...state,
				items: [...state.items, action.id],
			};

		case "REMOVE_ITEM":
			return {
				...state,
				items: state.items.filter((item) => item !== action.id),
			};
		case "CLEAR_CART":
			return {
				...state,
				items: [],
			};
		default:
			return state;
	}
};

const CartProvider = (props) => {
    const [cartState, dispatchCartState] = useReducer(cartReducer, {
        items: [],
    });
    const cartContext = {
        items: cartState.items,
        addItem: (id) => {
            dispatchCartState({
                type: "ADD_ITEM",
                id,
            });
        },
        removeItem: (id) => {
            dispatchCartState({
                type: "REMOVE_ITEM",
                id,
            });
        },
        clearCart: () => {
            dispatchCartState({
                type: "CLEAR_CART",
            });
        },
    };
    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    );
}
export default CartProvider;