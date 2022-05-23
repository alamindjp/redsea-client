import React from 'react';

const HomeBanner = () => {
    return (
        <div className=''>
            <div className="carousel w-3/5 mx-auto bg-slate-100">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/6tRKMzn/types-of-hammers.png" className="w-50 rounded-xl" alt='' /> /
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle btn-xs md:btn-sm">❮</a>
                        <a href="#slide2" className="btn btn-circle btn-xs md:btn-sm">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/DVg77jb/Types-of-Hammer-edite.png" className="w-50" alt='' /> /
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle btn-xs md:btn-sm">❮</a>
                        <a href="#slide3" className="btn btn-circle btn-xs md:btn-sm">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/t8BqPKZ/Types-of-Hammer-s.png" className="w-50" alt='' /> /
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle btn-xs md:btn-sm">❮</a>
                        <a href="#slide1" className="btn btn-circle btn-xs md:btn-sm">❯</a>
                    </div>
                </div>

            </div>
        </div>

    );
};

export default HomeBanner;