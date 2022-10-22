import React from "react";

export default function Grant() {
  return (
    <div className="container-fluid py-5" id="grant">
      <div className="container py-5">
        <div className="row">
          <div className="col-md-6 ps-5">
            <h1 className="fw-bold display-6">Get a grant to build the Polkadot ecosystem</h1>
            <p>
              Web3 Foundation provides grants to steward research and
              development of Polkadot and the Web3 tech stack. The program funds
              work on runtime modules and parachains, development tools, UI,
              protocol integrations, maintenance, and more.
            </p>
            <button type="button" class="btn btn-outline-danger my-4">Subscribe</button>

          </div>
          <div className="col-md-6 ps-5">
            <h1 className="fw-bold display-6">Apply for funding from the Polkadot treasury</h1>
            <p>
              Web3 Foundation provides grants to steward research and
              development of Polkadot and the Web3 tech stack. The program funds
              work on runtime modules and parachains, development tools, UI,
              protocol integrations, maintenance, and more.
            </p>
            <button type="button" class="btn btn-outline-danger my-4">Subscribe</button>

          </div>
          <div className="col-md-6"></div>
          <div className="col-md-6 ps-5">
            <h1 className="fw-bold display-6">Become a Polkadot Ambassador</h1>
            <p>
            Check out the post and apply to join the vibrant polkadot community.
            </p>
            <button type="button" class="btn btn-outline-danger my-4">become Ambassador</button>

          </div>
        </div>
      </div>
    </div>
  );
}
