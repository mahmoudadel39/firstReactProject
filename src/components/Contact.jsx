import React from 'react'

export  function Contact() {
  return (
    <div className="container-fluid p-5 fs-5  bg-light mt-5">
    <div className="text-center  m-5">
      <h3 className="text fs-1 fw-bolder">Contact us </h3>
      <p>contact us in any time</p>
      
    </div>
    
    <div className="card  p-5  bg-light border-0">
      <div className="row g-0">
       
        <div className="col">
          <div className="card-body p-5">
            <h3 className="card-title">Contact Us</h3>
            <form>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Message</label>
                <textarea className="form-control"></textarea>
              </div>
             
              <button type="submit" className="btn btn-warning fs-5">Send</button>
            </form>
           
          </div>
        </div>
        <div className="col-7 p-5">
          <img src="https://images.pexels.com/photos/4397889/pexels-photo-4397889.jpeg?auto=compress&cs=tinysrgb&w=600" className="img col-6 h-100 rounded-start" alt="..."/>
        </div>
      </div>
    </div>

   </div>
  )
}
