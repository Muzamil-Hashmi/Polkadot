import React from "react";

export default function Blog() {
  return (
    <div>
      <div className="container">
        <div className="row py-5 ">
          <h1 className="fw-bold text-center display-4 mb-5">From the blog</h1>
          <div className="col-md-4">
            <div className="card" style={{ width: "18rem" }}>
              <img src="/assets/10011.png" className="card-img-top" alt="..." />
              <div className="card-body">
                <a className="text-decoration-none text-danger" href="">
                  Prachain
                </a>
                <h5 className="card-title">
                  First Parachain Successfully Migrates from Kusama to Polkadot
                </h5>
                <p className="card-text">
                  KILT Protocol's migration from Kusama to Polkadot is an
                  important technical milestone and the first parachain
                  migration. Polkadot's 'canary network' model allows Web3
                  projects to test their technology in a real-world environment
                  before upgrading to stable production networks....
                </p>
                <img src="assets/logo.png" alt=" " width={100} />
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card" style={{ width: "18rem" }}>
              <img src="/assets/10012.png" className="card-img-top" alt="..." />
              <div className="card-body">
                <a className="text-decoration-none text-danger" href="">
                  Prachain
                </a>
                <h5 className="card-title">
                  First Parachain Successfully Migrates from Kusama to Polkadot
                </h5>
                <p className="card-text">
                  KILT Protocol's migration from Kusama to Polkadot is an
                  important technical milestone and the first parachain
                  migration. Polkadot's 'canary network' model  Web3
                   their technology in a real-world environment
                  before upgrading to stable production networks....
                </p>
                <img src="assets/logo.png" alt=" " width={100} />
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card" style={{ width: "18rem" }}>
              <img src="/assets/10013.jpg" className="card-img-top" alt="..." />
              <div className="card-body">
                <a className="text-decoration-none text-danger" href="">
                  Prachain
                </a>
                <h5 className="card-title">
                  First Parachain Successfully Migrates from Kusama to Polkadot
                </h5>
                <p className="card-text">
                  KILT Protocol's migration from Kusama to Polkadot is an
                  important technical milestone and the first parachain
                  migration. Polkadot's 'canary network' model allows Web3
                  projects to test their technology in a real-world environment
                  before upgrading to stable production networks....
                </p>
                <img src="assets/logo.png" alt=" " width={100} />
              </div>
            </div>
          </div>
        </div>
        <div className="row text-center">

            <h1 className="fw-bold display-4">Want to get involved?
</h1>
<div>
<button type="button" class="btn btn-outline-danger my-4">Discover Polkadot</button>
<p>or learn about how to <a className="text-black" href="">build on Polkadot.</a></p>

</div>
        </div>
      </div>
    </div>
  );
}
