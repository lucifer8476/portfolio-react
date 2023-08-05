import React from 'react'
import { Link } from 'react-router-dom'

export default function About() {
  return (
    <div>
        <h1 style={{textAlign:"center"}}>ABOUT US</h1>
        <div className="row">
            <div className="col-md-6 my-5">
                <div className="card" >
                    <img src="image/me1.jpg" class="card-img-top" alt="..." style={{width: "250px",height:"300px"}}/>
                    <div className="card-body">
                      <h5 className="card-title">About Me :</h5>
                      <p className="card-text">Hello, my name is Mukul Rajput. I am a student of Computer Science engineering. I am currently pursuing my btech from ABES Institute of Technology.
                    </p>
                     <p>
                        <ul className="list-unstyled ms-auto nav justify-content-right">
                            <li className="ms-3"><Link class="link-dark" to="/"><img src="image/facebook.png"   width="24" height="24"></img></Link></li>
                            <li className="ms-3"><Link class="link-dark" to="/"><img src="image/instagram.png"  width="24" height="24"></img></Link></li>
                            <li className="ms-3"><Link class="link-dark" ><img src="image/twitter.png"  width="24" height="24"></img></Link></li>
                          </ul>
                     </p>
                    </div>
                  </div>
            </div>
            <div class="col-md-6 my-5 ">
               
            </div>
        </div>
    </div>
  )
}
