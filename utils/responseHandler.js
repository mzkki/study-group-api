const errorHandler = (err, req, res, next) => {
  console.error(err);
  res.status(500).json({
    success: false,
    message: 'Internal server error'
  });
}

const notFoundHandler = (err, req, res, next) => {
  res.status(404).json({
    message: 'Not Found'
  });
}

module.exports = { errorHandler, notFoundHandler };