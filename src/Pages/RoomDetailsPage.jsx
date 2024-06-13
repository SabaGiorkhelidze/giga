import React from 'react'
import { useParams } from 'react-router-dom';

const RoomDetailsPage = () => {
    const { id } = useParams();
  return (
    <div>room ID: {id}</div>
  )
}

export default RoomDetailsPage