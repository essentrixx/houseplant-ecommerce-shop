import {
    ADD_TO_CART,
    INCREMENT_QUANTITY,
    DECREMENT_QUANTITY,
    REMOVE_FROM_CART
} from '../actionTypes';

const initialState = {
    cart: [],
    plants: [
        { id: 1, name: 'Monstera Deliciosa', price: 35, category: 'Large Plants', image: '🌿', description: 'Popular swiss cheese plant with split leaves' },
        { id: 2, name: 'Snake Plant', price: 25, category: 'Low Maintenance', image: '🌱', description: 'Hardy plant that purifies air' },
        { id: 3, name: 'Pothos', price: 15, category: 'Hanging Plants', image: '🍃', description: 'Easy care trailing vine' },
        { id: 4, name: 'Fiddle Leaf Fig', price: 45, category: 'Large Plants', image: '🌳', description: 'Statement plant with violin-shaped leaves' },
        { id: 5, name: 'Spider Plant', price: 12, category: 'Hanging Plants', image: '🕸️', description: 'Pet-friendly with spiderettes' },
        { id: 6, name: 'ZZ Plant', price: 30, category: 'Low Maintenance', image: '🌾', description: 'Drought tolerant glossy leaves' }
    ]
};

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            return {
                ...state,
                cart: [...state.cart, { ...action.payload, quantity: 1 }]
            };

        case INCREMENT_QUANTITY:
            return {
                ...state,
                cart: state.cart.map(item =>
                    item.id === action.payload
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                )
            };

        case DECREMENT_QUANTITY:
            return {
                ...state,
                cart: state.cart.map(item =>
                    item.id === action.payload && item.quantity > 1
                        ? { ...item, quantity: item.quantity - 1 }
                        : item
                )
            };

        case REMOVE_FROM_CART:
            return {
                ...state,
                cart: state.cart.filter(item => item.id !== action.payload)
            };

        default:
            return state;
    }
};

export default cartReducer;