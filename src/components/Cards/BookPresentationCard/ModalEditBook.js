import React, { Component } from 'react';
import { MDBModal, MDBModalBody, MDBModalHeader, MDBBtn, MDBIcon, MDBView, MDBMask, MDBInput } from 'mdbreact'
import { Upload, Icon, InputNumber, Select } from 'antd'
import Lightbox from 'react-image-lightbox';

import * as cont from './const'
import './style.scss'
class ModalEditBook extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            previewVisible: false,
            imageUrl: '',
            title: '',
            author: '',
            inventory: 0,
            percentDiscount: 0,
            realPrice: 0,
            topic: 0,
            changeToSave: true
        }
    }
    beforeUpload = file => {
        const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
        if (!isJpgOrPng) {
            this.$utils.toastError(cont.LIMIT_FORMAT);
        }
        const isLt2M = file.size / 1024 / 1024 < 2;
        if (!isLt2M) {
            this.$utils.toastError(cont.LIMIT_SIZE);
        }
        return isJpgOrPng && isLt2M;
    }

    changeImg = info => {
        if (info.file.status === 'uploading') {
            this.setState({ loading: true });
            return;
        }
        if (info.file.status === 'done') {
            // Get this url from response in real world.
            this.$utils.getBase64(info.file.originFileObj, imageUrl =>
                this.setState({
                    imageUrl,
                    loading: false,
                    changeToSave: false
                })
            );
            this.$utils.toastSuccess(cont.UPLOAD_SUCCESS)
        }
    };

    handleSelectTopic = id => {
        this.setState({ 
            topic: id,
            changeToSave: false
        })
    }

    changeHandler = event => {
        this.setState({ 
            [event.target.name]: event.target.value ,
            changeToSave: false
        });
    };

    submitHandler = (event, values) => {
        event.preventDefault();
        event.target.className += " was-validated";
        this.toggleModal()
    };

    componentDidMount() {
        const { data } = this.props
        this.setState({
            imageUrl: data.src,
            name: data.title,
            author: data.author,
            inventory: data.inventory,
            percentDiscount: data.percentDiscount,
            realPrice: data.realPrice,
            topic: data.topic
        })
    }
    render() {
        const { modal, closeModal, fieldsBook } = this.props
        const { imageUrl, previewVisible, loading, name, author, inventory, percentDiscount, realPrice, topic, changeToSave } = this.state
        const uploadButton = (
            <div>
                <Icon type={loading ? 'loading' : 'plus'} />
                <div className="ant-upload-text">Đổi ảnh</div>
            </div>
        );
        return (
            <form>
                <MDBModal className='modal-edit' cascading isOpen={modal} size='lg'>
                    <MDBModalHeader
                        tag="h5"
                        className=" green accent-3"
                        toggle={closeModal}
                        titleClass="w-100">
                        <MDBIcon className='mr-2' icon="edit" />
                        {cont.MODAL_TITLE}
                    </MDBModalHeader>
                    <MDBModalBody >
                        <div className='row'>
                            <div className='col-3'>
                                <div className='row'>
                                    <div className='col-12'>
                                        <label>Xem trước</label>
                                        <MDBView hover onClick={() => this.setState({ previewVisible: true })}>
                                            <img className='img-lightbox mb-2 img-fluid'
                                                src={imageUrl}
                                                alt='Gallery'
                                                waves="true"
                                                overlay="true" />
                                            <MDBMask className="flex-center" overlay="white-light" />
                                        </MDBView>
                                        <label>Đổi ảnh <b className='text-danger'>*</b></label>
                                        <Upload
                                            accept="image/png, image/jpeg"
                                            listType="picture-card"
                                            className="avatar-uploader"
                                            action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                                            showUploadList={false}
                                            beforeUpload={this.beforeUpload}
                                            onPreview={this.handlePreview}
                                            onChange={this.changeImg}
                                        >
                                            {loading ? uploadButton : <img src={imageUrl} alt="avatar" style={{ width: '100%' }} />}
                                        </Upload>
                                    </div>
                                </div>
                            </div>
                            <div className='col-9'>
                                <div className='row'>
                                    <div className='col-12'>
                                        <label>Tên sách <b className='text-danger'>*</b></label>
                                        <textarea
                                            className="form-control"
                                            name='name'
                                            value={name}
                                            onChange={this.changeHandler}
                                            rows="1"
                                            required
                                        />
                                    </div>
                                    <div className='col-12'>
                                        <label>Tác giả <b className='text-danger'>*</b></label>
                                        <MDBInput
                                            outline
                                            type="text"
                                            name='author'
                                            value={author}
                                            onChange={this.changeHandler}
                                            required
                                        />
                                    </div>
                                    <div className='col-12'>
                                    <label>Danh mục <b className='text-danger'>*</b></label>
                                    <Select
                                        value={topic}
                                        style={{ width: '100%' }}
                                        onChange={this.handleSelectTopic}
                                        size='large' >
                                        {

                                            fieldsBook.length > 0 &&
                                            fieldsBook.map(item =>
                                                <Select.Option value={item.id}>
                                                    {item.name}
                                                </Select.Option>)
                                        }
                                    </Select>
                                    </div>
                                    <div className='col-4'>
                                        <label>Số lượng <b className='text-danger'>*</b></label>
                                        <InputNumber
                                            name='inventory'
                                            value={inventory}
                                            min={0}
                                            style={{ width: '100%' }}
                                            size='large'
                                            onChange={(e) => this.setState({
                                                inventory : e,
                                                changeToSave: false
                                            })}
                                        />
                                    </div>
                                    <div className='col-4'>
                                        <label>Đơn giá <b className='text-danger'>*</b></label>
                                        <InputNumber
                                            name='realPrice'
                                            value={realPrice}
                                            min={0}
                                            style={{ width: '100%' }}
                                            step={1000}
                                            size='large'
                                            formatter={value => this.$utils.formatVND(value)}
                                            parser={value => this.$utils.formatVND(value)}
                                            onChange={(e) => this.setState({
                                                realPrice : e,
                                                changeToSave: false
                                            })}
                                        />
                                    </div>
                                    <div className='col-4'>
                                        <label>Giảm giá(%) <b className='text-danger'>*</b></label>
                                        <InputNumber
                                            name='percentDiscount'
                                            value={percentDiscount}
                                            min={0}
                                            style={{ width: '100%' }}
                                            size='large'
                                            step={0.1}
                                            formatter={value => value }
                                            parser={value => value }
                                            onChange={(e) => this.setState({
                                                percentDiscount : e,
                                                changeToSave: false
                                            })}
                                        />
                                    </div>
                                    
                                </div>
                            </div>
                           
                        </div>
                        <div className=' row justify-content-center'>
                                <MDBBtn size='lg' className='rounded-pill' outline onClick={closeModal}>Hủy</MDBBtn>
                                <MDBBtn disabled={changeToSave} size='lg' className='text-white rounded-pill' type="submit">Lưu</MDBBtn>
                            </div>
                    </MDBModalBody>
                    {previewVisible && (
                        <Lightbox
                            mainSrc={imageUrl}
                            onCloseRequest={() => this.setState({ previewVisible: false })}
                        />
                    )}
                </MDBModal>
            </form>
        )
    }
}


export default ModalEditBook;