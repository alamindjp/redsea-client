import React from 'react';

const HomeBanner = () => {
    return (
        <div className=''>
            <div class="carousel w-3/5 mx-auto bg-slate-100">
                <div id="slide1" class="carousel-item relative w-full">
                    <img src="https://i.ibb.co/6tRKMzn/types-of-hammers.png" class="w-50 rounded-xl" alt='' /> /
                    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" class="btn btn-circle btn-xs md:btn-sm">❮</a>
                        <a href="#slide2" class="btn btn-circle btn-xs md:btn-sm">❯</a>
                    </div>
                </div>
                <div id="slide2" class="carousel-item relative w-full">
                    <img src="https://i.ibb.co/DVg77jb/Types-of-Hammer-edite.png" class="w-50" alt='' /> /
                    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" class="btn btn-circle btn-xs md:btn-sm">❮</a>
                        <a href="#slide3" class="btn btn-circle btn-xs md:btn-sm">❯</a>
                    </div>
                </div>
                <div id="slide3" class="carousel-item relative w-full">
                    <img src="https://i.ibb.co/t8BqPKZ/Types-of-Hammer-s.png" class="w-50" alt='' /> /
                    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" class="btn btn-circle btn-xs md:btn-sm">❮</a>
                        <a href="#slide1" class="btn btn-circle btn-xs md:btn-sm">❯</a>
                    </div>
                </div>

            </div>
        </div>

    );
};

export default HomeBanner;