import React from "react";

export default function Energy() {
  return (
    <div>
      <div className="container pt-5">
        <div className="row">
          <div className="col-md-6 pt-5">
            <h1>A green, energy-efficient protocol</h1>
            <p>
              It’s hard to get behind blockchain as the next technological
              revolution when it wastes so much energy. Polkadot is designed to
              power the web’s next big wave of innovation, without the high
              energy consumption of conventional proof-of-work blockchains.
              Polkadot’s Nominated Proof-of-stake (NPoS) model uses a small
              fraction of the energy consumed by conventional blockchains, and
              has the lowest carbon footprint among proof-of-stake protocols
              analyzed in recent research.
            </p>
          </div>
        <div className="col-md-6 pt-5 text-center">
        <img  className="w-50" src="/assets/3.png" alt="" />
        </div>
        </div>
      </div>
    </div>
  );
}
