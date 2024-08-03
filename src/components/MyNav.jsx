import React from 'react'

export  function MyNav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-warning fixed-top">
  <div className="container fs-5 ">
    <a className="navbar-brand fw-bolder " href="not founded"><span className='text-danger '>EY</span><span className='text-white'>G</span><span className='text-dark'>PT</span></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="not founded"><i className="bi bi-house"></i>Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="not founded">Features</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="not founded">Pricing</a>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" href="not founded" tabIndex="-1" aria-disabled="true">Disabled</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
  )
}
