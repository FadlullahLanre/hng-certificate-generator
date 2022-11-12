import CustomError from '../errors/customError.js';

const errorHandler = (err, req, res, next) => {
  console.log(err);
  if (err instanceof CustomError) {
    return res.status(err.statusCode).send(err.message);
  }
  if (err.message === 'Unexpected field') {
    return res
      .status(400)
      .send("please input 'csv' as the key in the input field");
  }
  res.status(500).send('internal server error');
};

export default errorHandler;
