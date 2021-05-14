const url = require('url');

const myUrl = new URL('https://mywebsite.com/hello.html?id=100&status=active');

// Serialize URLs
console.log(myUrl.href);
console.log(myUrl.toString());

// host or root domain
console.log(myUrl.host);
//host name // host name doesnt include the port but host have.
console.log(myUrl.hostname);
//Pathname
console.log(myUrl.pathname);
// Serialized query
console.log(myUrl.search);
//Params object
console.log(myUrl.searchParams);

// Add params
myUrl.searchParams.append('abs',"Julia");
console.log(myUrl.searchParams);

// Loop through params
myUrl.searchParams.forEach((value,name)=>{
    console.log(` ${name} :  ${value}`);
})