const logger = (req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  console.log('Content-Type:', req.get('Content-Type'));
  console.log('Body:', req.body);
  console.log('---------------------------------------------');
  next();
};

export default logger;