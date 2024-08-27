import React from 'react'

async function B1() {
    const res= await fetch("https://jsonplaceholder.typicode.com/posts")
    const data=res.json()
    return data
}

export default async function Page() {
    const posts=await B1();
  return (
    <div>
      {posts.map((item:any)=>{
        return <li key={item.id}>{item.title}</li>
      })}
    </div>
  )
}
