'use strict';

const request = require('request');
const MongoClient = require('mongodb').MongoClient;
const constant = require('./../../constants/constants');
const compSummaryConstant = constant.competitionSummary;

let notfound = 0;

for(var i = compSummaryConstant.start; i<= compSummaryConstant.end; i++) {
  (function(i){
    const s_url = constant.host + compSummaryConstant.path1 + i + compSummaryConstant.path2;
    request(s_url, function (error, response, body) {
      if(error) {
        console.log("Error accessing url :: ", response.statusCode, " \t Page No :: ", i);
      }
      if(response && response.statusCode === 200  && body) {
        const data = JSON.parse(body.slice(14, body.length-2));
        data.matchIndex = i;  
        MongoClient.connect(constant.db.url, function(err, db) {
          db.collection('cs').insert(data, function(err, res) {
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
