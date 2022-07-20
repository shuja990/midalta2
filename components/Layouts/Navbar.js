import React, { Component } from 'react';
import Link from '../../utils/ActiveLink';

class Navbar extends Component {

    // Navbar 
    _isMounted = false;
    state = {
        display: false,
        collapsed: true
    };
    toggleNavbar = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    }
    componentDidMount() {
        let elementId = document.getElementById("navbar");
        document.addEventListener("scroll", () => {
            if (window.scrollY > 170) {
                elementId.classList.add("is-sticky");
            } else {
                elementId.classList.remove("is-sticky");
            }
        });
        window.scrollTo(0, 0);
    }
    componentWillUnmount() {
        this._isMounted = false;
    }

    render() {

        const { collapsed } = this.state;
        const classOne = collapsed ? 'collapse navbar-collapse' : 'collapse navbar-collapse show';
        const classTwo = collapsed ? 'navbar-toggler navbar-toggler-right collapsed' : 'navbar-toggler navbar-toggler-right';

        return (
            <>
                <div id="navbar" className="navbar-area">
                    <div className="main-nav">
                        <div className="container">
                            <nav className="navbar navbar-expand-md navbar-light">
                            <Link href="/">
                                    <a className="navbar-brand">
                                        <img src="/images/1641603852304.png" width="300px" alt="logo" />
                                    </a>
                                </Link>

                                <button 
                                    onClick={this.toggleNavbar} 
                                    className={classTwo}
                                    type="button" 
                                    data-toggle="collapse" 
                                    data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" 
                                    aria-expanded="false" 
                                    aria-label="Toggle navigation"
                                >
                                    <span className="navbar-toggler-icon"></span>
                                </button>

                                <div className={classOne} id="navbarSupportedContent">
                                    <ul className="navbar-nav">
                                        <li className="nav-item">
                                            <Link href="/">
                                                <a className="nav-link">
                                                    Home 
                                                </a>
                                            </Link>
                                        </li>

                                        <li className="nav-item">
                                            <Link href="/about" activeClassName="active">
                                                <a className="nav-link">About</a>
                                            </Link>
                                        </li>

                                        <li className="nav-item">
                                                    <Link href="/services" activeClassName="active">
                                                        <a className="nav-link">Services</a>
                                                    </Link>
                                                </li>
                                                <li className="nav-item">
                                                    <Link href="/careers" activeClassName="active">
                                                        <a className="nav-link">Careers</a>
                                                    </Link>
                                                </li>

                      
{/* 
                                                <li className="nav-item">
                                                    <Link href="/signup" activeClassName="active">
                                                        <a className="nav-link">Sign Up</a>
                                                    </Link>
                                                </li>
                                                                           

                                                <li className="nav-item">
                                                    <Link href="/blog-details" activeClassName="active">
                                                        <a className="nav-link">Blog</a>
                                                    </Link>
                                                </li>
 
                                        <li className="nav-item">
                                            <Link href="/contact" activeClassName="active">
                                                <a className="nav-link">Contact</a>
                                            </Link>
                                        </li> */}
                                    </ul>
                                </div>

                                <div className=" ms-auto">
                                    <Link href="/login">
                                        <a className="optional-btn">
                                            <i className="bx bx-log-in"></i> Log In <span></span>
                                        </a>
                                    </Link>
                                    <Link href="/contact">
                                        <a className="default-btn">
                                            <i className="bx bxs-hot"></i> Get Started <span></span>
                                        </a>
                                    </Link>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Navbar;