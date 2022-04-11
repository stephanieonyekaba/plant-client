// Here we are importing some of our dependancies 

import apiUrl from '../apiConfig'
import axios from 'axios'

//INDEX ROUTE
//Here we are creating a function that will be called in our index plant page
//this function allows us to access the data from our plant-api 
//we make sure the routes we are hitting here match up with the routes in our plant api project

export const getAllPlants = () => {
    return axios(`${apiUrl}/plants`)
}

//SHOWROUTE
//Here we are creating a function that will be called in our show plant page
//this function allows us to access the data from our plant-api 
//we make sure the routes we are hitting here match up with the routes in our plant api project
//I named this function getOnePlant because the show page is simply one item I want to display, however since 
//it is just the name of the function it could be called anything. 

export const getOnePlant = (plantId) => {
    return axios(`${apiUrl}/plants/${plantId}`)
}


// POST -> create function
// export const createPicture = (user, newPicture) => {
//     console.log("this is the new picture", newPicture)
//     return axios({
//         url: `${apiUrl}/pictures`,
//         method: 'POST',
//         headers: {
//             Authorization: `Token token=${user.token}`
//         },
//         data: {picture: newPicture}
//     })
// }


// DELETE
// API call to destroy a sighting from the database.
export const removeThePlant = (user, plantId) => {
    console.log(typeof plantId)
    console.log("user in delete:", user)
    // console.log("id in delete:", pictureId)
    return axios({
        url: `${apiUrl}/plants/${plantId}`,
        method: "DELETE",
        headers: {
            Authorization: `Token token=${user.token}`
        }
    })
}