import axios from 'axios';
import React from 'react';

async function getWeatherData() {
    try {
        const response = await axios.get('https://api.open-meteo.com/v1/forecast', {
            params: {
                latitude: 21.0285,
                longitude: 105.8542,
                hourly: 'temperature_2m,weathercode',
            }
        });
        return response.data;
    } catch (error) {
        console.error('Lỗi khi lấy dữ liệu thời tiết:', error);
        return null;
    }
}

export default async function WeatherPage() {
    const weatherData = await getWeatherData();
    if (!weatherData) {
        return <div>Không thể tải dữ liệu thời tiết</div>;
    }
    const nhietDo = weatherData.hourly.temperature_2m[0];
    const code = weatherData.hourly.weathercode[0];
    return (
        <div>
            <h1>Thông tin thời tiết tại Hà Nội</h1>
            <p>Nhiệt độ hiện tại: {nhietDo}°C</p>
            <p>Mã thời tiết: {code}</p>
        </div>
    );
}
