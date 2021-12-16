import React from 'react'
import Typical from 'react-typical'

export default function Profile() {
    return (
        <div className='profile-container'>
            <div className="profile-parent">
                <div className="profile-details">
                    <div className="colz">
                        <a href='https://www.facebook.com/mdshahadatbdi/'>
                            <i className="fa fa-facebook-square"></i>
                        </a>
                        <a href='https://www.linkedin.com/in/mdshahadathossain/'>
                            <i className="fa fa-linkedin-square"></i>
                        </a>
                        <a href='https://www.instagram.com/mdshahadat.bd/'>
                            <i className="fa fa-instagram"></i>
                        </a>
                        <a href='https://www.youtube.com/channel/UCoDJxq9i7Bv7YBsIyo1rugA'>
                            <i className="fa fa-youtube-square"></i>
                        </a>
                        <a href='https://twitter.com/mdshahadat_bd'>
                            <i className="fa fa-twitter-square"></i>
                        </a>

                    </div>
                    <div className='profile-details-name'>
                        <span className='primary-text'>
                            {" "}
                            Hello, I'm <span className="highlighted-text">Shahadat</span>
                        </span>
                    </div>
                    <div className='profile-details-role'>
                        <span className='primary-text'>
                            {" "}
                            <h1>
                                {" "}
                                <Typical loop={Infinity}
                                steps={[
                                    "Frontend Developer",
                                    1000,
                                    "React Developer",
                                    1000,
                                    "MERN Stack Developer",
                                    1000,
                                    "Cross Platform Dev",
                                    1000,
                                    "React Native/ Next Dev",
                                    1000,
                            ]}
                                />
                            </h1>
                            <span className='profile-role-tagline'>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                            </span>
                        </span>
                    </div>
                    <div className='profile-options'>
                        <button className='btn primary-btn'>
                            {""}
                            Hire Me{" "}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
