import axios from 'axios'
import React from 'react'

async function getData() {
    const res= await axios.get("https://fakestoreapi.com/products");
    return res.data
}
getData()
export default async function page() {
    const users=await getData()
  return (
    <div>
        {users.map((item:any)=>{
            return <li key={item.id}>{item.title}</li>
        })}
    </div>
  )
}