"use client"
import React from 'react'
import useSWR from 'swr'
import axios from 'axios'

const getData = async (url: string): Promise<any[]> => {
  const res = await axios.get(url)
  return res.data
}

export default function Page() {
  const { data, error } = useSWR("https://jsonplaceholder.typicode.com/users", getData)
  if (error) return <div>Quá trình lấy dữ liệu thất bại</div>
  if (!data) return <div>Đang tải dữ liệu ... </div>
  return (
    <div>
      fetching data với thư viện swr
      <ul>
        {data.map((item: any) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  )
}
