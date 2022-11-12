const asyncHandler = require("express-async-handler");
const { parse } = require("csv-parse");
const fs = require("fs");
const csvtojson = require("csvtojson");

let data;

const inputCsv = async (req, res) => {
  try {
    data = req.file;
    let csv = data.originalname;
    csv = csv.split(".").pop();
    if (data) {
      if (csv === "csv") {
        res.status(200).send("csv input received");
      }
    } else {
      throw new Error("something went wrong");
    }
  } catch (error) {
    res.status(500).send("send a new request");
  }
};

const csvToJSon = asyncHandler(async (req, res) => {
  const fileDir = data.path;
  console.log(fileDir);

  const rawData = await csvtojson().fromFile(fileDir);
  console.log(rawData);
  //   fs.createReadStream(fileDir).pipe(
  //     parse({ delimiter: ",", from_line: 2 })
  //       .on("data", (row) => {
  //         for (let i = 0; i < 6; i++) {
  //           dataFromCsv.push(row);
  //         }
  //       })
  //       .on("end", () => {
  //         console.log("finished");
  //         // fs.rm('uploads', {recursive: true}, (err))
  //       })
  //       .on("error", (err) => {
  //         console.log(err.message);
  //       })
  //   );
  res.json(rawData);
});

module.exports = { inputCsv, csvToJSon };
