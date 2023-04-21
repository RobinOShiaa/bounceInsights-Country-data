const express = require("express");
const axios = require("axios");
const expressWinston = require('express-winston');
const { transports, format } = require('winston');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.resolve(__dirname, '../client/build')));

// express using winston for logging, the logs will now be automated on a route being fired 
app.use(expressWinston.logger({
  // transports declare where the logs displayed
  transports: [
    new transports.Console(),
    // on recieving an error from a route
    new transports.File({
      level: 'error',
      filename: 'logsError.log'
    }),
    // log all resulting request data from a route
    new transports.File({
      filename: 'logger.log'
    }),
    // on recieving a warning from a route

    new transports.File({
      level: 'warn',
      filename: 'logsWarning.log'
    })
  ],
  //format the resulting request data
  format: format.combine(
    format.json(),
    format.timestamp(),
    format.prettyPrint()
  ),
  statusLevels: true
}))

const myFormat = format.printf(({ level, meta, timestamp }) => {
  return `${timestamp} ${level} : ${meta.message}`
})
// rather than just capturing the req data of an error, the actual error can be logged using errorLogger
app.use(expressWinston.errorLogger({
  transports : [
    new transports.File({
      filename: 'logsInternalErrors.log'
    })
  ],
  format: format.combine(
    format.json(),
    format.timestamp(),
    myFormat
  )
}))

// Retrieves all relevant information on countries
app.get("/api/all", (req, res) => {
  axios
    .get("https://restcountries.com/v3.1/all")
    .then((response) => res.json({ statCode : 200, data: response.data }))
    .catch((err) => {
      res.json({statCode: res.status , data: err})
      throw new Error(`${err}`)
    })
});

// Retrieves information regarding a specific country
app.get("/api", (req, res) => {
  try {
    const { country } = req.query;
    axios
      .get(`https://restcountries.com/v3.1/name/${country}`)
      .then((response) => res.json({ statCode: 200 , data: response.data  }))
      .catch((err) => {
        res.json({ statCode: res.status , data: err })})
        throw new Error(`${err}`)
  } catch (e) {
    return '404'
  }
});

// any other unaffiliated routes to the server url will return in a 404 string as placeholder to an actual 404 html render 
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});


app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
