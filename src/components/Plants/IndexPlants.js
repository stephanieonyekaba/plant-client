
//Here I am importing some dependancies, inclduing the function getAllPlants whcih we created in 
//api/Plants

import React, { useState, useEffect, useRef } from 'react'
import { getAllPlants } from '../../api/Plants'
import { Link } from 'react-router-dom'
import { Image, Button, Container } from 'react-bootstrap'

//Here we are making a function that will contain all of our functions when called
//UseEffect is a function that allows us to use the function we made in the api/Plants
const IndexPlants = (props) => {
    const [plants, setPlants] = useState(null)

    useEffect(() => {
        getAllPlants()
            .then(res => {
                console.log("response data plants", res.data.plants)
                setPlants(res.data.plants)
            })
            .catch(console.error)
    }, [])
//on line 24 we are saying if we dont get any data back from the api call, send this message 
//then on the line below that, we are stating that if there are zero results back, we want to add some 
    if (!plants) {
        return <p>loading...</p>
    } else if (plants.length === 0) {
        return <p>no plants yet, go add some</p>
    }
//here we are sayin if we do get some data back from the call
//map each of those plants ( we use the map function because this is an array that will be returned)
//we use Jsx because it is a feature of react that allows us to use HTML
//we are saying to map the whole plant array (plants) and perform a certain fucntion for each (plant)
    if (plants.length > 0) {
        plants.Jsx = plants.map(plant => (

            <p className="p" key={plant.id}>
            <Link to={`./${plant._id}`}><img src= {plant.img} height="300"  /></Link>
        </p>
    ))
        
    }


    return (
        
        <>
         <Container className="indexplants">
        <h2 className="myplants">My plant Gallery</h2>
        {plants.Jsx}
       
        </Container>     
        </>
    )
  }
  
  export default IndexPlants

