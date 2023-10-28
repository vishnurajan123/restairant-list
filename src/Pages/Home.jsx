import React, { useEffect } from 'react'
import { Row,Col } from 'react-bootstrap'
import RestCard from '../Components/RestCard'
import { useDispatch, useSelector } from 'react-redux'
import { fetchResturents } from '../redux/resturentSlice'

function Home() {
  const allResturents=useSelector((state)=>state.resturentSlice.allResturents)
  const dispatch=useDispatch()
  useEffect(()=>{
    dispatch(fetchResturents)
  },[])
  return (
    <>
        <Row className='mt-5'>

          {
            allResturents.length>0?allResturents.map(resturent=>(
              <Col className='px-5 py-3' sm={12} md={6} lg={4}>
            <RestCard resturent={resturent}/>
          </Col>
            ))
            :null
          }
        </Row>
    </>
  )
}

export default Home
