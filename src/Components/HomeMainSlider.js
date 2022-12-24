import React from 'react'
import './HomeMainSlider.css'
const HomeMainSlider = () => {
    return (
        <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner ">
                <div class="carousel-item active">
                    <div style={{ backgroundColor: '#00000099', position: "absolute", width: '100%', height: '100%' }}>

                    </div>
                    <img src={require("../Assets/Images/1.jpg")} class="d-block w-100 SliderImage" alt="..." />

                    <div class="carousel-caption  d-md-block sliderContent">
                        <h4 className='mainHeading'>Who Are We? </h4>
                        <p className='paragraph'>SoftwebPK is an IT consultant company that provides software development and management services since 2015. Our specialty is creating tailor-made services as per our client’s business needs and requirements. Moreover we provide updating and maintenance services for our existing clients on daily, monthly and annual basis..</p>
                    </div>
                </div>


                <div class="carousel-item ">
                    <div style={{ backgroundColor: '#0000008a', position: "absolute", width: '100%', height: '100%' }}>

                    </div>
                    <img src={require("../Assets/Images/2.jpg")} class="d-block w-100 SliderImage" alt="..." />

                    <div class="carousel-caption  d-md-block sliderContent">
                        <h4 className='mainHeading'>Our Services? </h4>
                        <p className='paragraph'>SoftwebPK is an IT consultant company that provides software development and management services since 2015. Our specialty is creating tailor-made services as per our client’s business needs and requirements. Moreover we provide updating and maintenance services for our existing clients on daily, monthly and annual basis..</p>
                    </div>
                </div>


                <div class="carousel-item ">
                    <div style={{ backgroundColor: '#0000008a', position: "absolute", width: '100%', height: '100%' }}>

                    </div>
                    <img src={require("../Assets/Images/3.jpg")} class="d-block w-100 SliderImage" alt="..." />

                    <div class="carousel-caption  d-md-block sliderContent">
                        <h4 className='mainHeading'>Our Products? </h4>
                        <p className='paragraph'>SoftwebPK is an IT consultant company that provides software development and management services since 2015. Our specialty is creating tailor-made services as per our client’s business needs and requirements. Moreover we provide updating and maintenance services for our existing clients on daily, monthly and annual basis..</p>
                    </div>
                </div>


            </div>
            {/* <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button> */}
        </div>
    )
}

export default HomeMainSlider