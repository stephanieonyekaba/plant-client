import React, {useState, useEffect} from 'react'
import { getOnePlant, removeThePlant} from '../../api/Plants.js'
import { useParams } from 'react-router-dom'
import { Image, Button, Container } from 'react-bootstrap'
import {showPplantSucess, showPlantFailure} from '../shared/AutoDismissAlert/messages'
import { useNavigate } from 'react-router-dom'


const ShowPlant = (props) => {
    const navigate = useNavigate()
    const [plant, setPlant] = useState(null)
    // console.log('props in showplants', props)
    const { id } = useParams()
    // console.log('id in showplants', id)
    // empty dependency array in useEffect to act like component did mount
    
    useEffect(() => {            
        getOnePlant(id)
            .then(res => setPlant(res.data.plant))
            .catch(console.error)
    }, [id])

    // console.log("THIS IS PLANT", plant)
    // console.log("this is the user prop!", props.user)
    const removeThePlant = function (props) {
        // console.log("this is the user prop!", user)
        removeThePlant(props.user, plant._id)
            .then(() => {
                props.msgAlert({
                    heading: 'removed!!!',
                    message: "plant deleted",
                    variant: 'success',
                })
            })
            .then(() => {navigate(`/`)})
            .catch(() => {
                props.msgAlert({
                    heading: 'Uh oh!',
                    message: 'Something went wrong',
                    variant: 'danger',
                })
            })
    }

    if (!plant) {
        return (
            <h1>Loading....</h1>
        )
    }
    

    if(plant ) {

        plant.Jsx = (
        <p key={plant._id}><strong>
        {plant.height}</strong></p>
    )}


    return (

        <>
            <Container className="m-5">
                <p className="pic-title">"{plant.height}"</p>
                <Image src={plant.img} className="img-fluid shadow-4"/><br/>
                {/* <p>Featuring: {plant.height}</p> */}

                <Button onClick={() => removeThePlant(props)} className="m-2" variant="danger">
                    Delete Plant
                </Button>
                {/* <Button onClick={() => makeComment(props)}
                    className="m-2" variant="success">
                        Leave comment
                    </Button> */}
            </Container>

        
        </>
    )
}

export default ShowPlant
