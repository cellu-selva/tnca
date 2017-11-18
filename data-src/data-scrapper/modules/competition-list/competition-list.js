'use strict';

const request = require('request');
const MongoClient = require('mongodb').MongoClient;
const constant = require('./../../constants/constants');
const competitionListConstant = constant.competitionList;

const s_url = constant.host + competitionListConstant.path1;

request(s_url, function (error, response, body) {
  if(error) {
    console.log("Error accessing url :: ", response.statusCode);
  }
  if(response && response.statusCode === 200  && body) {
    const data = JSON.parse(body.slice(13, body.length-2));
    MongoClient.connect(constant.db.url, function(err, db) {
      db.collection('cl').insert(data, function(err, res) {
        if(err) {
            console.log("Error saving data .,.... ");
        } else {
            console.log("Data inserted....");
        }
      });
    });
  }
});
