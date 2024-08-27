"use client"
import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function B6() {
    const [users,setUsers]=useState([])
    useEffect(()=>{
       const getData = async ()=>{
            let res = await axios.get("https://jsonplaceholder.typicode.com/users")
            setUsers(res.data)
        }
        getData()
    },[])
  return (
    <div>
      {users.map((item:any)=>{
        return <li key={item.id}>{item.username}, {item.email}, {item.address.city}</li>
      })}
    </div>
  )
}
