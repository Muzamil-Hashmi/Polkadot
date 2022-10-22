import React from "react";
import { AiFillTwitterCircle } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";

export default function Hero() {
  return (
    <div>
      <div className="container py-5">
        <div className="row">
          <div className="col-md-6">
            <h1 className="display-3 fw-bold">The multichain vision for Web3 starts here.</h1>
            
            <p>
              Polkadot unites and secures a growing ecosystem of specialized
              blockchains called parachains. Apps and services on Polkadot can
              securely communicate across chains, forming the basis for a truly
              interoperable decentralized web.
            </p>
<div className="d-none d-md-block justify-content-center mt-2">
<button type="button" class="btn btn-outline-danger my-4">Learn Perachain</button>
<button type="button" class="btn btn-outline-danger my-4 ms-3">Learn Cross-chain</button>

</div>
            <div>
              {/* <div>
                <AiFillLinkedin size={30} color="black" />
              </div> */}
            </div>
          </div>
          
          <div className="col-md-6 " id="cercle">
            <img className="w-75"  src="/assets/bgcercle.png" alt="" /> 
            
          </div>
        </div>
      </div>
    </div>
  );
}
