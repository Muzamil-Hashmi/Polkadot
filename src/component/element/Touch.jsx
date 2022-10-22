import React from 'react'
import Aos from 'aos';
import { AiFillTwitterCircle,AiFillAmazonCircle,AiFillCustomerService } from "react-icons/ai";


export default function Touch() {
  return (
    <div className='container-fluid py-5 bg-dark text-white'>
      <div className="container py-5">
        <div className="row">
            <h1 data-aos="fade-up" className='text-center fw-bold display-4'>Get in touch</h1>
            <div className="col-md-4 py-5 text-white">
            <div className="card-body card1  text-dark d-flex  bg-white">
                <AiFillTwitterCircle size={50} color="blue" />

                <p>
                  {" "}
                  <strong>For General chat</strong> <br />
                  join the watercooler or Discord
                </p>
              </div>
            </div>
            <div className="col-md-4 py-5">
            <div className="card-body card1 text-dark d-flex bg-white">
                <AiFillAmazonCircle size={50} color="purple" />

                <p>
                  {" "}
                  <strong>For Press inquries</strong> <br />
                  please fill out this form
                </p>
              </div>
            </div>
            <div className="col-md-4 py-5">
            <div className="card-body card1 text-dark d-flex bg-white ">
                <AiFillCustomerService size={50} color="gray" />

                <p>
                  {" "}
                  <strong>For all other inquries</strong> <br />
                  <a href="">support.polkadot.network</a>
                </p>
              </div>
            </div>
        </div>
        <div className="row">
            <div className="col-md-6 text-center square border-end  py-5">
            <h1 className='text-center fw-bold display-6'>Stay informed of updates and events</h1>
<a className='text-white ' href="">Subscribe to the newsletter or read the blog</a>
            </div>
            <div className="col-md-6 text-center py-5">
            <h1 className='text-center fw-bold display-6'>Join the teams building Polkadot</h1>
<p>see job at <a className='text-white' href="">Web3 Foundation </a> or at <a className='text-white' href="">Party technology</a></p>
            </div>
        </div>
      </div>
    </div>
  )
}
