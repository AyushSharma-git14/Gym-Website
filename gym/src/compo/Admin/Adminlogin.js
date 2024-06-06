import React, { useState }from 'react'
import { useNavigate } from 'react-router-dom'

function Adminlogin(){
    const[data,setData]=useState({email:'',password:''})
    const navi=useNavigate()
    const handler=(e)=>{
      setData({...data,[e.target.name]:e.target.value})
    }
    const submitdata=()=>{
        const{email,password}=data
        
      if (email && password) {
        fetch('http://localhost:5000/admin-login', {
          method: 'POST',
          body: JSON.stringify({ email, password}),
          headers:{'Content-type':'application/json; charset=UTF-8',},
        })
          .then(res => res.json())
          .then((json) => {
            console.log(json)
            alert(json.message)
            if(json.message==="login success"){
              sessionStorage.setItem("emailID",json.user.email)
              sessionStorage.setItem('Profile',json.user.img)
              sessionStorage.setItem("token",json.token)
              navi('/fetch')
            }
          })
          .catch(err => console.log(err))
      }
      else {
        alert("Please fill email and password")
      };
    }
  return (
    <>
    
    <div className="container">
        <form method="post" >
        
          <div className="my-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              name="email"
              value={data.email}
              onChange={handler}
            />
          </div>
          <div className="my-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="Password1"
              name="password"
              value={data.password}
              onChange={handler}
            />
            </div>


            <button type="button" className="btn btn-danger" onClick={submitdata}>
            Submit
          </button>
            </form>
            </div>
            </>
   
  )
  
}

export default Adminlogin
