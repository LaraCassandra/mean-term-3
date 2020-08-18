module.exports = function (request, response, next) {
    var passcode = 'super-secret';
    if (request.query.passcode === passcode) {
        next();
    }
    else {
        response.send(401);
    }
}