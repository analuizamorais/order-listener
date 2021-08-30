//import { cors } from 'cors';
//const express = require('express');
//const app = require express();


//INFOS IMPORTANTES: 
// -  ta dando erro de typescript ali 
// - nao sei se vai precisar de cors ou express 
// - precisa testar rs 


const axios = require('axios');
const interfaceFeed = require('./index')
const workspace = 'projeto22acct'
const account = 'hiringcoders202122'
const orderID = '2'; //a orderID tem que receber a ID gerada ali no index.ts

const create = async () => {
  return await axios({
    url: `https://${account}.${workspace}.com.br/api/oms/pvt/orders/${orderID}`,
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'X-VTEX-API-AppKey': 'XXX',
      'X-VTEX-API-AppToken': 'XXX'
    }
    //data: JSON.stringify(software)
  })
    .then((response) => {
      return response.data;
    })
    .then(json => console.log(json))
    .catch((err) => console.log(err))
}

//app.use(cors())

//const url = 'https://hiringcoders202122.{{workspace}}.com.br/api/oms/pvt/orders/';
//const options = {
  //method: 'GET',
  //headers: {
//    Accept: 'application/json',
 //   'Content-Type': 'application/json',
  //  'X-VTEX-API-AppKey': 'XXX',
   // 'X-VTEX-API-AppToken': 'XXX'
 // }
//};


//fetch(url, options)
 // .then(res => res.json())
  //.then(json => console.log(json))
  //.catch(err => console.error('error:' + err));

  