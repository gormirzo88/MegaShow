import React from 'react';


const ListMenu = () => {
    return (
        <nav class="navbar navbar-expand-lg sticky-top menu ">
            <a class="navbar-brand" href="#">
                <img src='img/logo.png' className='logo' />
            </a>
            <button class="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <i class="fas fa-chevron-up"></i>
            </button>
            <div class="collapse navbar-collapse list" id="navbarNav">
                <ul class="navbar-nav">
                    <li className="nav-item "><a className="nav-link" href="#">PUCHIKNER</a></li>
                    <li className="nav-item "><a className="nav-link" href="#">DKORACIA</a></li>
                    <li className="nav-item "><a className="nav-link" href="#">ARJUK</a></li>
                    <li className="nav-item "><a className="nav-link" href="#">CUX</a></li>
                    <li className="nav-item "><a className="nav-link" href="#">SAYLUT</a></li>
                    <li className="nav-item "><a className="nav-link" href="#">FURSHET</a></li>
                </ul>
            </div>
        </nav>
    )
};

export default ListMenu;
