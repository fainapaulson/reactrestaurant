import React, { useEffect, useState } from 'react'
import {  useParams } from 'react-router-dom'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import ListGroup from 'react-bootstrap/ListGroup';
import OperatingTime from './OperatingTime';
import Review from './Review';

function RestView() {

const [allRest,setAllRest]=useState([])
const getRest=async ()=>{
    const result=await fetch('/restaurants.json')
    result.json().then(data=>{
        setAllRest(data.restaurants);
    })
}

    // object creation for hook useparams
    const params=useParams()
    // find single product
    const singleRest=allRest.find(i=>i.id==params.id)
    console.log(singleRest);

    useEffect(()=>{
        getRest()
    },[])

  return (
<>

{  
    singleRest? (
    
    <Row>
<Col lg={6} md={12} sm={12} xl={6} >
<Image className='w-75 p-5'
style={{height:'800px'}}
src={singleRest.photograph} rounded/>
</Col>
<Col lg={6} md={12} sm={12} xl={4}>
    <h1 className='mt-5'>{singleRest.name}</h1>
<ListGroup className='fs-4 mt-5'>
      <ListGroup.Item>Neighborhood:<strong className='text-warning'> {singleRest.neighborhood}</strong></ListGroup.Item>
      <ListGroup.Item>Address:<strong className='text-warning'>{singleRest.address}</strong> </ListGroup.Item>
      <ListGroup.Item>Cuisine_type: <strong className='text-warning'>{singleRest.cuisine_type}</strong></ListGroup.Item>
      <ListGroup.Item className='p-4 mt-2'>
<OperatingTime timeData={singleRest.operating_hours}/>
</ListGroup.Item>

<ListGroup.Item className='p-4 mt-2'>
    <Review reviews={singleRest.reviews}/>
</ListGroup.Item>

    </ListGroup>

</Col>
    </Row>

    ):'null'
} 
</>
 )
}

export default RestView