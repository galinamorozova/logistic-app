import {createSlice} from '@reduxjs/toolkit'


export const initialState = {

    from: {
        lat: 0,
        lng: 0
    },
    to: {
        lat: 0,
        lng: 0
    },
    isLoading: false,
    path: []
}

export const coordinatesSlice = createSlice({
    name: 'coordinates',
    initialState,
    reducers: {

        getNewFrom: (state, action) => {
            state.from.lat = action.payload.lat;
            state.from.lng = action.payload.lng;
        },
        getNewTo: (state, action) => {
            state.to.lat = action.payload.lat;
            state.to.lng = action.payload.lng;
        },
        getPolyline: (state) => {
           state.isLoading = true;
        },
        getPolylineSuccess: (state, action) => {
            state.path.length = 0;
            state.path.push(action.payload);
            state.isLoading = false;
        },
    },
})

export const { getNewFrom, getNewTo, getPolyline, getPolylineSuccess } = coordinatesSlice.actions;

export default coordinatesSlice.reducer;