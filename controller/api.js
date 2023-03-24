const url = require('url');
const os = require('os');
const querystring = require('querystring');

exports.getJsonData = (req,res,next) => {



  const parsedUrl = url.parse(req.url);
  const parsedQuery = querystring.parse(parsedUrl.query);

  const data = {
    cpus : os.cpus(),
    platform: os.platform(),
    totalMemory: os.totalmem(),
    freeMemory: os.freemem(),
    loadAverage: os.loadavg(),
    uptime: os.uptime(),


  };

  if (parsedQuery.module === 'cpus') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(os.cpus()));

  } else if (parsedQuery.module === 'networkInterfaces') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(os.networkInterfaces()));
  }
    else if (parsedQuery.module === 'platform') {
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(os.platform()));
    }
    else if (parsedQuery.module === 'totalmem') {
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(os.totalmem()));
    }
    else if (parsedQuery.module === 'freemem') {
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(os.freemem()));
    }
    else if (parsedQuery.module === 'loadavg') {
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(os.loadavg()));
    }
    else if (parsedQuery.module === 'uptime') {
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(os.uptime()));
  } else {
    // res.writeHead(200, { 'Content-Type': 'application/json' });
    
    res.json(data);
  }
}
    
//         // console.log(req.headers);

//       const jsonData = JSON.stringify(data);
//       res.setHeader('Content-Type', 'application/json');
//       res.send(jsonData);

//       //     const filters = req.query;
//   // const filteredUsers = data.filter(user => {
//   //   let isValid = true;
//   //   for (key in filters) {
//   //     console.log(key, user[key], filters[key]);
//   //     isValid = isValid && user[key] == filters[key];
//   //   }
//   //   return isValid;
//   // });
//   // res.send(filteredUsers);



// }