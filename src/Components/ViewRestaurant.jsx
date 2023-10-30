import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

function ViewRestaurant() {
    const {id} = useParams()
    const {allRestaurants,loading,error} = useSelector((state)=>state.restaurantSlice)
    const [restaurant,setRestaurant] = useState({})
    useEffect(()=>{
        setRestaurant(allRestaurants.find(item=>item.id==id))
    },[])
    console.log(restaurant);
  return (
    <div>
        View
    </div>
  )
}

export default ViewRestaurant
