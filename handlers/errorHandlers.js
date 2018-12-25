/*
  Catch Errors Handler
  With async/await, you need some way to catch errors
  Instead of using try{} catch(e) {} in each controller, we wrap the function in
  catchErrors(), catch any errors they throw, and pass it along to
  our express middleware with next()
*/

exports.catchErrors = fn => function tryCatchHOF(req, res, next) {
  return fn(req, res, next).catch(next);
};

/*
  Not Found Error Handler
  If we hit a route that is not found, we mark it as 404 and pass
  it along to the next error handler to display
*/
exports.notFound = (req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
};

/*
  Development Error Handler
  In development we show good error messages so if we hit a syntax error or any other previously
  un-handled error, we can show good info on what happened
*/

exports.developmentErrors = (error, req, res, next) => {
  console.log("Development Error")
  const stack = error.stack || '';
  const errorDetails = {
    message: error.message,
    status: error.status || 500,
    stack: stack
    // use stackHighlighted if sending error as html
    // stackHighlighted: stack.replace(/[a-z_-\d]+.js:\d+:\d+/gi, '<mark>$&</mark>',),
  };
  res.status(error.status || 500);
  res.send(errorDetails)
};

/*
  Production Error Handler
  No stacktraces are leaked to user
*/
exports.productionErrors = (error, req, res, next) => {
  console.log("Production Error")
  res.status(error.status || 500);
  res.send(`
  <h2>Status: ${error.status}</h2>
  <p>Message: ${error.message}</p>
  `);
};
