import React from "react";

export default function Cards() {
  return (
    <div className="container-fluid">
      <div className="container py-5">
        <div className="row">
          <div className="col-md-4 ">
            <img className="w-25" src="/assets/cube.png" alt="" />
            <h5 className="fw-bold">True interoperability</h5>
            <p>
              Polkadot enables cross-blockchain transfers of any type of data or
              asset, not just tokens. Connecting to Polkadot gives you the
              ability to interoperate with a wide variety of blockchains in the
              Polkadot network.
            </p>
          </div>
          <div className="col-md-4">
            <img className="w-25" src="/assets/erro.png" alt="" />
            <h5 className="fw-bold">Economic & transactional scalability</h5>
            <p>
              Polkadot provides unprecedented economic scalability by enabling a
              common set of validators to secure multiple blockchains. Polkadot
              provides transactional scalability by spreading transactions
              across multiple parallel blockchains.
            </p>
          </div>
          <div className="col-md-4">
            <img className="w-25" src="/assets/cer.png" alt="" />
            <h5 className="fw-bold">Easy blockchain innovation</h5>
            <p>
              Create a custom blockchain in minutes using the Substrate
              framework. Connect your chain to Polkadot and get interoperability
              and security from day one. This ease of development helps
              Polkadot's network grow.
            </p>
          </div>
          <div className="col-md-4">
            <img className="w-25" src="/assets/glob.png" alt="" />
            <h5 className="fw-bold">High energy efficiency</h5>
            <p>
              Polkadot consumes a small fraction of the energy used by
              conventional blockchains thanks to its next-generation nominated
              proof-of-stake (NPoS) model. Using the equivalent of ~6.6 US
              households worth of energy per year, Polkadot has the lowest
              carbon footprint among proof-of-stake protocols analyzed in recent
              research.
            </p>
          </div>
          <div className="col-md-4">
            <img className="w-25" src="/assets/cer.png" alt="" />
            <h5 className="fw-bold">Security for everyone</h5>
            <p>
              Polkadot's novel data availability and validity scheme allows
              chains to interact with each other in a meaningful way. Chains
              remain independent in their governance, but united in their
              security.
            </p>
          </div>
          <div className="col-md-4">
            <img className="w-25" src="/assets/10007.png" alt="" />
            <h5 className="fw-bold">User-driven governance</h5>
            <p>
              Polkadot has a sophisticated governance system where all
              stakeholders have a voice. Network upgrades are coordinated
              on-chain and enacted autonomously and without forking the network,
              ensuring that Polkadot’s development remains future-proof and
              community-driven.
            </p>
          </div>
        </div>
        <div className="row">
            <div className="col-md-12 text-center ">
                <h1 className="fw-bold">Learn more about Polkadot's <br /> technology
</h1>
<button type="button" class="btn btn-outline-danger my-4">Discover Polkadot</button>

            </div>
        </div>
      </div>
    </div>
  );
}
