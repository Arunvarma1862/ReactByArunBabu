import React, { useState } from 'react'

function Search() {
    const [search,setSearch]=useState("helo")
    const data=[
        {id:1,name:"Apple"},
        {id:2,name:"mango"},
        {id:3,name:"grapes"},
        {id:1,name:"kiwi"},
        {id:1,name:"banana"},
        {id:6,name:"Appi"},
    ]
    function handleChange(e){
       setSearch(e.target.value)
    }
    const filteredData= data.filter((item)=>{
        return item.name.toLowerCase().includes(search.toLowerCase())
    })
  return (
    <div>
        <input type="text" placeholder='Enter here'  onChange={handleChange}    style={{
          padding: "10px",
          fontSize: "16px",
          marginBottom: "20px",
          width: "300px",
        }} value={search} />
        { filteredData.map((item)=>{
            return <ul>
                <li>{item.name}</li>
            </ul>
        })}
    </div>
  )
}

export default Search