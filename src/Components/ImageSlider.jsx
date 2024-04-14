// Create a new component file, e.g., ImageSliderPage.js
import React from "react";
import Slider from "react-slick"; // Import React Slick for image slider
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import bg1 from './16.webp';
import bg2 from './15.png';
import './ImageSlider/ImageSlider.css'
import bg3 from './14.jpg';
import bg4 from './13.jpg';
import bg5 from './12.jpeg';
import bg6 from './11.jpg';



const ImageSliderPage = () => {
    // Slider settings
    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true, // Enable autoplay
        autoplaySpeed: 2000 
    };

    return (
        <div>
            <Slider {...sliderSettings}>
                <div>
                    <img src={bg1} alt="Image 1" />
                </div>
                <div>
                    <img src={bg2} alt="Image 2" />
                </div>
                <div>
                    <img src={bg3} alt="Image 2" />
                </div>
                <div>
                    <img src={bg4} alt="Image 2" />
                </div>
                <div>
                    <img src={bg5} alt="Image 2" />
                </div>


                

                {/* Add more images here if needed */}
            </Slider>
            <div>
                <h2>Text Content</h2>
                <p>Decentralized applications (DApps) have gained significant attention for their transparency, security, and accessibility. In this guide, we'll walk you through the process of creating a basic voting DApp on the XDC Network using XDCRPC, React, and Truffle. This application demonstrates the capabilities of XDC RPC and its high-speed interaction with the XDC Blockchain network. By the end of this guide, you'll have a functional DApp that enables users to connect their wallets, vote for candidates, and permanently record votes on the XDC Blockchain.</p>
            </div>
        </div>
    );
}

export default ImageSliderPage;
