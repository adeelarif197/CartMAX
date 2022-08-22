import { createSlice } from '@reduxjs/toolkit';

export const cartReducer = createSlice({
	name: 'cart',
	initialState: {
		items: [],
		price: 0
	},
	reducers: {
		addProduct: (state, action) => {
			const itemExist = state.items.find((item) => item.title === action.payload.title);

			if (itemExist) {
				itemExist.quantity = itemExist.quantity + action.payload.quantity;
				state.items.filter((item) => {
					if (item.title === itemExist.title) {
						item = itemExist;
					}
				});

				state.price = state.price + parseInt(action.payload.price);
			} else {
				state.items = [ ...state.items, action.payload ];
				state.price = state.price + parseInt(action.payload.price);
			}
			console.log({...state.items}, state.price);
		},
		removeProduct: (state, action) => {
			state.items = state.items.filter(function(item) {
				return item.title !== action.payload.title;
			});
			state.price = state.price - parseInt(action.payload.price);
            console.log({...state.items}, state.price);
		}
	}
});

export const { addProduct, removeProduct } = cartReducer.actions;
export default cartReducer.reducer;
