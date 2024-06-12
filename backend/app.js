let createError = require("http-errors");
let express = require("express");
let path = require("path");
let cookieParser = require("cookie-parser");
let logger = require("morgan");
const cors = require("cors");

const mongoose = require("mongoose");
const { db } = require("./config/database");

let auth = require("./middleWare/auth");
let indexRouter = require("./routes/index");

{
  /*for kae Daung Project

  let usersRouter = require('./routes/users');
  let FootballRouter = require('./routes/footballClub');
  let contactManagerRouter = require('./routes/contactManagerRoute');
  let PlayerReviewRouter = require('./routes/playerReview');
  */
}
{
  /*
  for ecommerce project

  let productRouter = require('./Ecomerce_Project/route/productRouter');
  let bannerRouter = require('./Ecomerce_Project/route/bannerRouter');
  */
}
let productRouter = require("./Ecomerce_Project/route/productRouter");
let bannerRouter = require("./Ecomerce_Project/route/bannerRouter");
//const {entry} = require("react-circle-slider/webpack.config");

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

/*
*
* 
    {
      origin: 'https://frontend-react-api.vercel.app',
      methods: ["GET","POST","PUT","PATCH","DELETE"],
      credentials: true,
    }
* */

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

// app.use(
//   cors({
//     origin: "*",
//     methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
//     preflightContinue: false,
//   })
// );
// app.options("*", cors());

app.use(cors({
  origin: 'https://thetpainglin-mern-project.vercel.app', // Replace with your frontend URL
  credentials: true, // If you're sending cookies or authorization headers
}));

mongoose
  .connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Mongodb connected!"))
  .catch((err) => console.log(err));

app.use("/", indexRouter);

{
  /* for kae Daung Project

//auth.verifyUserToken, in /api/movies/

  app.use('/api/users', usersRouter);
  app.use('/api/kaeDaung/footballClub', FootballRouter);
  app.use('/api/kaeDaung/manager', contactManagerRouter);
  app.use('/api/kaeDaung/playerReview', auth.verifyUserToken, PlayerReviewRouter);
   */
}

{
  /*
  for ecommerce project

  app.use('/api/products', productRouter);
  app.use('/api/banner', bannerRouter);
*/
}
app.use("/api/products", productRouter);
app.use("/api/banner", bannerRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
