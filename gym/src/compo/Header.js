import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Header() {
  const redirect=useNavigate()
  const eml=sessionStorage.getItem("emailID")
  const pic=sessionStorage.getItem("Profile")
  const authtoken=sessionStorage.getItem('token')
  const logout=()=>{
    sessionStorage.clear()
    redirect('/')
  }
  return (
    <>
    <div className="hero_area">
    <header className="header_section">
      <div className="container-fluid">
        <nav className="navbar navbar-expand-lg custom_nav-container ">
          <Link className="navbar-brand" to="/">
            <span>
              Neogym
            </span>
          </Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <div className="d-flex ml-auto flex-column flex-lg-row align-items-center">
              {
                authtoken ?
                <ul className="navbar-nav  ">
                <li className="nav-item ">
                  <Link className="nav-link" to="/fetch">Fetch <span className="sr-only">(current)</span></Link>
                </li>

                <li className="nav-item ">
                  <button className='btn btn-info' onClick={logout}>Logout user</button>
                  <button className='btn btn-primary'>Welcome:{eml}</button>
                </li>
                </ul>
                :
                <ul className="navbar-nav  ">
                <li className="nav-item ">
                  <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                </li>
                <li className="nav-item ">
                  <Link className="nav-link" to="/whyus"> Why us </Link>
                </li>
                
                <li className="nav-item">
                  <Link className="nav-link" to="/trainer"> trainers</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/contact"> Contact Us</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/admin-register">Admin-Register</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/gym-register">Gym-Register</Link>
                </li>
                <li className="nav-item ">
                  <Link className="nav-link" to="/fetchUser">Fetch <span className="sr-only"></span></Link>
                </li>
              </ul>
              }
              
            </div>
          </div>
        </nav>
      </div>
    </header>
    <section className=" slider_section position-relative">
      <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="container">
              <div className="col-lg-10 col-md-11 mx-auto">
                <div className="detail-box">
                  <div>
                    <h3>
                      Fitness
                    </h3>
                    <h2>
                      Training
                    </h2>
                    <h1>
                      Neogym
                    </h1>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse .
                    </p>
                    <div className="">
                      <Link to="">
                        Contact Us
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="container">
              <div className="col-lg-10 col-md-11 mx-auto">
                <div className="detail-box">
                  <div>
                    <h3>
                      Fitness
                    </h3>
                    <h2>
                      Training
                    </h2>
                    <h1>
                      Neogym
                    </h1>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse .
                    </p>
                    <div className="">
                      <Link to="">
                        Contact Us
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="container">
              <div className="col-lg-10 col-md-11 mx-auto">
                <div className="detail-box">
                  <div>
                    <h3>
                      Fitness
                    </h3>
                    <h2>
                      Training
                    </h2>
                    <h1>
                      Neogym
                    </h1>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse .
                    </p>
                    <div className="">
                      <Link to="">
                        Contact Us
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="container">
              <div className="col-lg-10 col-md-11 mx-auto">
                <div className="detail-box">
                  <div>
                    <h3>
                      Fitness
                    </h3>
                    <h2>
                      Training
                    </h2>
                    <h1>
                      Neogym
                    </h1>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse .
                    </p>
                    <div className="">
                      <Link to="">
                        Contact Us
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="container">
              <div className="col-lg-10 col-md-11 mx-auto">
                <div className="detail-box">
                  <div>
                    <h3>
                      Fitness
                    </h3>
                    <h2>
                      Training
                    </h2>
                    <h1>
                      Neogym
                    </h1>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse .
                    </p>
                    <div className="">
                      <Link to="">
                        Contact Us
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ol className="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
        </ol>
      </div>
    </section>
    </div>
    {/* <!-- end header section -->
    <!-- slider section --> */}
    
    
  
    </>
  )
}

export default Header
