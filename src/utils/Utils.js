export default {
    
  formatVND (value) {
    var numeral = require('numeral')
    return numeral(value).format('0,0') + ' đ'
  },
}