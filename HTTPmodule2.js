const http = require('http');

//1
//http.get()
//used to create client request
http.get('https://api.github.com/', { headers: { 'User-Agent': 'node' } }, res => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => console.log('Result:', data));
}).on('error', console.error);




//2
//full request
const options = {
  hostname: 'example.com',
  port: 80,
  path: '/api/data',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
  // Optional: custom agent for connection pooling
  // agent: new http.Agent({ keepAlive: true })
};

const req = http.request(options, res => {
  let body = '';
  res.on('data', chunk => body += chunk);
  res.on('end', () => console.log('Response:', body));
});

req.on('error', err => console.error('Request error:', err));

// Write JSON body
req.write(JSON.stringify({ key: 'value' }));
req.end();