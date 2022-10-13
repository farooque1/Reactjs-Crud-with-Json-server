import React from 'react'
import {Link} from "react-router-dom";

function Nav() {
    return (
        <div>

            <nav className="navbar navbar-expand-lg navbar-light bg-light py-3">
                <div className="container">
                    <Link to="/" className="navbar-brand fw-bold fs-4" >HOME</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0 fs-5">
                        
                            <li className="nav-item">
                            <Link to="/home" className="nav-link active">Crud Project</Link>
                            </li>
                        
                            <li className="nav-item">
                            <Link to="/insert" className="nav-link active">Add Data</Link>
                            </li>
                        
                        </ul>
                        <form>
                        <Link to="/form"><button className='btn btn-warning btn-block'>Add New User</button></Link>
                        </form>
                    </div>
                </div>
            </nav>

        </div>
    )
}

export default Nav
