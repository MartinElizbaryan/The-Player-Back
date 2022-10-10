const notFoundErrorCreator = (details) => {
  const error = new Error("Not Found")
  error.status = 404
  error.details = details

  return error
}

export default notFoundErrorCreator;