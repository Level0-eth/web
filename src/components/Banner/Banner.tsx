import React from 'react';

import './style.css';

const Banner: React.FC = () => {
    return (
        <div className="container banner">
            <div className="left">
                <h1>
                    Learn <br />
                    Contribute <br />
                    Grow
                </h1>
                <button className="btn">Join Now</button>
            </div>
            <div className="right">
                <div className="content">
                    <div className="circles">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <p>
                        We Are A Community Of Developers Who Promotes Learn And
                        Build In Public.
                    </p>
                </div>
            </div>
            <div className="banner__bg top__left"></div>
            <div className="banner__bg bottom__right"></div>
        </div>
    );
};

export default Banner;
