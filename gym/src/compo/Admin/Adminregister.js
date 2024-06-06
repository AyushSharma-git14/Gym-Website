import React, { useState } from 'react'

function Adminregister() {
    const[data,setData]=useState({name:'',email:'',password:'',conpass:'',img:''})
    const handler=(e)=>{
      setData({...data,[e.target.name]:e.target.value})
    }
    const filehandler=(e)=>{
      setData({...data,img:e.target.files[0]})
    }
    const submitdata=()=>{
      const{name,email,password,conpass,img}=data
      const formdata =new FormData()
      formdata.append('name',name);
      formdata.append('email',email);
      formdata.append('password',password);
      formdata.append('conpass',conpass);
      formdata.append('img',img);
      if(password===conpass){
         fetch('http://localhost:5000/admin-register',{
          method:'POST',
          body:formdata
        })
        .then(res=>res.json())
        .then((json)=>{
          alert(json.message)
          setData({name:'',email:'',password:'',conpass:'',img:''})
        })
        .catch(err=>console.log(err))
      }
      else{
        alert("password and conpass does not match")
      };
    
    }
  return (
    <>
      <div className="container">
        <form method="post" encType="multipart/form-data">
        <div className="my-3">
            <label htmlFor="exampleInputName1" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputName1"
              aria-describedby="nameHelp"
              name="name"
              value={data.name}
              onChange={handler}
            />
          </div>
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
          <div className="my-3">
            <label htmlFor="exampleInputPassword2" className="form-label">
              Confirm Password
            </label>
            <input
              type="password"
              className="form-control"
              id="confirmpass"
              name="conpass"
              value={data.conpass}
              onChange={handler}
            />
          </div>
          <div>
            Profile: <input type="file" name="img" onChange={filehandler}/>
          </div><br/>

          <button type="button" className="btn btn-danger" onClick={submitdata}>
            Submit
          </button>
        </form>
      </div>
    </>
  )
}

export default Adminregister
