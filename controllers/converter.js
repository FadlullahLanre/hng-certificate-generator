
const { parse } = require('csv-parse');
const fs = require('fs');

exports.converter = async (req, res) => {
    const file = req.file
    let jsonArr = []
    let newArr
    correctFormat = true
    try {
        if (!file) {
            return res.status(400).json({ message: "Input a file" })
        }

        fs.createReadStream(file.path)
            .pipe(parse({
                columns: true,
                delimiter: ",",
                from_line: 1
            }))
            .on("data", async (row) => {
                jsonArr.push(row);

                newArr = jsonArr.map(x => Object.fromEntries(Object.entries(x).map(
                    ([key, value]) => [key.toLowerCase(), typeof value == 'string' ? value.toLowerCase() : value])));

            })
            .on('end', function () {
                newArr.every((row) => {
                    const { name, organization, award, description, date } = row

                    if (!name || !organization || !award || !description || !date) {
                        correctFormat = false
                        return false
                    }
                    return true
                })
                if (!correctFormat) {
                    return res.json({ message: 'Input a file with correct format!!' })
                }
                res.send(newArr)
            })
    }


    catch (error) {
        res.status(500).json({ success: false, error: error })
        throw error
    }
}
