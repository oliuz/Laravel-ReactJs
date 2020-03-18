import React from "react";
import UserImg from "../../assets/user.svg";

export default function Messages() {
    return (
        <li className="nav-item dropdown">
            <a className="nav-link" data-toggle="dropdown" href="#">
                <i className="far fa-comments"></i>
                <span className="badge badge-danger navbar-badge">3</span>
            </a>
            <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
                <a href="#" className="dropdown-item">
                    {/* <!-- Message Start --> */}
                    <div className="media">
                        <img
                            src={UserImg}
                            alt="User Avatar"
                            className="img-size-50 mr-3 img-circle"
                        />
                        <div className="media-body">
                            <h3 className="dropdown-item-title">
                                Brad Diesel
                                <span className="float-right text-sm text-danger">
                                    <i className="fas fa-star"></i>
                                </span>
                            </h3>
                            <p className="text-sm">
                                Call me whenever you can...
                            </p>
                            <p className="text-sm text-muted">
                                <i className="far fa-clock mr-1"></i> 4 Hours
                                Ago
                            </p>
                        </div>
                    </div>
                    {/* <!-- Message End --> */}
                </a>
                <div className="dropdown-divider"></div>
                <a href="#" className="dropdown-item">
                    {/* <!-- Message Start --> */}
                    <div className="media">
                        <img
                            src={UserImg}
                            alt="User Avatar"
                            className="img-size-50 img-circle mr-3"
                        />
                        <div className="media-body">
                            <h3 className="dropdown-item-title">
                                John Pierce
                                <span className="float-right text-sm text-muted">
                                    <i className="fas fa-star"></i>
                                </span>
                            </h3>
                            <p className="text-sm">I got your message bro</p>
                            <p className="text-sm text-muted">
                                <i className="far fa-clock mr-1"></i> 4 Hours
                                Ago
                            </p>
                        </div>
                    </div>
                    {/* <!-- Message End --> */}
                </a>
                <div className="dropdown-divider"></div>
                <a href="#" className="dropdown-item">
                    {/* <!-- Message Start --> */}
                    <div className="media">
                        <img
                            src={UserImg}
                            alt="User Avatar"
                            className="img-size-50 img-circle mr-3"
                        />
                        <div className="media-body">
                            <h3 className="dropdown-item-title">
                                Nora Silvester
                                <span className="float-right text-sm text-warning">
                                    <i className="fas fa-star"></i>
                                </span>
                            </h3>
                            <p className="text-sm">The subject goes here</p>
                            <p className="text-sm text-muted">
                                <i className="far fa-clock mr-1"></i> 4 Hours
                                Ago
                            </p>
                        </div>
                    </div>
                    {/* <!-- Message End --> */}
                </a>
                <div className="dropdown-divider"></div>
                <a href="#" className="dropdown-item dropdown-footer">
                    See All Messages
                </a>
            </div>
        </li>
    );
}
