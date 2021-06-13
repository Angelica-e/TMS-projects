import axios from 'axios';

export const setLoaded = (payload) => ({
    type: 'SET_LOADED',
    payload,
});

export const fetchDevices = (sortBy, category) => (dispatch) => {
    dispatch(setLoaded(false));
    axios.get(`http://localhost:3001/devices?${category !== null ? `category=${category}` : ''
        }&_sort=${sortBy.type}&_order=${sortBy.order}`,
    )
        .then(({ data }) => {
            dispatch(setDevices(data));
        });
};

export const setDevices = (items) => ({
    type: 'SET_DEVICES',
    payload: items,
});