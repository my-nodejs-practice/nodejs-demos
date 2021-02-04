var crypto = require('crypto'),
  base64url = require('./base64url')
console.log(base64url.decode('oKY='))

function parse_signed_request (signed_request, secret) {
  encoded_data = signed_request.split('.', 2)
  // decode the data
  sig = encoded_data[0]; // base64.decode(encoded_data[0])
  data = JSON.parse(base64url.decode(encoded_data[1]))

  // check algorithm
  if (!data.algorithm || data.algorithm.toUpperCase() != 'HMAC-SHA256') {
    console.error('Unknown algorithm. Expected HMAC-SHA256')
    return null
  }

  // check sig
  expected_sig = crypto.createHmac('sha256', secret).update(encoded_data[1]).digest('base64').replace(/\+/g, '-').replace(/\//g, '_').replace('=', '')
  if (sig !== expected_sig) {
    console.error('Bad signed JSON Signature!')
    return null
  }

  return data
}
