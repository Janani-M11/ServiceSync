import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../NavBar';
import { FaShoppingCart } from 'react-icons/fa';
import { Carousel } from 'react-carousel-minimal';
import axios from 'axios';
import md5 from 'md5';
import Card from 'react-bootstrap/Card';
import img1 from './img/service-2.jpg';
import img2 from './img/service-1.jpg';
import img3 from './img/service-3.jpg';
import img4 from './img/about-1.jpg';
import img5 from './img/about-2.jpg';
import img6 from './img/team-1.jpg';
import img7 from './img/team-2.jpg';
import img8 from './img/team-3.jpg';
import img9 from './img/team-4.jpg';

const Home = () => {
    const [user, setUser] = useState([{}]);
    const [cartActive, setCartActive] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [pincode, setPincode] = useState(0);

    useEffect(() => {
        const role = localStorage.getItem('role');
        if (role != null) {
            if(role === md5("Employee")) {
                window.location.href = '/Employee';
            } else if(role === md5("Admin")) {
                window.location.href = '/admin';
            }
            setIsLoggedIn(true);
            const data = {
                _id: localStorage.getItem('id')
            };
            axios.post('http://localhost:5000/customer/getCustomerById', data)
                .then((response) => {
                    setPincode(response.data[0].address[0].pincode);
                    setCartActive(response?.data[0]?.cart?.serList ? true : false);
                });
        }
    }, []);

    useEffect(() => {
        const data = {
            _id: localStorage.getItem('id')
        };
        axios.post('http://localhost:5000/customer/getCustomerById', data)
            .then((response) => {
                setCartActive(response?.data[0]?.cart?.serList ? true : false);
            });
        axios.post('http://localhost:5000/service/getService')
            .then((response) => {
                setUser(response.data);
            })
            .catch((error) => {
                console.error('Error fetching customer data:', error);
            });
    }, []);

    const data = [
        {
            image: "https://try.geoop.com/wp-content/uploads/2023/03/Best-apps-for-cleaners.jpg",
            caption: "Making Your Life Easier, One Service at a Time."
        },
        {
            image: "https://homemaidbetter.com/wp-content/uploads/2019/05/shutterstock_526418566.jpg",
            caption: "Your Comfort, Our Priority."
        },
        {
            image: "https://cdn.gobankingrates.com/wp-content/uploads/2018/06/20-Professional-House-Cleaning-shutterstock_395889778.jpg?webp=1&w=675&quality=75",
            caption: "Experience the Joy of Convenience"
        }
    ];

    const captionStyle = {
        fontSize: '2em',
        fontWeight: 'bold',
    };
    const slideNumberStyle = {
        fontSize: '20px',
        fontWeight: 'bold',
    };

    return (
        <>
            <div style={{ background: "#D4E6F1" }}>
                <NavBar />
                {/* Carousel */}
                <div className="container-fluid" style={{ padding: '2px' }}>
                    <div style={{ textAlign: "center" }}>
                        <div style={{ padding: "0 20px" }}>
                            <Carousel
                                data={data}
                                time={1500}
                                width="1300px"
                                height="500px"
                                captionStyle={captionStyle}
                                radius="10px"
                                slideNumber={true}
                                slideNumberStyle={slideNumberStyle}
                                captionPosition="bottom"
                                automatic={true}
                                dots={true}
                                pauseIconColor="white"
                                pauseIconSize="40px"
                                slideBackgroundColor="transparent"
                                thumbnailWidth="100px"
                                style={{
                                    textAlign: "center",
                                    maxWidth: "1200px",
                                    margin: "10px auto",
                                }}
                            />
                        </div>
                    </div>
                </div>

                {/* Our Services Section Title */}
                <div className="container d-flex justify-content-center align-items-center" >
    <div className="text-center">
        <h2>Our Services</h2>
        <p>Explore our wide range of expert services tailored for you</p>
    </div>
</div>



                {/* Services Section */}
                <div className="container d-flex justify-content-center align-items-center">
                    <div className="container">
                        <div className="row g-4">
                            <div className="col-lg-4 col-md-6 service-item-top wow fadeInUp">
                                <div className="overflow-hidden">
                                    <img className="img-fluid w-100 h-100" src={img1} alt="" />
                                </div>
                                <div className="d-flex align-items-center justify-content-between p-4" style={{ backgroundColor: "#8bffff" }}>
                                    <h5 className="text-truncate me-3 mb-0">Residential Plumbing</h5>
                                    <Link className="btn btn-square btn-outline-primary border-2 border-black flex-shrink-0" to="/Customer/AddSErvices/"><i className="fa fa-arrow-right"></i></Link>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 service-item-top wow fadeInUp">
                                <div className="overflow-hidden">
                                    <img className="img-fluid w-100 h-100" src={img2} alt="" />
                                </div>
                                <div className="d-flex align-items-center justify-content-between p-4" style={{ backgroundColor: "#afc5ff" }}>
                                    <h5 className="text-truncate me-3 mb-0">Commercial Plumbing</h5>
                                    <Link className="btn btn-square btn-outline-primary border-2 border-black flex-shrink-0" to="/Customer/AddSErvices/"><i className="fa fa-arrow-right"></i></Link>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 service-item-top wow fadeInUp">
                                <div className="overflow-hidden">
                                    <img className="img-fluid w-100 h-100" src={img3} alt="" />
                                </div>
                                <div className="d-flex align-items-center justify-content-between p-4" style={{ backgroundColor: "#cca8e9" }}>
                                    <h5 className="text-truncate me-3 mb-0">Emergency Servicing</h5>
                                    <Link className="btn btn-square btn-outline-primary border-2 border-black flex-shrink-0" to="/Customer/AddSErvices"><i className="fa fa-arrow-right"></i></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* About Section */}
                {/* About Section */}
<div className="container-xxl py-5 d-flex justify-content-center align-items-center" >
    <div className="container">
        <div className="row g-5 align-items-center">
            {/* Left Column: About Us Text */}
            <div className="col-lg-6 wow fadeInUp">
                <h6 className="text-secondary text-uppercase" style={{ fontWeight: "500", letterSpacing: "2px", color: "#0d6efd" }}>About Us</h6>
                <h1 className="mb-4" style={{ fontSize: "36px", fontWeight: "700", lineHeight: "1.4", color: "#333" }}>We Are Trusted Service Company Since 2020</h1>
                <p className="mb-4" style={{ fontSize: "18px", color: "#666", lineHeight: "1.8" }}>
                    Service you can trust, results you can rely on—Service Sync is your go-to for excellence.
                </p>
                <div>
                    <p className="fw-medium text-primary" style={{ fontSize: "18px" }}>
                        <i className="fa fa-check-circle text-success me-3"></i>Residential & commercial services
                    </p>
                    <p className="fw-medium text-primary" style={{ fontSize: "18px" }}>
                        <i className="fa fa-check-circle text-success me-3"></i>Quality services at affordable prices
                    </p>
                    <p className="fw-medium text-primary" style={{ fontSize: "18px" }}>
                        <i className="fa fa-check-circle text-success me-3"></i>Immediate 24/7 emergency services
                    </p>
                </div>
            </div>

            {/* Right Column: Image Section */}
            <div className="col-lg-6 pt-4">
                <div className="position-relative">
                    {/* Large Image (img4) */}
                    <img className="img-fluid w-100 rounded-3 shadow-lg" src={img4} alt="About Us 1" style={{ objectFit: "cover", height: "500px", borderRadius: "20px" }} />
                    {/* Smaller Image (img5) overlapping the large one */}
                    
                </div>
            </div>
        </div>
    </div>
</div>

               {/* Footer Section */}
<footer className="container-fluid bg-dark text-white py-5 mt-5" style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", textAlign: "center" }}>
    <div className="container">
        <div className="row g-4 justify-content-center">
            {/* Address Section */}
            <div className="col-lg-4 col-md-7 mb-7"> {/* Adjusted margin-bottom */}
                <h4 className="text-light mb-">Address</h4> {/* Reduced margin for heading */}
                <p className="mb-2"><i className="fa fa-map-marker-alt me-2"></i>Peelamedu, Coimbatore</p>
                <p className="mb-2"><i className="fa fa-phone-alt me-2"></i>+91 9090876546</p>
                <p className="mb-3"><i className="fa fa-envelope me-2"></i>Servicesync1.@gmail.com</p>
            </div>

            {/* ServiceSync Section */}
            <div className="col-lg-4 col-md-7 mb-7"> {/* Adjusted margin-bottom */}
                <h4 className="text-light mb-6">ServiceSync</h4> {/* Reduced margin for heading */}
                <p>You Say We Do..!</p>
            </div>

            {/* Opening Hours Section */}
            <div className="col-lg-4 col-md-7 mb-7"> {/* Adjusted margin-bottom */}
                <h4 className="text-light mb-6">Opening Hours</h4> {/* Reduced margin for heading */}
                <h6 className="text-light">Monday - Sunday:</h6>
                <p>8:00 AM to 9:00 PM</p>
            </div>
        </div>
    </div>

    {/* Footer Copyright */}
    <div className="text-center mt-5 pt-4" style={{ borderTop: "1px solid rgba(255, 255, 255, 0.2)" }}>
        <p>&copy; {new Date().getFullYear()} ServiceSync. All rights reserved.</p>
    </div>
</footer>






            </div>
        </>
    );
};

export default Home;
