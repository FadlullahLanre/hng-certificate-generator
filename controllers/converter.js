const express = require('express');
const fs = require('fs');
const csvReader = require('csv-reader');
// const fileguard = require('@thesameeric/fileguard');


const csv = async(req,res) => {

}

const pdf = (req,res) => {
  const csvFile = req.file;
  // const validatedFile = fileguard.file(csvFile).type(['csv']);

  // if(validatedFile.error) {
  //       console.log('The error: ' + error);
  // }
  // Converting csv to json
  const options = { 
    skipEmptyLines: true,
    asObject: true,             
    parseNumbers: true, 
    parseBooleans: true, 
    trim: true 
  };

  const csvStream = new csvReader(options);
  const readStream = fs.createReadStream(csvFile, 'utf8');

  readStream.on('error', err => {
    console.log(err);
    csvStream.destroy(err);
  }).pipe(csvStream).on('error', err => {
    console.error(err);
  }).on('data', (data) => {
  var json = JSON.stringify(data, null, 2);
  var myFile = `${data.name}.json`;
  fs.writeFile(myFile, json, 'utf8', (err) => {
    if (err) throw err;
  });
  // res.send(data);
  console.log('Data written to file');

  }).on('end', () => {
  res.send('Finished converting csv to json file');

  });
}

module.exports = { csv, pdf };