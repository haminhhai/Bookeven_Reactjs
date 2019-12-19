import React, { Component } from 'react';

import { Link } from 'react-router-dom'
import { Tabs, Icon } from 'antd'
import { MDBBtn, MDBIcon } from "mdbreact";

import Header from '../../layouts/Header/Header'
import Avatar from '../../components/AvatarUser/AvatarUser'

import * as config from '../../const/config'

import '../../styles/account.scss'
import CreateAddress from './CreateAddress';
import EditInfo from './Edit/EditInfo';
import ListAddress from './ListAddress';
import EditAddress from './Edit/EditAddress';
import EditPassword from './Edit/EditPassword';

const { TabPane } = Tabs;
class Account extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isEditing: false,
            data: {},
            currentTab: '1',
        }
    }
    toggleShowEditPW = () => {
        this.setState({ showEditPassword: !this.state.showEditPassword })
    }

    toggleEditAddress = data => {
        this.setState({
            data: data,
            isEditing: !this.state.isEditing
        })
    }
    activeTab = e => {
        this.setState({ currentTab: e })
    }
    componentDidMount() {
        window.scrollTo(0, 0)
    }
    render() {
        const { address, createNewAddress, updateAddress, deleteAddress, info, updateUser, changePassword } = this.props
        const { isEditing, data, currentTab } = this.state
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
                                            <Avatar name={info.fullname} />
                                            <p>{info.fullname}</p>
                                            {
                                                info.role === 1 ?
                                                    config.roles.customer.account_left.map((item, index) => <Link key={index} to={item.path}>
                                                        <MDBIcon icon={item.icon} />
                                                        {item.title}
                                                    </Link>) :
                                                    config.roles.manager.account_left.map((item, index) => <Link key={index} to={item.path}>
                                                        <MDBIcon icon={item.icon} />
                                                        {item.title}
                                                    </Link>)
                                            }
                                        </section>
                                    </div>
                                    <div className='col-12 text-center mt-3'>
                                        <MDBBtn gradient='young-passion'>Đăng xuất</MDBBtn>
                                    </div>
                                </div>
                            </div>
                            <div className='col-sm-8'>
                                <section className='right_acc'>
                                    <Tabs
                                        className=''
                                        type="card"
                                    >
                                        <TabPane tab="Tài khoản của tôi" key="1">
                                            <EditInfo updateUser={updateUser} info={info}/>
                                        </TabPane>
                                        {
                                            info.role === 1 &&
                                            <TabPane tab="Sổ địa chỉ" key="2">
                                                <Tabs tabPosition='top' activeKey={currentTab} onChange={this.activeTab}>
                                                    <TabPane
                                                        tab={<span><Icon type="unordered-list" />Danh sách địa chỉ</span>}
                                                        key="1">
                                                        {
                                                            isEditing ?
                                                                <EditAddress
                                                                    data={data}
                                                                    toggleEditAddress={this.toggleEditAddress}
                                                                    updateAddress={updateAddress} 
                                                                    info={info} /> :
                                                                <ListAddress
                                                                    address={address}
                                                                    toggleEditAddress={this.toggleEditAddress}
                                                                    deleteAddress={deleteAddress}
                                                                    info={info} />
                                                        }
                                                    </TabPane>
                                                    <TabPane
                                                        tab={<span><Icon type="plus-circle" />Thêm địa chỉ</span>}
                                                        key="2">
                                                        <CreateAddress createNewAddress={createNewAddress} redirect={() => this.setState({ currentTab: '1' })} />
                                                    </TabPane>
                                                </Tabs>
                                            </TabPane>
                                        }
                                        <TabPane tab="Đổi mật khẩu" key="3">
                                            <EditPassword changePassword={changePassword}/>
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


export default Account;