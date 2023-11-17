var request = require('request'),
	postData = {},
	postConfig = {},
	postSuccessHandler = null;

postData = {
    name:'Admin',
    title:'Task 101',
};

postConfig = {
    url:'http://localhost:8000/form',
    form: postData
};

postSuccessHandler = function (err, httpResponse, body) {

	console.log('JSON response from the server: ' + body);
};


request.post(postConfig, postSuccessHandler);
