import {Radio, Col, Row, Space, Divider} from "antd";
import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {getNewFrom, getNewTo, getPolyline} from "../../reducers/coordinatesSlice";
import {coordinatesFrom, coordinatesTo} from "../../selectors";
import data from '../../data.js'
import "../../App.css";


const Application = () => {

    const dispatch = useDispatch();
    const fromCoordinates = useSelector(coordinatesFrom);
    const toCoordinates = useSelector(coordinatesTo);

    return (
        <>
            <Row justify="start" align="middle"
                 gutter={{
                     xs: 8,
                     sm: 16,
                     md: 24,
                     lg: 32,
                 }}>
                <Col span={24}>
                    {
                        data.map(item => {
                            return (
                                <div key={item.id}>
                                    <Divider>
                                        <Row justify="start" align="middle">
                                            <Col span={24}>
                                                <Radio.Button type="primary"
                                                              onClick={() => {
                                                                  dispatch(getNewFrom(item.from));
                                                                  dispatch(getNewTo(item.to));
                                                                  dispatch(getPolyline(item.from, item.to));
                                                              }}>
                                                    {
                                                        (item.from.lat === fromCoordinates.lat && item.from.lng === fromCoordinates.lng &&
                                                            item.to.lat === toCoordinates.lat && item.to.lng === toCoordinates.lng) ?
                                                            <span className="active-application">Заявка №{item.id}</span>
                                                            :
                                                            <span>Заявка №{item.id}</span>
                                                    }
                                                </Radio.Button>
                                            </Col>
                                        </Row>
                                    </Divider>
                                    <Row>
                                        <Col span={24}>
                                            <p className="coordinates-from">От {item.from.lat} : {item.from.lng}</p>
                                            <p className="coordinates-to">До {item.to.lat} : {item.to.lng}</p>
                                        </Col>
                                    </Row>
                                </div>
                            )
                        })
                    }
                </Col>
            </Row>
            <div>
                <h2>Координаты выбранного пути:</h2>
                <p> От {fromCoordinates.lat}: {fromCoordinates.lng}</p>
                <p> До {toCoordinates.lat} : {toCoordinates.lng}</p>
            </div>
        </>


    )
}

export default Application