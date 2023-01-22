import React from 'react';
import './App.css';
import Application from "./components/application/Application";
import TrackingMap from "./components/trackingMap/TrackingMap";
import {Col, Row} from "antd";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <h> Логистическое приложение</h>
            </header>
            <div>
                <div className="App-description">
                    <p>По выбору заявки на карте отображается маршрут с точками погрузки и загрузки.</p>
                    <p>Полилиния трека получена с помощью сервиса OSRM. При выборе заявки, на карте происходит
                        масштабирование таким образом, чтобы весь маршрут попал в область видимости карты.</p>
                    <p>Для хранения стейта компонентов и данных использован Redux (redux-toolkit), для реакции на
                        события — Saga.</p>
                </div>
                <Row justify="space-around" align="middle" wrap="wrap"
                     gutter={{
                         xs: 6,
                         sm: 16,
                         md: 24,
                         lg: 32,
                     }}
                >
                    <Col span={12}>
                        <Application/>
                    </Col>
                    <Col span={12}>
                        <TrackingMap/>
                    </Col>
                </Row>
            </div>
        </div>
    );
}

export default App;
