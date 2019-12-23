import React, { Component } from 'react';
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import { Link } from 'react-router-dom'

import '../../styles/layout.scss'
import logo from '../../assets/logo.png'
class Footer extends Component {
    state = {}
    render() {
        return (
            <MDBFooter color="blue-grey" className="page-footer font-small lighten-5 pt-0">
                <MDBContainer className=" mb-4 text-center text-md-left">
                    <div id='logo-foot'>
                        <Link to='/'>
                            <img src={logo} alt='' />
                        </Link>
                    </div>
                    <MDBRow className="mt-3 justify-content-center text-center">
                        <MDBCol md="4" lg="3" xl="3" className="mb-4 dark-grey-text">
                            <h6 className="text-uppercase font-weight-bold">
                                <strong>Liên lạc</strong>
                            </h6>
                            <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{ width: "60px" }} />
                            <p>
                                <i className="fa fa-home mr-3" /> 144 Xuân Thủy, Cầu Giấy, Hà Nội
                            </p>
                            <p>
                                <i className="fa fa-envelope mr-3" /> bookeven9@gmail.com
                            </p>
                            <p>
                                <i className="fa fa-phone mr-3" /> + 01 234 567 88
                             </p>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
                <div className="footer-copyright text-center py-3">
                    <MDBContainer fluid>
                        &copy; {new Date().getFullYear()} Copyright:{" "}
                        <a href="/"> fe-bookeven.herokuapp.com </a>
                        <i className='float-right'>v.1.0.7</i>
                    </MDBContainer>
                </div>
            </MDBFooter>
        );
    }
}

export default Footer;