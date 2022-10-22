import React from "react";

export default function Easily() {
  return (
    <div className="container-fluid py-5 bg-dark text-white ">
      <div className="container">
        <div className="row py-5">
          <h1  className="text-center display-5 fw-bold ">Easily build a Polkadot parachain with <br /> Substrate</h1>
          <p className="text-center">
            Build your application-specific blockchain with the Substrate
            framework now and easily connect it to Polkadot after launch.
          </p>
          <div className="col-md-4 py-5">
            <h4>Native Polkadot compatibility</h4>
            <p>
              Upgrade your blockchain without a hard fork. Your runtime is a
              Wasm binary stored on-chain and can be updated using your chain’s
              governance mechanism.
            </p>
          </div>
          <div className="col-md-4 py-5">
            <h4>Plug-and-play modular framework</h4>
            <p>
              Substrate allows you to simply plug in the functionalities you
              need, while also giving you the freedom to customize as needed.
            </p>
          </div>
          <div className="col-md-4 py-5">
            <h4>Interchain connectivity</h4>
            <p>
              By connecting your blockchain to Polkadot, your blockchain will be
              able to pass arbitrary messages to other chains in the Polkadot
              network.
            </p>
          </div>
          <div className="col-md-4">
            <h4>Instant security</h4>
            <p>
              Simply by connecting your blockchain to Polkadot, your blockchain
              will be secured by Polkadot’s pooled security.
            </p>
          </div>
          <div className="col-md-4">
            <h4>Multiple languages</h4>
            <p>
              With Substrate, you can write your blockchain logic in any
              language that can compile to WebAssembly (Rust, C/C++, C#, Go,
              etc).
            </p>
          </div>
          <div className="col-md-4 ">
            <h4>Native Polkadot compatibility</h4>
            <p>
              Upgrade your blockchain without a hard fork. Your runtime is a
              Wasm binary stored on-chain and can be updated using your chain’s
              governance mechanism.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
