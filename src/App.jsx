import { useEffect, useState } from 'react'
import './App.css'
import React from 'react';
import Item from './Item';

const api = 'https://jsonplaceholder.typicode.com/';
let query = 'users';

function App() {
  const [data, setData] = useState(null)

  useEffect(() => {
      async function fetchData() {
          const res = await fetch(`${api + query}`)
          if (!res.ok) {
              throw new Error('Failed to fetch data')
          }
          const data = await res.json()
          console.log("App useEffect data: ")
          console.log(data)
          setData(data)
      }
      fetchData()
  }, [query])

  return (
    <div className='text-left'>
      {data?.map(item => <Item key={item.id} data={item}></Item>)}
    </div>
  )
}

export default App
