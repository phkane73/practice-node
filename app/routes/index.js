const userRouter = require("../routes/user.route");

function route(app) {
  app.use("/user", userRouter);
}

module.exports = route;
