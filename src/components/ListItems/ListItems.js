import React from 'react';
import { Link } from 'react-router-dom'

const ListItems = () => {
    return (
        <div>
            <span className='about-us' id='arajarkner'>
                <h1>Amen Dzer Tony </h1>
                <h5>KDARCNENQ <mark>ANMORANALI</mark> TONAXMBUTYUN </h5>
            </span>

            <div className="row justify-content-around ">
                
                    <div className="col-md-5 ">
                        <div className="card justify" >
                            <div className='card-img'>
                            <Link to='/detail'>
                                <img src="img/poto1.jpg" className="card-img-top" alt="" />
                                </Link>
                            </div>
                            <div className="card-body">
                                <h3>Cux</h3>
                                <p className="card-text">Some quick example text to build on the card title and make up the
                                bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>

                <div className="col-md-5">
                    <div className="card justify" >
                        <div className='card-img'>
                            <img src="img/poto2.jpg" className="card-img-top" alt="..." />
                        </div>
                        <div className="card-body">
                            <h3>Arju</h3>
                            <p className="card-text">Some quick example text to build on the card title and make up the
                                bulk of the card's content.</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-5">
                    <div className="card justify" >
                        <div className='card-img'>
                            <img src="img/poto.jpg" className="card-img-top" alt="..." />
                        </div>
                        <div className="card-body">
                            <p className="card-text">Some quick example text to build on the card title and make up the
                                bulk of the card's content.</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-5">
                    <div className="card justify" >
                        <div className='card-img'>
                            <img src="img/poto1.jpg" className="card-img-top" alt="..." />
                        </div>

                        <div className="card-body">
                            <p className="card-text">Some quick example text to build on the card title and make up the
                                bulk of the card's content.</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-5">
                    <div className="card eee" >
                        <div className='card-img'>
                            <img src="img/poto2.jpg" className="card-img-top" alt="..." />
                        </div>
                        <div className="card-body">
                            <p className="card-text">Some quick example text to build on the card title and make up the
                                bulk of the card's content.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default ListItems;
