import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope,faPhoneVolume,faLocationDot } from '@fortawesome/free-solid-svg-icons'

const Contact = () => {
    return(
    <section class="contact" id="contact">

        <div class="album py-5 contact-container">
            <div class="container">
                <div class="skill-heading">
                    <h1 class="nav-heading">Contact</h1>
                    <p>Feel free to reach out and let's connect! I'm excited to hear from you and explore potential
                        collaborations or opportunities.</p>
                </div>

                <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                    <div class="col col-xl-4 col-md-6 text-center contact-box">
                        <div class="card shadow-sm contact-info" id="location-icon">
                            <div class="contact-icon">
                            <FontAwesomeIcon icon={faLocationDot} />
                                <i class="fa-solid fa-location-dot"></i>
                            </div>

                            <div class="card-body">
                                <h3 class="card-text  align-text-center">Address</h3>
                                <p>Mandi, Himachal Pradesh</p>
                            </div>
                        </div>
                    </div>

                    <div class="col col-xl-4 col-md-6 text-center contact-box">
                        <div class="card shadow-sm contact-info">
                            <div class="contact-icon">
                            <FontAwesomeIcon icon={faEnvelope} />
                                <i class="fa-regular fa-envelope"></i>
                            </div>

                            <div class="card-body">
                                <h3 class="card-text  align-text-center">Email</h3>
                                <p>shubham58188@gmail.com</p>

                            </div>
                        </div>
                    </div>

                    <div class="col col-xl-4 col-md-6 contact-box text-center">
                        <div class="card shadow-sm contact-info">
                            <div class="contact-icon">
                                <FontAwesomeIcon icon={faPhoneVolume} />
                                <i class="fa-solid fa-phone-volume"></i>
                            </div>

                            <div class="card-body">
                                <h3 class="card-text  align-text-center">Phone</h3>
                                <p>7018058188</p>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    </section>)
}

export default Contact;