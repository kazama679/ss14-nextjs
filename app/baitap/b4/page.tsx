import axios from 'axios';
import React from 'react';

async function getData() {
    try {
        const res = await axios.get("https://example.com/invalid-endpoint");
        return { data: res.data, error: null };
    } catch (error: any) {
        if (error.response) {
            if (error.response.status === 404) {
                return { data: null, error: 'Lỗi 404: Trang không tồn tại.' };
            } else if (error.response.status === 500) {
                return { data: null, error: 'Lỗi 500: Lỗi server.' };
            } else {
                return { data: null, error: `Lỗi ${error.response.status}: ${error.response.statusText}` };
            }
        } else {
            return { data: null, error: 'Lỗi: Không thể kết nối đến API.' };
        }
    }
}

export default async function Page() {
    const { data, error } = await getData();
    if (error) {
        return (
            <div>
                <h1>Thông báo lỗi</h1>
                <p>{error}</p>
            </div>
        );
    }
    return (
        <div>
            {/* <h1>Dữ liệu từ API</h1>
            {data && data.map((item: any) => (
                <li key={item.id}>{item.name}</li>
            ))} */}
        </div>
    );
}
