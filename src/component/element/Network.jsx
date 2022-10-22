import React from 'react'

export default function Network() {
  return (
    <div className='container-fluid bg-danger text-white py-5'>
      
      <div className="container text-center py-5">
        <div className="row">
            <div className="col-md-3"></div>
            <div className="col-md-6 fw-bold py-5">

                <h1 className='display-3 fw-bold'>Network Glossary</h1>
                <p>Polkadot unites a network of heterogeneous blockchains called parachains and parathreads. These chains connect to and are secured by the Polkadot Relay Chain. They can also connect with external networks via bridges.</p>
            </div>
            <div className="col-md-3"></div>
        </div>
      </div>
    </div>
  )
}
