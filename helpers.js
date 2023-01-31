// to catch the error
export const catchErrors = (ce) => (req, res, next) => {
  return ce(req, res, next).catch(next);
};
