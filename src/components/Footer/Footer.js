import React from 'react';

const Footer = () => {
    return (
        <footer className='container-fluid'>
            <div className='container-fluid'>
                <div className='row padding text-center'>
                    <div className='col-12'>
                        <h2>Mega Show</h2>
                    </div>
                    <div className='col-12 help'>
                        <a href='/' ><span>Home</span></a>
                        <a href='#arajarkner' ><span>Arajarkner</span></a>
                        <a href='about-us' ><span>MerMasin</span></a>
                    </div>
                    <div className='col-1 line'>
                    </div>
                    <div className='col-12'>
                        <h4>Join us</h4>
                    </div>
                    <div className='col-12 social padding'>
                        <a href='#' target="_blank"><i className="fas fa-phone-square-alt " /></a>
                        <a href='#' target="_blank"><i className="fab fa-facebook-square" /></a>
                        <a href='/' target="_blank"><i className="fab fa-instagram" /></a>
                        <a href='#' target="_blank"><i className="fab fa-google-plus-g" /></a>
                        <a href='#' target="_blank"><i className="fab fa-tiktok" /></a>
                    </div>
                </div>
            </div>
        </footer>
    )
};

export default Footer;
