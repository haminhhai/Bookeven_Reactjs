import { notification } from 'antd'
import * as msg from '../const/message'

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

