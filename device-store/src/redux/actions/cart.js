export const addDeviceToCart = (deviceObj) => ({
    type: 'ADD_DEVICE_CART',
    payload: deviceObj,
});

export const clearCart = () => ({
    type: 'CLEAR_CART',
});

export const removeCartItem = (id) => ({
    type: 'REMOVE_CART_ITEM',
    payload: id,
});

export const plusCartItem = (id) => ({
    type: 'PLUS_CART_ITEM',
    payload: id,
});

export const minusCartItem = (id) => ({
    type: 'MINUS_CART_ITEM',
    payload: id,
});