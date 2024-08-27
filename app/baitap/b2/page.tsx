import axios from 'axios'
import React from 'react'

async function B2() {
    const res= await axios.get("https://fakestoreapi.com/products");
    return res.data
}

B2()
export default async function page() {
    const users=await B2()
  return (
    <div>
      Tìm nạp dữ liệu bằng server bằng axios
        {users.map((item:any)=>{
            return <li key={item.id}>{item.title}, {item.price}, <img src={item.image} alt="" /></li>
        })}
    </div>
  )
}
