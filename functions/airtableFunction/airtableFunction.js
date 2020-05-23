// IMPORT THE AIRTABLE.JS PACKAGE
const Airtable = require('airtable');
require('dotenv').config();

/** THIS IS YOUR SERVERLESS FUNCTION */
exports.handler = function (event, context, callback) {
  //pull the required information from your environment variables, which can be set in the Netlify UI
  const { API_URL, API_CLIENT_ID, API_KEY } = process.env;
  console.log('aaaaaaa');
  // THIS FUNCTION FORMATS AND SENDS YOUR RESPONSE BACK TO YOUR FRONT-END
  // const send = body => {
  //   callback(null, {
  //     statusCode: 200,
  //     body: JSON.stringify(body)
  //   });
  // }

  // CONFIGURE YOUR AIRTABLE BASE CONNECTION
  // Airtable.configure({
  //   endpointUrl: API_URL,
  //   apiKey: API_KEY
  // });
  //
  // var base = Airtable.base(API_CLIENT_ID);
  //
  // return base('Articles').select({
  //   // Selecting the first 3 records in Grid view:
  //   maxRecords: 3,
  //   view: "Grid view"
  // }).eachPage(function page(records, fetchNextPage) {
  //   // This function (`page`) will get called for each page of records.
  //
  //   records.forEach(function(record) {
  //       console.log('Retrieved', record.get('Name'));
  //
  //   });
  //
  //   // To fetch the next page of records, call `fetchNextPage`.
  //   // If there are more records, `page` will get called again.
  //   // If there are no more records, `done` will get called.
  //   fetchNextPage();
  //
  // }, function done(err) {
  //     if (err) { console.error(err); return; }
  //   });
  /**
    AIRTABLE REQUEST LOGIC GOES HERE, APPENDING TO DATA
    REFERENCE YOUR BASE-SPECIFIC API FOR EXAMPLES OF
    COMMON CRUD OPERATIONS
  */

  // send(data);
}
