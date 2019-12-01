import React, { Component } from 'react';
import { MDBModal, MDBModalBody, MDBModalHeader, MDBBtn, MDBIcon, MDBView, MDBMask, MDBInput } from 'mdbreact'
import { Upload, Icon, InputNumber, Select, Form, Input, Button } from 'antd'
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
            [event.target.name]: event.target.value,
            changeToSave: false
        });
    };

    normFile = e => {
        if (Array.isArray(e)) {
          return e;
        }
        return e && e.fileList;
      };

    handleSubmit = e => {
        const { updateListBook, data, closeModal, fetchListBook } = this.props
        const { imageUrl  } = this.state
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                const { name, author, topic, percentDiscount, realPrice, inventory } = values
                const body = {
                    id: data.id,
                    src: imageUrl,
                    title: name,
                    author: author,
                    inventory: inventory,
                    realPrice: realPrice,
                    percentDiscount: percentDiscount,
                    topic: topic
                }
                updateListBook(body)
                closeModal()
            }
        });
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
        const { modal, closeModal, fieldsBook, form } = this.props
        const { imageUrl, previewVisible, loading, name, author, inventory, percentDiscount, realPrice, topic, changeToSave } = this.state
        const { getFieldDecorator } = form;
        const uploadButton = (
            <div>
                <Icon type={loading ? 'loading' : 'plus'} />
                <div className="ant-upload-text">Đổi ảnh</div>
            </div>
        );
        console.log(imageUrl)
        return (
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
                    <Form onSubmit={this.handleSubmit}>
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
                                        <Form.Item label='Đổi ảnh'>
                                            {getFieldDecorator('fileList', {
                                                valuePropName: 'fileList',
                                                getValueFromEvent: this.normFile,
                                                rules: [
                                                    {
                                                        required: true,
                                                    },
                                                ],
                                            })(
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
                                            )}
                                        </Form.Item>
                                    </div>
                                </div>
                            </div>
                            <div className='col-9'>
                                <div className='row'>
                                    <div className='col-12'>
                                        <Form.Item label='Tên sách'>
                                            {getFieldDecorator('name', {
                                                initialValue: name,
                                                rules: [
                                                    {
                                                        required: true,
                                                        message: cont.REQUIRE_NAME,
                                                    },
                                                ],
                                            })(
                                                <Input.TextArea
                                                    autoSize={{ minRows: 2, maxRows: 6 }} />
                                            )}
                                        </Form.Item>
                                    </div>
                                    <div className='col-12'>
                                        <Form.Item label='Tác giả'>
                                            {getFieldDecorator('author', {
                                                initialValue: author,
                                                rules: [
                                                    {
                                                        required: true,
                                                        message: cont.REQUIRE_AUTHOR,
                                                    },
                                                ],
                                            })(
                                                <Input size='large' />
                                            )}
                                        </Form.Item>
                                    </div>
                                    <div className='col-12'>
                                        <Form.Item label='Danh mục'>
                                            {getFieldDecorator('topic', {
                                                initialValue: topic,
                                                rules: [
                                                    {
                                                        required: true,
                                                        message: cont.REQUIRE_TOPIC
                                                    },
                                                ],
                                            })(
                                                <Select 
                                                    placeholder={cont.REQUIRE_TOPIC}
                                                    style={{ width: '100%' }}
                                                    size='large' >
                                                    {

                                                        fieldsBook.length > 0 &&
                                                        fieldsBook.map((item, index) =>
                                                            <Select.Option key={index} value={item.id}>
                                                                {item.name}
                                                            </Select.Option>)
                                                    }
                                                </Select>
                                            )}
                                        </Form.Item>
                                    </div>
                                    <div className='col-4'>
                                        <Form.Item label='Tồn kho'>
                                            {getFieldDecorator('inventory', {
                                                initialValue: inventory,
                                                rules: [
                                                    {
                                                        required: true,
                                                        message: cont.REQUIRE_IVENTORY
                                                    },
                                                ],
                                            })(
                                                <InputNumber
                                                    min={0}
                                                    style={{ width: '100%' }}
                                                    size='large'
                                                />
                                            )}
                                        </Form.Item>
                                    </div>
                                    <div className='col-4'>
                                        <Form.Item label='Đơn giá'>
                                            {getFieldDecorator('realPrice', {
                                                initialValue: realPrice,
                                                rules: [
                                                    {
                                                        required: true,
                                                        message: cont.REQUIRE_PRICE
                                                    },
                                                ],
                                            })(
                                                <InputNumber
                                                    min={0}
                                                    style={{ width: '100%' }}
                                                    step={1000}
                                                    size='large'
                                                    formatter={value => this.$utils.formatVND(value)}
                                                    parser={value => this.$utils.formatVND(value)}
                                                />
                                            )}
                                        </Form.Item>
                                    </div>
                                    <div className='col-4'>
                                        <Form.Item label='Giảm giá (%)'>
                                            {getFieldDecorator('percentDiscount', {
                                                initialValue: percentDiscount,
                                                rules: [
                                                    {
                                                        required: true,
                                                        message: cont.REQUIRE_DISCOUNT
                                                    },
                                                ],
                                            })(
                                                <InputNumber
                                                    min={0}
                                                    style={{ width: '100%' }}
                                                    size='large'
                                                    step={0.1}
                                                    formatter={value => value}
                                                    parser={value => value}
                                                />
                                            )}
                                        </Form.Item>
                                    </div>

                                </div>
                            </div>

                        </div>
                        <Form.Item className='text-center'>
                            <MDBBtn  className='rounded-pill' outline onClick={closeModal}>Hủy</MDBBtn>
                            <Button 
                                size='large'
                                type='primary'
                                className='text-white'
                                shape="round"
                                htmlType="submit">
                                Lưu
                                </Button>
                        </Form.Item>
                    </Form>
                </MDBModalBody>
                {previewVisible && (
                    <Lightbox
                        mainSrc={imageUrl}
                        onCloseRequest={() => this.setState({ previewVisible: false })}
                    />
                )}
            </MDBModal>
        )
    }
}

const Wrapper = Form.create({ name: 'update_book' })(ModalEditBook)
export default Wrapper;