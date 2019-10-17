import React, { Component } from 'react';
import { MDBCol, MDBContainer, MDBRow, MDBFooter, MDBIcon } from "mdbreact";
import '../../styles/layout.css'
import logo from '../../assets/logo.png'
class Footer extends Component {
    state = {}
    render() {
        return (
            <MDBFooter color="blue-grey" className="page-footer font-small lighten-5 pt-0">
                <MDBContainer className=" mb-4 text-center text-md-left">
                    <div id='logo-foot'>
                        <img src={logo} alt=''/>
                    </div>
                    <MDBRow className="mt-3">
                        <MDBCol md="3" lg="4" xl="3" className="mb-4 dark-grey-text">
                            <h6 className="text-uppercase font-weight-bold">
                                <strong>Dịch vụ</strong>
                            </h6>
                            <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{ width: "60px" }} />
                            <p>
                                Điều khoản sử dụng
                            </p>
                            <p>
                                Chính sách bảo mật
                            </p>
                            <p>
                                Liên hệ
                            </p>
                        </MDBCol>
                        <MDBCol md="2" lg="2" xl="2" className="mb-4 dark-grey-text">
                            <h6 className="text-uppercase font-weight-bold">
                                <strong>Hộ trợ</strong>
                            </h6>
                            <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{ width: "60px" }} />
                            <p>
                                <a href="#!" className="dark-grey-text">
                                    Cách thức mua hàng
                                </a>
                            </p>
                            <p>
                                <a href="#!" className="dark-grey-text">
                                    Chính sách đổi trả - hoàn tiền
                                </a>
                            </p>
                            <p>
                                <a href="#!" className="dark-grey-text">
                                    Phương thức vận chuyển
                                </a>
                            </p>
                        </MDBCol>
                        <MDBCol md="3" lg="2" xl="2" className="mb-4 dark-grey-text">
                            <h6 className="text-uppercase font-weight-bold">
                                <strong>Tài khoản</strong>
                            </h6>
                            <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{ width: "60px" }} />
                            <p>
                                <a href="#!" className="dark-grey-text">
                                    Đăng nhập
                                </a>
                            </p>
                            <p>
                                <a href="#!" className="dark-grey-text">
                                    Tạo mới tài khoản
                                </a>
                            </p>
                        </MDBCol>
                        <MDBCol md="4" lg="3" xl="3" className="mb-4 dark-grey-text">
                            <h6 className="text-uppercase font-weight-bold">
                                <strong>Liên lạc</strong>
                            </h6>
                            <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{ width: "60px" }} />
                            <p>
                                <i className="fa fa-home mr-3" /> 144 Xuân Thủy, Cầu Giấy, Hà Nội
                            </p>
                            <p>
                                <i className="fa fa-envelope mr-3" /> bookeven@gmail.com
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
                        <a href="https://www.MDBootstrap.com"> Bookeven.com </a>
                    </MDBContainer>
                </div>
            </MDBFooter>
        );
    }
}

export default Footer;