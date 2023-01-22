import {
    MapContainer,
    Marker,
    Polyline,
    Popup,
    TileLayer,
    useMap
} from 'react-leaflet';
import React, {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import "../../App.css";

function Map() {
    const path = useSelector(state => state.coordinates.path);
    const [polyline, setPolyline] = useState([]);
    const [positionStart, setPositionStart] = useState([0, 0]);
    const [positionEnd, setPositionEnd] = useState([0, 0]);
    const map = useMap()

    useEffect(() => {
        let polylineBuffer = [];
        if (path.length > 0 && path[0].length > 0) {
            let item = path[0];
            if (item) {
                for (let i = 0; i < item.length; i++) {
                    let itemChild = item[i]
                    polylineBuffer.push([itemChild[1], itemChild[0]])
                }
                setPolyline(polylineBuffer)
                setPositionStart(polylineBuffer[0]);
                setPositionEnd(polylineBuffer[polylineBuffer.length - 1]);
                map.fitBounds([polylineBuffer])
            }
        }
    }, [path])

    return (<>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={positionStart}>
                <Popup>
                    Самый оптимальный маршрут
                </Popup>
            </Marker>
            <Marker position={positionEnd}>
                <Popup>
                    Самый оптимальный маршрут
                </Popup>
            </Marker>
            {polyline.length > 0 &&
                <Polyline key={Math.random()} positions={[polyline]} color={'red'}/>
            }
        </>

    )
}

const TrackingMap = () => {

    return <div className="map-container">
        <MapContainer
            center={[59.847278, 30.295984]}
            zoom={13}
            scrollWheelZoom={false}
            className="map"
        >
            <Map/>

        </MapContainer>
    </div>
}
export default TrackingMap;