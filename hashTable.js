// A hash table of status codes and their corresponding messages.
// The key is a number, and the pair is a string.
var STATUS_CODES = new Map();
STATUS_CODES
    .set(200, "OK")
    .set(201, "Created")
    .set(204, "No Content")
    .set(400, "Bad Request")
    .set(401, "Unauthorized");
// The type passed into that statusCode parameter is a number, and the result returned from the function is a string.
var statusCodeMeaning = function () {
    return STATUS_CODES.get(900) || "Invalid status code, please try again.";
};
console.log(statusCodeMeaning(900));
