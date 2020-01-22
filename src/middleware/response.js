
const responseHandler = (code, msg, records = []) => {
    return ({ code, msg, records })
};

/*
    RESPONSE CODES:
    -1 : The server encountered an unexpected condition which prevented it from fulfilling the request.
    0  : Success,
    1  : Used when the requested resource is not found, whether it doesn't exist,
    2  : Request parameter required,
    3  : Request parameter date formats [YYYY-MM-DD] validation
*/

const handleResponse = (responseHandler, res) => {
    res.send({
        code: responseHandler.code,
        msg: responseHandler.msg,
        records: responseHandler.records
    });
};
module.exports = {
    responseHandler,
    handleResponse
}