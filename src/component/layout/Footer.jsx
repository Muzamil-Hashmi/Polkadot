import React from 'react'
import {AiFillTwitterCircle} from 'react-icons/ai';
import {AiFillLinkedin} from 'react-icons/ai';


function Footer() {
  return (
    
   <div className="container-fluid  bg-dark text-white py-5" id='foot'>
     <div className="container " >


<div className="row">

  <div className=" col-6 col-md-3   ">

<h4 className='tag fw-bold'>General</h4>

<p>Financial Institutions</p>


<p>EnterPrises</p>
<p>partners</p>
<p>Developers</p>
  </div>
  <div className="col-6 col-md-3  ">

<h4 className='tag fw-bold'>Technalogy</h4>

<p>Financial Institutions</p>


<p>EnterPrises</p>
<p>partners</p>
<p>Developers</p>
  </div>
  <div className="col-6 col-md-3  ">

<h4 className='tag fw-bold'>Community</h4>

<p>Enterprises</p>


<p>Payment</p>
<p>Insurnace</p>
<p>Encosystem</p>
  </div>
  
  <div className="col-6 col-md-3 ">
  <AiFillTwitterCircle size={30} color="blue" />

  <AiFillLinkedin size={30} color="black"/>
  <AiFillTwitterCircle size={30} color="blue" />
  <AiFillTwitterCircle size={30} color="blue" />
  <AiFillLinkedin size={30} color="black"/>
  <p>Subscribe to the newsletter to hear about Polkadot updates and events.</p>
  <button type="button" class="btn btn-outline-danger my-4">Subscribe</button>



  </div>

<div className="row py-5">



<div className="col-12 col-lg-2 mb-2 mb-lg-0">
<img className='w-75' src="https://polkadot.network/assets/img/logo-polkadot-light.svg?v=ea608e625d" alt=" " />

</div>
<div className="col-12 col-lg-10"><p>© 2022 Web3 Foundation |
Impressum
Disclaimer
Privacy</p></div>
 



</div>


</div>
</div>
</div>
   
  )
}

export default Footer
