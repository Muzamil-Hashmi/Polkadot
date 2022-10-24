import React from "react";
import { AiFillTwitterCircle } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { ScrollRotate } from "react-scroll-rotate";

export default function Hero() {
  return (
    <div>
      <div className="container py-5">
        <div className="row">
          <div className="col-md-6 px-5">
            <h1 className="display-3 fw-bold fst-italic">
              The multichain vision for Web3 starts here.
            </h1>

            <p>
              Polkadot unites and secures a growing ecosystem of specialized
              blockchains called parachains. Apps and services on Polkadot can
              securely communicate across chains, forming the basis for a truly
              interoperable decentralized web.
            </p>
            <div className="">
              <button type="button" class="btn btn-outline-danger me-2 mt-2 ">
                Learn Perachain
              </button>
              <button type="button" class="btn btn-outline-danger mt-2 ">
                Learn Cross-chain
              </button>
            </div>
            <div>
            
            </div>
          </div>
          
          <div className=" col-md-6 text-center " >
             <ScrollRotate method={"perc"}>
            <div className="col-md-6  col-ms-3 ms-5 my-5" >


            <ScrollRotate method={"perc"}  >
              {" "}
              <img
                className="cercle "
                src="/assets/bgcercle.png"
                alt=""
                />{" "}
            </ScrollRotate>
       
        
          </div>
          </ScrollRotate>
          </div>
        </div>
      </div>
    </div>
  );
}
