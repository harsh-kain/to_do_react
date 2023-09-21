import  { useContext } from 'react'
import userContext from '../context/UserContext'
const Profile = () => {
    const {user} = useContext(userContext)

    if(!user) {
        console.log(user);
        return <div><h1>Pls Login</h1></div>
    }
    else{
        return <div> <h1>Welcome {user.userName}</h1></div>
    }
  
}

export default Profile