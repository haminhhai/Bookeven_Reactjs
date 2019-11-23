import { notification } from 'antd'
import * as msg from '../const/message'
import { toast } from 'react-toastify'
import province from './data/province.json'
import district from './data/district.json'
import ward from './data/ward.json'

export const formatVND = value => {
  var numeral = require('numeral')
  return numeral(value).format('0,0') + ' đ'
}

export const addToCartSuccess = () => {
  const key = 'updatable';
  notification.success({
    key: key,
    message: msg.TITLE_SUCCESS,
    description: msg.MSG_ADD_TO_CART_SUCCESS,
  });
  setTimeout(() => {
    notification.success({
      key: key,
      message: msg.TITLE_SUCCESS,
      description: msg.MSG_ADD_TO_CART_SUCCESS,
    });
  }, 1000);
}

export const addToCartFail = () => {
  const key = 'updatable';
  notification.error({
    key: key,
    message: msg.TITLE_FAIL,
    description: msg.MSG_ADD_TO_CART_FAIL,
  });
  setTimeout(() => {
    notification.error({
      key: key,
      essage: msg.TITLE_FAIL,
      description: msg.MSG_ADD_TO_CART_FAIL,
    });
  }, 1000);
}

export const idGenerator = function () {
  return '_' + Math.random().toString(36).substr(2, 9);
};

export const toastSuccess = message => {
  toast.success(message)
}

export const toastError = message => {
  toast.error(message)
}

export const toastErrorApi = error => {
  let message = null
  if (typeof error === 'object' && error.message)
    message = error.message
  if (message !== null && typeof message !== 'undefined' && message !== '') {
    toast.error(message)
  }
}

export function convertVietnamese(str) {
  str = str.toLowerCase();
  str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
  str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
  str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
  str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
  str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
  str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
  str = str.replace(/đ/g, "d");
  str = str.replace(/!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'| |\"|\&|\#|\[|\]|~|$|_/g, "-");
  str = str.replace(/-+-/g, "-");
  str = str.replace(/^\-+|\-+$/g, "");

  return str;
}

export const calculateTotalCart = (cart, type) => {
  var result = 0
  if (cart.length > 0)
    cart.map(item =>
      result += (parseInt(item.quantity) * parseInt(item.percentDiscount)))
  if (type === 'vnd')
    result = formatVND(result)
  return result
}

export const filterAddress = (provinceId, districtId, wardId) => {
  var address = ''
  const wardName = ward.filter(item => item.wardid === wardId)[0]
  const districtName = district.filter(item => item.districtid === districtId)[0]
  const provinceName = province.filter(item => item.provinceid === provinceId)[0]
  address = `${wardName.name}, ${districtName.name}, ${provinceName.name}`
  return address 
}


export const getBase64 = (img, callback) => {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result));
  reader.readAsDataURL(img);
}

export const calDiscountPrice = (realPrice, percent) => {
  return formatVND(realPrice - (realPrice * percent / 100))
}