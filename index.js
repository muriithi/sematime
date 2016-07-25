// Copyright 2016 Muriithi Kamweti
//
//    Licensed under the Apache License, Version 2.0 (the "License");
//    you may not use this file except in compliance with the License.
//    You may obtain a copy of the License at
//
//        http://www.apache.org/licenses/LICENSE-2.0
//
//    Unless required by applicable law or agreed to in writing, software
//    distributed under the License is distributed on an "AS IS" BASIS,
//    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//    See the License for the specific language governing permissions and
//    limitations under the License.

'use strict'

var request = require('request');
exports.sendsemasms= function(apikey, userid, message, recipient){
    request.post({
      headers: {'content-type' : 'application/json','ApiKey' :apikey},
      url:     'http://api.sematime.com/v1/'+userid+'/messages',
      json:    {"message":message,"recipients":recipient}
    }, function(error, response, body){
        if(error){
            console.log(error)
        }
        console.log(body);
        console.log(response.statusCode);
        });
};