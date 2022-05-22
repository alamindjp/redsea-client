import React from 'react';

const HomeBanner = () => {
    return (
        <div className="carousel grid-cols-3 gap-10 justify-center mt-3">
            <div className="carousel-item">
                <img src="https://api.lorem.space/image/drink?w=400&h=300&hash=8B7BCDC2" alt="Drink" />
            </div>
            <div className="carousel-item">
                <img src="https://api.lorem.space/image/drink?w=400&h=300&hash=7F5AE56A" alt="Drink" />
            </div>
            <div className="carousel-item">
                <img src="https://api.lorem.space/image/drink?w=400&h=300&hash=7F5AE56A" alt="Drink" />
            </div>
        </div>
    );
};

export default HomeBanner;