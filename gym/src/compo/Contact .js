import React, { useState } from 'react'

function Contact () {
 
  const[state,setState]=useState({name:'',email:'',mobile:'',message:''})
  const handler=(e)=>{
    setState({...state,[e.target.name]:e.target.value})
  }
  const submit=()=>{
    const{name,email,mobile,message}=state
    fetch('http://localhost:5000/contact', {
      method: 'POST',
      body: JSON.stringify({name,email,mobile,message}),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((json) => {
        console.log(json)
        alert(json.Message)
        setState({name:'',email:'',mobile:'',message:''})
      })
      
      .catch((err)=>console.log(err))
    }
  
  return (
    <>
   
  <section className="contact_section ">
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-6 px-0">
          <div className="img-box">
            <img src="images/contact-img.jpg" alt=""/>
          </div>
        </div>
        <div className="col-lg-5 col-md-6">
          <div className="form_container pr-0 pr-lg-5 mr-0 mr-lg-2">
            <div className="heading_container">
              <h2>
                Contact Us
              </h2>
            </div>
            <form action="" method='post'>
              <div>
                <input type="text" placeholder="Name"  name='name' value={state.name} onChange={handler}/>
              </div>
              <div>
                <input type="email" placeholder="Email" name='email' value={state.email}  onChange={handler}/>
              </div>
              <div>
                <input type="text" placeholder="Phone Number" name='mobile' value={state.mobile} onChange={handler}/>
              </div>
              <div>
                <input type="text" className="message-box" placeholder="Message" name='message' value={state.message} onChange={handler} />
              </div>
              <div className="d-flex ">
                <button type='button' onClick={submit}>
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>

    </>
  )
}

export default Contact 
