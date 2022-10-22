import React from "react";

export default function Section() {
  return (
    <div className="container-fluid bg-dark  py-5" id="sec">
      <div className="container py-5 ">
        <div className="row">
      
          <div className="col-md-8 " id="wiresec">
            <img className=" w-100  pt-5 " src="/assets/wire.png " alt=""  />
          </div>
          <div className="col-md-4 text-white">
          <h1>Any type of data across any type of blockchain</h1>
          <p>
            Polkadot is a network protocol that allows arbitrary data—not just
            tokens—to be transferred across blockchains. This means Polkadot is
            a true multi-chain application environment where things like
            cross-chain registries and cross-chain computation are possible.
            Polkadot can transfer this data across public, open, permissionless
            blockchains as well as private, permissioned blockchains. This makes
            it possible to build applications that get permissioned data from a
            private blockchain and use it on a public blockchain. For instance,
            a school's private, permissioned academic records chain could send a
            proof to a degree-verification smart contract on a public chain
          </p>
          </div>
        </div>
      </div>
    </div>
  );
}
