
const internalServerErrorCreator = () => {
  const error = new Error("Internal server error");
  error.status = 500;

  return error;
}

export default internalServerErrorCreator;