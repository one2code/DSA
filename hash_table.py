STATUS_CODES = {
    200: "OK",
    301: "Moved Permanently",
    401: "Unauthorized",
    404: "Not Found",
    500: "Internal Server Error",
}


def status_code_meaning(number):
    return STATUS_CODES[number]


print(status_code_meaning(200))
