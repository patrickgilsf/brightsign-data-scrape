import request from 'request';
import dotenv from 'dotenv';
dotenv.config();
import https from 'follow-redirects';

import {
    options
} from './config.js';

var token = ""
//token gen

var tokenGen = () => {
    return new Promise(
        (resolve) => {
            request(options, function (error, response) {   
                if (error) throw new Error(error);
                //console.log(JSON.parse(response.body));
                token = JSON.parse(response.body).access_token;
                console.log('token is '+token);
                resolve();
            }
            )
        }
    )
}

var getDevice = () => {
    var getDeviceOptions = {
        'method': 'GET',
        'url': 'https://api.bsn.cloud/2019/03/REST/Devices/',
        'headers': {
          'Authorization': {
              'Bearer': token
          },
          'Accept': 'application/json',
          'Accept-Encoding': 'gzip,deflate'
        }
      };
    return new Promise(
        (resolve) => {
            request(getDeviceOptions, (err, res) => {
                if (err) throw new Error(err);
                console.log('success! '+res.body)
            })
        }
    )
}

export {
    tokenGen,
    getDevice
}


