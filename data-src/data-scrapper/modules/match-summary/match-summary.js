'use strict';

const request = require('request');
const MongoClient = require('mongodb').MongoClient;
const constant = require('./../../constants/constants');

let notfound = 0;

for(var i = constant.matchSummary.start; i<= constant.matchSummary.end; i++) {
  (function(i){
    const s_url = constant.host + constant.matchSummary.path1 + i + constant.matchSummary.path2;
    console.log(s_url);
    request(s_url, function (error, response, body) {
      if(error) {
        console.log("Error accessing url :: ", response.statusCode, " \t Page No :: ", i);
      }
      if(response && response.statusCode === 200  && body) {
        const data = JSON.parse(body.slice(22, body.length-2));
        data.matchIndex = i;  
        MongoClient.connect(constant.db.url, function(err, db) {
          db.collection('ms').insert(data, function(err, res) {
            if(err) {
                console.log("Error saving data .,.... ", i);
            } else {
                console.log("Data inserted....", i);
            }
          });
        });
      } else if(response && response.statusCode === 404) {
        console.log("Data not found for id :: ", i, notfound++);
      }
    });
  })(i);
}
