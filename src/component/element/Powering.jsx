import React from "react";

export default function Powering() {
  return (
    <div className="container-fluid bg-dark text-white">
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
            <h1 className="fw-bold">Powering the Polkadot network</h1>
            <p>
              {" "}
              The DOT token serves three distinct purposes: <br />
              governance over the network, staking and bonding.
            </p>
          </div>

          <div className="col-md-4 py-5 px-5">
          <img className="w-75" src="/assets/10007.png" alt="" />
          <h2 >Governance</h2>
            <p>
              Polkadot token holders have complete control over the protocol.
              All privileges, which on other platforms are exclusive to miners,
              will be given to the Relay Chain participants (DOT holders),
              including managing exceptional events such as protocol upgrades
              and fixes.
            </p>
          </div>
          <div className="col-md-4 py-5 px-5">
            <img className="w-75" src="https://polkadot.network/assets/img/icons/home-icon-token-2.svg?v=ea608e625d" alt="" />
            <h2>Staking
</h2>
            <p>
            Game theory incentivizes token holders to behave in honest ways. Good actors are rewarded by this mechanism whilst bad actors will lose their stake in the network. This ensures the network stays secure.


            </p>
          </div>
          <div className="col-md-4 py-5 px-5">
            <img className="w-75" src="/assets/10007.png" alt="" />
            <h2>Bonding</h2>
            <p>
            New parachains are added by bonding tokens. Outdated or non-useful parachains are removed by removing bonded tokens. This is a form of proof of stake.


            </p>
          </div>
         
          
          
        </div>
        <div className="row fw-bold display-3 text-center">
<div className="col-md-12">
Learn more about <br /> the DOT token

</div>
<div> <button type="button" class="btn btn-outline-danger">Discover Polkadot</button>
</div>

        </div>
      </div>
    </div>
  );
}
