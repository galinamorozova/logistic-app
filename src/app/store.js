import {configureStore} from '@reduxjs/toolkit';
import coordinatesReducer from '../reducers/coordinatesSlice';
import createSagaMiddleware from 'redux-saga'
import coordinatesWatcher from "../sagas/coordinatesSaga";


const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    coordinates: coordinatesReducer,
  },
  middleware: [sagaMiddleware]

});

sagaMiddleware.run(coordinatesWatcher)
