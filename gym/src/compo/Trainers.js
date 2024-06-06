import React from 'react'
import { Link } from 'react-router-dom'

function Trainers() {
  return (
    <>
    <section className="trainer_section layout_padding">
    <div className="container">
      <div className="heading_container">
        <h2>
          Our Gym Trainers
        </h2>
      </div>
      <div className="row">
        <div className="col-lg-4 col-md-6 mx-auto">
          <div className="box">
            <div className="name">
              <h5>
                Smirth Jon
              </h5>
            </div>
            <div className="img-box">
              <img src="images/t1.jpg" alt=""/>
            </div>
            <div className="social_box">
              <Link to="">
                <img src="images/facebook-logo.png" alt=""/>
              </Link>
              <Link to="">
                <img src="images/twitter.png" alt=""/>
              </Link>
              <Link to="">
                <img src="images/instagram-logo.png" alt=""/>
              </Link>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 mx-auto">
          <div className="box">
            <div className="name">
              <h5>
                Jean Doe
              </h5>
            </div>
            <div className="img-box">
              <img src="images/t2.jpg" alt=""/>
            </div>
            <div className="social_box">
              <Link to="">
                <img src="images/facebook-logo.png" alt=""/>
              </Link>
              <Link to="">
                <img src="images/twitter.png" alt=""/>
              </Link>
              <Link to="">
                <img src="images/instagram-logo.png" alt=""/>
              </Link>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 mx-auto">
          <div className="box">
            <div className="name">
              <h5>
                Alex Den
              </h5>
            </div>
            <div className="img-box">
              <img src="images/t3.jpg" alt=""/>
            </div>
            <div className="social_box">
              <Link to="">
                <img src="images/facebook-logo.png" alt=""/>
              </Link>
              <Link to="">
                <img src="images/twitter.png" alt=""/>
              </Link>
              <Link to="">
                <img src="images/instagram-logo.png" alt=""/>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
    </>
  )
}

export default Trainers
