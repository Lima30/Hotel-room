import React from 'react';
import { Carousel } from 'bootstrap';

const Banner = () => {
    return (
        <>
            <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="https://oceandentalassociates.com/custom/modules/gorgon_interior_banner/images/newpatient_banner.jpg" class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src="https://images.squarespace-cdn.com/content/v1/56d2fdaec6fc087c73fdaac7/1461001728173-BQ60LP0GTVSET4JCHBHF/chairs.jpg?format=1000w" class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src="https://post.healthline.com/wp-content/uploads/2019/12/Female_Male_Dental_Work_1200x628-facebook.jpg" class="d-block w-100" alt="..." />
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </>
    );
};

export default Banner;