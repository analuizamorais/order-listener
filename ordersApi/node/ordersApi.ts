export {}; 
const cors = require('cors');
const express = require('express');
const app = require express();
const axios = require('axios');

const workspace = 'projeto22acct'
const account = 'hiringcoders202122'
const orderID = '2';

const create = async () => {
  return await axios({
    url: `https://${account}.${workspace}.com.br/api/oms/pvt/orders/${orderID}`
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'X-VTEX-API-AppKey': 'XXX',
      'X-VTEX-API-AppToken': 'XXX'
    },
    data: JSON.stringify(software)
  })
    .then((response) => {
      return response.data;
    }).catch((err) => console.log(err))
}

create({ t: jwt.token }, data)
    .then((data) => {
      if (data.error) {
        this.setState({ error: data.error })
      } else {
        this.props.dispatch(initSoftware()); //if successful get the list of softwares in redux store
      }
    })

app.use(cors())

const url = 'https://hiringcoders202122.{{workspace}}.com.br/api/oms/pvt/orders/';
const options = {
  method: 'GET',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'X-VTEX-API-AppKey': 'XXX',
    'X-VTEX-API-AppToken': 'XXX'
  }
};

app.get(orderID, async(req, res) =>{
  const {data} = await axios(url, {
    params: {
      'X-VTEX-API-AppKey': 'XXX',
      'X-VTEX-API-AppToken': 'XXX'
    }
  })
})

axios.get('/user', {
  params: {
    apiKey: 'YOUR_API_KEY'
  }
})
  .then((data) => {
    // Do stuff.
  })
  .catch(() => alert('Houve um erro!');

const ordersInfo = async () => {
  try { 
    const res = await axios.get(url)
      .then(res => {
        console.log("aaaa")
      })
  } 
}

//fetch(url, options)
 // .then(res => res.json())
  //.then(json => console.log(json))
  //.catch(err => console.error('error:' + err));

  