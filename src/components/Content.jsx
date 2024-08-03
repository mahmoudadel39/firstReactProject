import React from 'react'

export  function Content() {
  return (
    <div className="container-fluid m-1 p-5 mt-5 mb-5" >
    <div className="row">
      <div className="col-lg-7 col-sm-12 ">
        <div className="jumbotron bg-light p-5 ">
          <h2 className="display-4 text-dark mb-5 fw-bolder" ><span className="span text-danger">Eg</span><span className="span text-warning" >y</span><span className="span text-dark">pt</span></h2>
          <p className="lead fs-4">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero, omnis.</p>
          <hr/>
          <p className="lead fs-4"> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur, nisi.</p>
          <form className="d-flex">
            <input className="form-control  me-5" type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-outline-warning ms-5" type="submit">Search</button>
          </form>
        </div>

      </div>
      <div className="col-lg-4 col-sm-12">
        <div className="list-group">
          <ul className="list-group fs-4">
            <a data-bs-toggle="collapse" href="#x"><li  className="list-group-item bg-warning text-white" aria-current="true">places</li></a>

            <div className="collapse show" id="x">
            <li className="list-group-item">Pyrameds</li>
            <li className="list-group-item">Egypt museum</li>
            <li className="list-group-item">ctacomb</li>
            <li className="list-group-item">sharm el-shick</li>
          </div>
          </ul>
        </div>

      </div>
    </div>

  </div>
  )
}
