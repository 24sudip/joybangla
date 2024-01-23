import React from 'react'

const List = ({menuName,className}) => {
  return (
    <li className={`${className}`}>{menuName}</li>
  )
}

export default List
