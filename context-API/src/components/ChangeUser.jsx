import { useContext } from "react"
import UserContext from "../context/UserContext"

function ChangeUser() {
   const {user, setUser} = useContext(UserContext);
  return (
    <button onClick={() => setUser(user === 'Ilya' ? 'Alex' : 'Ilya')}>Change user</button>
  )
}

export default ChangeUser