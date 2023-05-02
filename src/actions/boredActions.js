import axios from 'axios';

export const GET_NEW_IDEA = 'GET_NEW_IDEA';


export const boredAction = () => dispatch => {
    axios.get('https://www.boredapi.com/api/activity')
    .then(res => {
        console.log(res.data)
       dispatch(getNewIdea(res.data.activity))
    })
    .catch(err => {
        console.log(err);
    })
}

export const getNewIdea = newIdea => ({
    type: GET_NEW_IDEA, payload: newIdea
})