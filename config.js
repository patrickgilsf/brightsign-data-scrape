import request from 'request';
import dotenv from 'dotenv';
dotenv.config();
import https from 'follow-redirects';

const client_id = process.env.CLIENT_ID;
const client_secret = process.env.CLIENT_SECRET;
const username = process.env.USERNAME;
const password = process.env.PASSWORD;

var options = {
    'method': 'POST',
    'url': 'https://api.bsn.cloud/2019/03/REST/Token/',
    'headers': {
      'Accept-Encoding': 'gzip,deflate',
      'Content-Type': 'application/x-www-form-urlencoded',
      'Accept': 'application/json',
      'Authorization': 'Basic Og=='
    },
    form: {
      'grant_type': 'password',
      'client_id': client_id,
      'client_secret': client_secret,
      'username': username,
      'password': password
    }
  };

  export {
      options
  }