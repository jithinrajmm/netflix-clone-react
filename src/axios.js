import axios from 'axios'

const instace = axios.create(
    {
       
        baseURL:"https://api.themoviedb.org/3",
        
    },

)
// instance.get('/hom')
// output -----> 😁😁 'https://api.themoviedb.org/3/hom'

export default instace