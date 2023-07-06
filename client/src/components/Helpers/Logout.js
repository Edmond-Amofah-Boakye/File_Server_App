import axios from 'axios'
import server from '../Helpers/Server'

 //configuration
 const config = {headers:{
    "Authorization": `Bearer ${localStorage.getItem("token")}`
  }}

const LogOutUser = () =>{
   axios.get(`${server}/auth/logout`, config)
    .then(()=>{
        localStorage.removeItem("role")
        localStorage.removeItem("token")
        window.location.reload(true)
    })
    .catch((error)=>console.log(error))
}

export default LogOutUser