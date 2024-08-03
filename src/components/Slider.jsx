import React from 'react'

export  function Slider() {
  return (
    <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://images.pexels.com/photos/4551196/pexels-photo-4551196.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block bg-dark opacity-75 rounded p-5 " >
                  <h2>Welcom to our page</h2>
                  <p>Some representative placeholder content for the first slide.</p>
                  <button type="button" className="btn  btn-warning text-white fs-4 px-5">Booking Now</button>

                </div>
    </div>
    <div className="carousel-item">
      <img src="https://images.pexels.com/photos/6010281/pexels-photo-6010281.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block bg-dark opacity-75 rounded p-5 " >
                  <h2>Welcom to our page</h2>
                  <p>Some representative placeholder content for the first slide.</p>
                  <button type="button" className="btn btn-warning text-white  fs-4  px-5">Booking Now </button>

                </div>
    </div>
    <div className="carousel-item">
      <img src="https://images.pexels.com/photos/27138244/pexels-photo-27138244/free-photo-of-a-person-sitting-in-a-small-cabin-in-a-vineyard.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block bg-dark opacity-75 rounded p-5 " >
                  <h2>Welcom to our page</h2>
                  <p>Some representative placeholder content for the first slide.</p>
                  <button type="button" className="btn  btn-warning text-white fs-4 px-5">Booking Now</button>

                </div>
    </div>
   

  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
  )
}
