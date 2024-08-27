import axios from 'axios'
import React from 'react'

async function getData() {
    const res= await axios.get("https://jsonplaceholder.typicode.com/users");
    console.log('111111111111111111111giá trị của res',res.data);
    return res.data
}
getData()
export default async function page() {
    const users=await getData()
  return (
    <div>
      Tìm nạp dữ liệu bằng server bằng axios
        {users.map((item:any)=>{
            return <li key={item.id}>{item.name}</li>
        })}
    </div>
  )
}
