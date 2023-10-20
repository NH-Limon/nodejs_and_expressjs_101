const url = require("url").URL;

const myUrl = new url(
  "http://myepicwebsite.com:5555/hello.html/?id=10&uuid=sdkjdkasdojasdjsoa"
);

// Serialize or get the URL value
console.log(myUrl.href);
console.log(myUrl.toString());

console.log(myUrl.host); // Give the host name with port
console.log(myUrl.hostname); // Give the host name without port

console.log(myUrl.pathname);

console.log(myUrl.search);

console.log(myUrl.searchParams);

myUrl.searchParams.append("user", "limon");
console.log(myUrl.href);

console.log(myUrl.search);

// Looping through the params
myUrl.searchParams.forEach((value, name) => {
  console.log(`Name: ${name}, Value: ${value}`);
});
