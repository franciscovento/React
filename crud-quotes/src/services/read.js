import axios from 'axios'


export const read = async () => {
    const resp = await axios({
        method: 'GET',
        url: '/quotes',
        baseURL: 'https://prof-quotes.herokuapp.com/api' 
    })

    return resp.data
}

