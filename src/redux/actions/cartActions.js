import {
    ADD_TO_CART,
    INCREMENT_QUANTITY,
    DECREMENT_QUANTITY,
    REMOVE_FROM_CART
} from '../actionTypes';

export const addToCart = (plant) => ({
    type: ADD_TO_CART,
    payload: plant
});

export const incrementQuantity = (id) => ({
    type: INCREMENT_QUANTITY,
    payload: id
});

export const decrementQuantity = (id) => ({
    type: DECREMENT_QUANTITY,
    payload: id
});

export const removeFromCart = (id) => ({
    type: REMOVE_FROM_CART,
    payload: id
});