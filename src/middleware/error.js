const errorHandler = (err, req, res, next) => {
    console.error([{ name: err.name }], err.message);
    const status = err.statusCode || 500;
    res.status(status).json({
        error: err.message,
        message: err.message || 'Internal server error',
    });
};

export default errorHandler;