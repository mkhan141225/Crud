import React,{useState} from 'react'
import './App.css';
import {  useSelector ,useDispatch} from 'react-redux'

import {addUser,deleteUser ,updateUsername} from './features/Users'


function App() {
const dispatch = useDispatch()
 const userList = useSelector((state)=>state.users.value)
const [name,setName] =useState("")
const [username,setusername] =useState("")
const [newUsername,setNewUsername] =useState("")
  return (
    <div className="App">
      <div className="addUser">
     <input onChange= {(e)=>{setName(e.target.value)}} type="text" placeholder='Name...'/>
     <input onChange= {(e)=>{setusername(e.target.value)}} type="text" placeholder='Username...'/>
     <button onClick={()=>{dispatch(addUser({id:userList[userList.length-1].id + 1,name,username}))}}>Add User</button>
     </div>

<div className="displayUsers">
{userList.map((user)=>{
  return (
    <div >
  <h1>{user.name}</h1>
  <h2>{user.username}</h2>
  <input type="text" placeholder='new Name...' onChange= {(e)=>{setNewUsername(e.target.value)
  } }/>
      <button
                onClick={() => {
                  dispatch(
                    updateUsername({ id: user.id, username: newUsername })
                  );
                }}
              >
                {" "}
                Update Username
              </button>
<button onClick={()=>{dispatch(deleteUser({id:user.id}))}}> delete username</button>
  </div>
  )
})})

</div>

    </div>

);
}

export default App;
