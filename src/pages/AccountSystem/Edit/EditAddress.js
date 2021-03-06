import React, { Component } from 'react';

import { MDBBtn, MDBInput} from "mdbreact";

import province from '../../../utils/data/province.json'
import district from '../../../utils/data/district.json'
import ward from '../../../utils/data/ward.json'

import '../../../styles/account.scss'

class EditAddress extends Component {
    constructor(props) {
        super(props);
        this.state = {
            province: '',
            district: '',
            ward: '',
            street: '',
            selectedProvince: '',
            selectedDistrict: '',
            selectedWard: '',

        }
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

    submitHandler = event => {
        event.preventDefault();
        event.target.className += " was-validated";
        const { street, selectedProvince, selectedDistrict, selectedWard } = this.state
        const { updateAddress , data, toggleEditAddress} = this.props
        const body = {
            address_id: data.id,
            street: street,
            province: selectedProvince,
            district: selectedDistrict,
            ward: parseInt(selectedWard)
        }
        updateAddress(body)
        toggleEditAddress('')
    };

    changeHandler = event => {
        this.setState({ [event.target.name]: event.target.value });
    };
    componentDidMount() {
        const { data } = this.props
        var tempProvince = []
        province.map((item, index) =>
            tempProvince.push(<option key={index} value={parseInt(item.provinceid)}>{item.name}</option>)
        )
        this.changeProvince({
            target: {
                value: data.province
            }
        })
        this.changeDistrict({
            target: {
                value: data.district
            }
        })
        this.setState({ province: tempProvince })
        this.setState({
            street: data.street,
            selectedProvince: data.province,
            selectedDistrict: data.district,
            selectedWard: data.ward
        })
    }
    render() {
        const { province, district, ward, street, selectedProvince, selectedDistrict, selectedWard } = this.state
        const { toggleEditAddress, } = this.props
        return (
            <form className='needs-validation'
                onSubmit={this.submitHandler}>
                <div className='row container'>
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
                        <select onChange={this.changeProvince} value={selectedProvince} className="browser-default custom-select" required>
                            <option value=''>Tỉnh/Thành phố *</option>
                            {province}
                        </select>
                    </div>
                    <div className='col-12 mt-5'>
                        <select onChange={this.changeDistrict} value={selectedDistrict} className="browser-default custom-select" required>
                            <option>Quận/Huyện/TX *</option>
                            {district}
                        </select>
                    </div>
                    <div className='col-12 mt-5'>
                        <select name='selectedWard' onChange={this.changeHandler} value={selectedWard} className="browser-default custom-select" required>
                            <option>Xã/Phường *</option>
                            {ward}
                        </select>
                    </div>
                    <div className='col-12 mt-4'>
                        <MDBBtn type='submit'>Lưu</MDBBtn>
                        <MDBBtn onClick={() => toggleEditAddress('')} color='danger'>Quay lại</MDBBtn>
                    </div>
                </div>
            </form>
        );
    }
}


export default EditAddress;