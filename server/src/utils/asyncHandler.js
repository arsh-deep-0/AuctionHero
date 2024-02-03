import { request } from "express";

const asyncHandler = (requestHandler) => {
  (req, res, next) => {
    Promise.resolve(requestHandler(req, res, next)).catch((err) => {
      next(err);
    });
  };
};

export { asyncHandler };

/* Another way to do the same thing

const asyncHandler = (requestHandler) => {
  async (req, res, next) => {
    try {
      await requestHandler(req, res, next);
    } catch (err) {
      res.status(err.code || 500).json({
        success: false,
        message: err.message,
      });
    }
  };
}; */
