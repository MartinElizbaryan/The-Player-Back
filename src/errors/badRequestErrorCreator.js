const badRequestErrorCreator = (details) => {
    const error = new Error("Bad Request")
    error.status = 400
    error.details = details
  
    return error
}

export default badRequestErrorCreator