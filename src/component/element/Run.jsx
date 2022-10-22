import React from "react";
import {AiFillTwitterCircle ,AiFillApple,AiFillMedicineBox ,AiFillMediumCircle,AiFillHome,AiFillPhone,AiFillAndroid} from 'react-icons/ai';

export default function Run() {
  return (
    <div className="container-fluid bg-dark text-white">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div
              className="card border-light mb-3"
              style={{ maxWidth: "18rem" }}
            >
              <div className="card-body text-dark d-flex">
                <AiFillTwitterCircle size={50} color="red" />

                <p>
                  {" "}
                  <strong>Twitter</strong> <br />
                  Follow @Polkadot
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div
              className="card border-light mb-3"
              style={{ maxWidth: "18rem" }}
            >
              <div className="card-body text-dark d-flex">
                <AiFillApple size={50} color="pink" />

                <p>
                  {" "}
                  <strong>Twitter</strong> <br />
                  Follow @Polkadot
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div
              className="card border-light mb-3"
              style={{ maxWidth: "18rem" }}
            >
              <div className="card-body text-dark d-flex">
                <AiFillMedicineBox size={50} color="green" />

                <p>
                  {" "}
                  <strong>Twitter</strong> <br />
                  Follow @Polkadot
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div
              className="card border-light mb-3"
              style={{ maxWidth: "18rem" }}
            >
              <div className="card-body text-dark d-flex">
                <AiFillMediumCircle size={50} color="purple" />

                <p>
                  {" "}
                  <strong>Twitter</strong> <br />
                  Follow @Polkadot
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div
              className="card border-light  mb-3"
              style={{ maxWidth: "18rem" }}
            >
              <div className="card-body text-dark d-flex">
                <AiFillHome size={50} color="orange" />

                <p>
                  {" "}
                  <strong>Twitter</strong> <br />
                  Follow @Polkadot
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div
              className="card border-light mb-3"
              style={{ maxWidth: "18rem" }}
            >
              <div className="card-body text-dark d-flex">
                <AiFillPhone size={50} color="yellow" />

                <p>
                  {" "}
                  <strong>Twitter</strong> <br />
                  Follow @Polkadot
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-2"></div>

          <div className="col-md-4">
            <div
              className="card border-light mb-3"
              style={{ maxWidth: "18rem" }}
            >
              <div className="card-body text-dark d-flex">
                <AiFillAndroid size={50} color="blue" />

                <p>
                  {" "}
                  <strong>Twitter</strong> <br />
                  Follow @Polkadot
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div
              className="card border-light mb-3"
              style={{ maxWidth: "18rem" }}
            >
              <div className="card-body text-dark d-flex">
                <AiFillTwitterCircle size={50} color="black" />

                <p>
                  {" "}
                  <strong>Twitter</strong> <br />
                  Follow @Polkadot
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row py-5">
          <h1 className="display-3 text-center fw-bold">
            Run a node and interact with the Polkadot testnet
          </h1>
          <div className="col-md-6 px-5 py-5">
            <p>
              If you'd like to play with Polkadot, you'll need to install and
              run the Parity Polkadot client. Get the client at Parity’s
              Polkadot repo <br /> <br /> Alexander is the current default
              public testnet for Polkadot. By default, any node running on the
              Alexander testnet will appear on the telemetry.polkadot.io <br />{" "}
              <br /> The testnet allows you to create accounts, propose
              governance referenda, stake testnet DOT to become a validator or
              nominate other accounts as validators with your testnet DOT.
            </p>
          </div>
          <div className="col-md-6 px-5  py-5">
            <p>
              Connect your running node to the main Polkadot user interface to
              play around. <br /> <br /> Get testnet DOT to stake by following these
              instructions on the Polkadot Wiki <br /> <br /> If you don’t want to run a node,
              you can still interact with the network by using the explorer <br /> <br />
              Before interacting with the testnet, please read this legal notice
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
