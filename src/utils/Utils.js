import { notification } from 'antd'
import * as msg from '../const/message'
import { toast } from 'react-toastify'
import province from './data/province.json'
import district from './data/district.json'
import ward from './data/ward.json'
import moment from 'moment'

export const formatVND = value => {
  var numeral = require('numeral')
  return numeral(value).format('0,0') + ' đ'
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
  // eslint-disable-next-line no-useless-escape
  str = str.replace(/!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'| |\"|\&|\#|\[|\]|~|$|_/g, "-");
  str = str.replace(/-+-/g, "-");
  // eslint-disable-next-line no-useless-escape
  str = str.replace(/^\-+|\-+$/g, "");

  return str;
}

export const calculateTotalCart = (cart, type) => {
  var result = 0
  if (cart.length > 0)
    cart.map(item =>
      result += (parseInt(item.amount) * parseInt(item.price - (item.price * item.discount / 100))))
  if (type === 'vnd')
    result = formatVND(result)
  return result
}

export const filterAddress = (provinceId, districtId, wardId) => {
  var address = ''
  const wardName = ward.filter(item => item.wardid === wardId)[0]
  const districtName = district.filter(item => item.districtid === districtId)[0]
  const provinceName = province.filter(item => item.provinceid === provinceId)[0]
  if (wardName !== undefined && districtName !== undefined && provinceName !== undefined) {
    address = `${wardName.name}, ${districtName.name}, ${provinceName.name}`
    return address
  }
  else return 'Unknown'
}


export const getBase64 = (img, callback) => {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result));
  reader.readAsDataURL(img);
}

export const calDiscountPrice = (price, percent) => {
  return formatVND(price - (price * percent / 100))
}

export const calTotalPrice = (price, percent, amount) => {
  return formatVND((price - (price * percent / 100)) * amount)
}

export const converTSToDate = (timestamp, format) => {
  if (typeof timestamp !== 'number')
    return timestamp
  else
    return moment.unix(timestamp).format(format)
}

export const convertTSToMoment = timestamp => {
  return moment.unix(timestamp)
}

export const convertDateToTS = date => {
  return moment(date).unix()
}

export const getNumberFromString = text => {
  var res = text
  if(text.match(/\d/g) !== null)
    res = parseInt(text.match(/\d/g).join(""))
  return res
}