import React, { Component } from 'react';

import { Link } from 'react-router-dom'
import { Tabs, Checkbox } from 'antd'
import { MDBBtn, MDBInput, MDBIcon } from "mdbreact";

import Header from '../../layouts/Header/Header'
import Avatar from '../../components/AvatarUser/AvatarUser'

import * as msg from '../../const/message'
import province from '../../utils/data/province.json'
import district from '../../utils/data/district.json'
import ward from '../../utils/data/ward.json'

import '../../styles/account.scss'

const { TabPane } = Tabs;
class AccountManager extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showEditPassword: false,
            province: '',
            district: '',
            ward: '',
            fullnameEdit: 'Hà Minh Hải',
            emailEdit: 'bookeven@gmail.com',
            phoneEdit: '0327487958',
            fullnameAddress: '',
            emailAddress: '',
            phoneAddress: '',
            street: '',
            selectedProvince: '',
            selectedDistrict: '',
            selectedWard: ''

        }
    }
    toggleShowEditPW = () => {
        this.setState({ showEditPassword: !this.state.showEditPassword })
    }

    changeProvince = e => {
        var id = parseInt(e.target.value)
        this.setState({ selectedProvince: id })
        var districts = []
        districts = district.filter(item => {
            return item.provinceid === id
        })
        var tempDistrict = []
        districts.map((item, index) => 
            tempDistrict.push(<option key={index} value={parseInt(item.districtid)}>{item.name}</option>)
        )
        this.setState({ district: tempDistrict })
    }

    changeDistrict = e => {
        var id = parseInt(e.target.value)
        this.setState({ selectedDistrict: id })
        var wards = []
        wards = ward.filter(item => {
            return item.districtid === id
        })
        var tempWard = []
        wards.map((item, index) => 
            tempWard.push(<option key={index} value={parseInt(item.wardid)}>{item.name}</option>)
        )
        this.setState({ ward: tempWard })
    }

    changeWard = e => {
        this.setState({ selectedWard: e.target.value })
    }

    submitHandler = event => {
        event.preventDefault();
        event.target.className += " was-validated";
        console.log(event)
    };

    changeHandler = event => {
        this.setState({ [event.target.name]: event.target.value });
    };
    componentDidMount() {
        var tempProvince = []
        province.map((item, index) => 
            tempProvince.push(<option key={index} value={parseInt(item.provinceid)}>{item.name}</option>)
        )

        this.setState({ province: tempProvince })
    }
    render() {
        const { showEditPassword, province, district, ward, fullnameEdit, phoneEdit, emailEdit,
            fullnameAddress, phoneAddress, emailAddress, street, selectedProvince, selectedDistrict, selectedWard } = this.state
        return (
            <div >
                <Header carousel={false} parent='Tài khoản' />
                <div className='account'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-sm-4'>
                                <div className='row'>
                                    <div className='col-12'>
                                        <section className='left_acc'>
                                            <Avatar name='Manager' />
                                            <p>Manager</p>
                                        </section>
                                    </div>
                                    <div className='col-12 text-center mt-3'>
                                        <MDBBtn gradient='young-passion'>Đăng xuất</MDBBtn>
                                    </div>
                                </div>
                            </div>
                            <div className='col-sm-8'>
                                <section className='right_acc'>
                                    <Tabs className='container' type="card">
                                        <TabPane tab="Tài khoản của tôi" key="1">
                                            <form
                                                className='needs-validation'
                                                onSubmit={this.submitHandler}>
                                                <div className='row'>
                                                    <div className='col-12 container'>
                                                        <MDBInput
                                                            outline
                                                            label="Họ tên"
                                                            type="text"
                                                            name='fullnameEdit'
                                                            value={fullnameEdit}
                                                            onChange={this.changeHandler}
                                                            required
                                                        />
                                                    </div>
                                                    <div className='col-12 container'>
                                                        <MDBInput
                                                            outline
                                                            label="Email"
                                                            type="email"
                                                            name='emailEdit'
                                                            value={emailEdit}
                                                            onChange={this.changeHandler}
                                                            required
                                                        />
                                                    </div>
                                                    <div className='col-12 container'>
                                                        <MDBInput
                                                            outline
                                                            label="Số điện thoại"
                                                            type="tel"
                                                            name='phoneEdit'
                                                            value={phoneEdit}
                                                            onChange={this.changeHandler}
                                                            required
                                                        />
                                                    </div>
                                                    <div className='col-12 container'>
                                                        <Checkbox onChange={this.toggleShowEditPW}>Thay đổi mật khẩu</Checkbox>
                                                    </div>
                                                    {showEditPassword &&
                                                        <div className='row container'>
                                                            <div className='col-12'>
                                                                <MDBInput
                                                                    outline
                                                                    label="Mật khẩu cũ"
                                                                    type="password"
                                                                    name='oldpass'
                                                                    required
                                                                />
                                                            </div>
                                                            <div className='col-12 '>
                                                                <MDBInput
                                                                    outline
                                                                    label="Mật khẩu mới"
                                                                    type="password"
                                                                    name='newpass'
                                                                    required
                                                                />
                                                            </div>
                                                            <div className='col-12 '>
                                                                <MDBInput
                                                                    outline
                                                                    label="Nhập lại"
                                                                    type="password"
                                                                    name='renewpass'
                                                                    required
                                                                />
                                                            </div>
                                                        </div>}
                                                    <div className='col-6 container'>
                                                        <MDBBtn gradient='sunny-morning' type='submit'>Cập nhật</MDBBtn>
                                                    </div>
                                                </div>
                                            </form>
                                        </TabPane>
                                        <TabPane tab="Sổ địa chỉ" key="2">
                                            <Tabs tabPosition='left'>
                                                <TabPane tab="Danh sách địa chỉ" key="1">
                                                    {msg.MSG_EMPTY_ADDRESS}
                                                </TabPane>
                                                <TabPane tab="Thêm địa chỉ" key="2">
                                                    <form className='needs-validation'
                                                        onSubmit={this.submitHandler}>
                                                        <div className='row mr-2'>
                                                            <div className='col-12'>
                                                                <MDBInput
                                                                    outline
                                                                    label="Họ tên *"
                                                                    type="text"
                                                                    name='fullnameAddress'
                                                                    value={fullnameAddress}
                                                                    onChange={this.changeHandler}
                                                                    required
                                                                />
                                                            </div>
                                                            <div className='col-12'>
                                                                <MDBInput
                                                                    outline
                                                                    label="Email *"
                                                                    type="email"
                                                                    name='emailAddress'
                                                                    value={emailAddress}
                                                                    onChange={this.changeHandler}
                                                                    required
                                                                />
                                                            </div>
                                                            <div className='col-12'>
                                                                <MDBInput
                                                                    outline
                                                                    label="Điện thoại *"
                                                                    type="tel"
                                                                    name='phoneAddress'
                                                                    value={phoneAddress}
                                                                    onChange={this.changeHandler}
                                                                    required
                                                                />
                                                            </div>
                                                            <div className='col-12'>
                                                                <MDBInput
                                                                    outline
                                                                    label="Địa chỉ *"
                                                                    type="text"
                                                                    name='street'
                                                                    value={street}
                                                                    onChange={this.changeHandler}
                                                                    required
                                                                />
                                                            </div>
                                                            <div className='col-12 mt-4'>
                                                                <select onChange={this.changeProvince} value={selectedProvince} className="browser-default custom-select">
                                                                    <option value=''>Tỉnh/Thành phố *</option>
                                                                    {province}
                                                                </select>
                                                            </div>
                                                            <div className='col-12 mt-5'>
                                                                <select onChange={this.changeDistrict} value={selectedDistrict} className="browser-default custom-select">
                                                                    <option>Quận/Huyện/TX *</option>
                                                                    {district}
                                                                </select>
                                                            </div>
                                                            <div className='col-12 mt-5'>
                                                                <select onChange={this.changeWard} value={selectedWard} className="browser-default custom-select">
                                                                    <option>Xã/Phường *</option>
                                                                    {ward}
                                                                </select>
                                                            </div>
                                                            <div className='col-12 mt-4'>
                                                                <MDBBtn type='submit'>Tạo mới</MDBBtn>
                                                            </div>
                                                        </div>
                                                    </form>
                                                </TabPane>
                                            </Tabs>
                                        </TabPane>
                                    </Tabs>
                                </section>
                            </div>

                        </div>
                    </div>
                </div>
            </div >
        );
    }
}


export default AccountManager;