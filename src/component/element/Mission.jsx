import React from "react";

export default function Mission() {
  return (
    <div className="container-fluid bg-dark py-5">
      <div className="container py-5 ">
        <div className="row">
          <div className="col-md-6 text-white py-5 ">
            <h1>The Polkadot mission</h1>
            <h5>
              We envision a Web where our identity and our data is our own -
              safely secured from any central authority.
            </h5>
          </div>

          <div className="col-md-6 text-white py-5">
            <p>
              Polkadot will enable a completely decentralized web where users
              are in control. <br /><br /> Polkadot is built to connect private and
              consortium chains, public and permissionless networks, oracles,
              and future technologies that are yet to be created. Polkadot
              facilitates an internet where independent blockchains can exchange
              information and transactions in a trustless way via the Polkadot
              relay chain. <br /> <br /> Polkadot makes it easier than ever to create and
              connect decentralized applications, services, and institutions. By
              empowering innovators to build better solutions, we seek to free
              society from its reliance on a broken web where its large
              institutions can’t violate our trust.
            </p>
            <button type="button" class="btn btn-outline-danger my-4">Learn Technalogy</button>

          </div>
        </div>
      </div>
    </div>
  );
}
