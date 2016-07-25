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