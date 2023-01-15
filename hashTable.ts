// A hash table of status codes and their corresponding messages.

// The key is a number, and the pair is a string.
const STATUS_CODES = new Map<number, string>()
STATUS_CODES
	.set(200, "OK")
	.set(201, "Created")
	.set(204, "No Content")
	.set(400, "Bad Request")
	.set(401, "Unauthorized");

    // The type returned from the function will be a string.
    const statusCodeMeaning = (): string => {
        return STATUS_CODES.get(400) || "Invalid status code, please try again";
    }

    console.log(statusCodeMeaning());