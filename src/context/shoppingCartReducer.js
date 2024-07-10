export const initialCartState = {
	items: [],
	total: 0,
};

// Action Caller
export const addItem = (item) => ({
	type: "ADD_ITEM",
	payload: item,
});
export const removeItem = (id) => ({
	type: "REMOVE_ITEM",
	payload: id,
});
export const clearCart = () => ({
	type: "CLEAR_CART",
});

const shoppingCartReducer = (state, action) => {
	switch (action.type) {
		case "ADD_ITEM":
			const updatedTotal =
				state.total + action.payload.price * action.payload.quantity;
			return {
				...state,
				items: [...state.items, action.payload],
				total: updatedTotal,
			};
		case "REMOVE_ITEM":
			const filteredItems = state.items.filter(
				(item) => item.id !== action.payload,
			);
			const newTotal =
				state.total - action.payload.price * action.payload.quantity;
			return {
				...state,
				items: filteredItems,
				total: newTotal,
			};
		case "CLEAR_CART":
			return {
				...state,
				items: [],
				total: 0,
			};
		default:
			return state;
	}
};

export default shoppingCartReducer;
