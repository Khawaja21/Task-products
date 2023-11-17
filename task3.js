const http = require("http");

// Http GET request



http.get("http://example.com", (response) => {
  let data = "";

  // A chunk of data has been received.
  response.on("data", (chunk) => {
    data += chunk;
  });

  // The whole response has been received.
//   receiving the response
  response.on("end", () => {
    console.log(data);
  });
}).on("error", (error) => {
  console.error(`Error: ${error.message}`);
});

// HTTP POST request
const postData = "key1=value1&key2=value2";
const postOptions = {
  hostname: "example.com",
  path: "/path",
  method: "POST",
  headers: {
    'Content-Type': "application/x-www-form-urlencoded",
    'Content-Length': Buffer.byteLength(postData),
  },
};

const postRequest = http.request(postOptions, (response) => {
  let data = "";

  response.on("data", (chunk) => {
    data += chunk;
  });

  response.on("end", () => {
    console.log(data);
  });
});

postRequest.on("error", (error) => {
  console.error(`Error: ${error.message}`);
});

// Write data to request body
postRequest.write(postData);
postRequest.end();

