import React from 'react'
import { useParams } from 'react-router-dom'

const Example = () => {
  const array = ['Drink Coffee', 'Go to the store', 'Take a shower']
  const { user } = useParams()
  const st = 'container'
  return (
    <div>
      <h1 className={st}>{user}</h1>
      <ul>
        {array.map((el) => {
          return <li>{el}</li>
        })}
      </ul>
    </div>
  )
}
export default Example
