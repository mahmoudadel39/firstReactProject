import React from 'react'


export  function Footer() {
  return (
   <div className="container-fluid bg-warning fs-5 p-4">
     <div className="text-center p-3 bg-warning " >
     <i className="bi bi-facebook mx-2 fs-3 text-primary"></i>
     <i className="bi bi-instagram mx-2 fs-3 text-danger"></i>
     <i className="bi bi-linkedin mx-2 fs-3 text-info "></i>
     <i className="bi bi-youtube mx-2 fs-3 text-danger"></i>
    </div>
     <div className="text-center p-3 bg-warning" >
      © 2020 Copyright:
      <a className="text-body" href="https://mdbootstrap.com/">MDBootstrap.com</a>
    </div>
   </div>
  )
}
