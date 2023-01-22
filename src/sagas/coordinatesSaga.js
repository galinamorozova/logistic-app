import { put, takeEvery, call, select } from 'redux-saga/effects';
import {getPolylineSuccess} from "../reducers/coordinatesSlice"
import {coordinatesFrom, coordinatesTo} from "../selectors";


function* coordinatesWorker() {
    let fromCoordinates = yield select(coordinatesFrom);
    let toCoordinates = yield select(coordinatesTo);
    let urlCoordinates = fromCoordinates.lng+','+fromCoordinates.lat+';'+toCoordinates.lng+','+toCoordinates.lat;
    const data = yield call(fetch, 'http://router.project-osrm.org/route/v1/driving/'+`${urlCoordinates}`+'?steps=false&geometries=geojson', { method: 'GET' });
    const formattedData = yield data.json();
    yield put(getPolylineSuccess(formattedData.routes[0].geometry.coordinates))
}

function* coordinatesWatcher() {
    yield takeEvery('coordinates/getPolyline', coordinatesWorker)
}

export default coordinatesWatcher
