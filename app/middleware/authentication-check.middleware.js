const authenticationCheck = (req, _, next) => {
  if (!req.session.userId) {
    const requestError = new Error(
      "Forbidden. You need to be connected to access this route"
    );
    requestError.name = "Forbidden";
    requestError.code = 403;
    throw requestError;
  }

  next();
};

export default authenticationCheck;
