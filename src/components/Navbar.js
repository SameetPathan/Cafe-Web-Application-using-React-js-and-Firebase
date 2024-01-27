import React from 'react'

function Navbar() {
  return (
    <>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                    <a class="navbar-brand mr-5" href="#">CAFE</a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarScroll">
                        <ul class="navbar-nav mr-auto my-2 my-lg-0 navbar-nav-scroll" style={{maxHeight:"100px"}}>
                        <li class="nav-item active">
                            <a class="nav-link ml-5" href="#">Home <span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">About</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link disabled">Contact us</a>
                        </li>
                        </ul>
                        <form class="d-flex">
                        <button class="btn btn-outline-success m-1" type="submit">Login</button>
                        <button class="btn btn-outline-success m-1" type="submit">Register</button>
                        </form>
                    </div>
                    </nav>
    </>
  )
}

export default Navbar