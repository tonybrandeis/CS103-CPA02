const express     = require("express"),
    app           = express(),
    bodyParser    = require("body-parser"),
    mongoose      = require("mongoose"),
    passport      = require("passport"),
    localStrategy = require("passport-local"),
    methodOverride = require("method-override"),
    User          = require("./model/users"),
    flash        = require("connect-flash");
    
const PORT         = process.env.PORT || 3000;

// Set the Mongodb Cloud connection URL here
const MONGODB_URL  = "mongodb+srv://cpauser1:cpauser1@cpa2.419xn.mongodb.net/CPA2?retryWrites=true&w=majority";

var commentRoutes    = require("./routes/comments"),
    letUsEatOutRoutes = require("./routes/campgrounds"),
    authRoutes       = require("./routes/index");


mongoose.connect(MONGODB_URL, {useUnifiedTopology: true,useNewUrlParser: true});
app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public")); //dirname is the current script working path
app.use(methodOverride("_method"));
app.use(flash());
// seedDB(); // seed the cloud database


// Passport Configuration
app.use(require("express-session")({
    secret:"Agnes",
    resave:true,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
passport.use(new localStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(function (req, res, next) { // app.use let every route to call this function
    res.locals.currentUser = req.user;
    res.locals.error =req.flash("error");
    res.locals.success = req.flash("success");
    next(); // move to next middleware
});

// requiring routes
app.use(authRoutes);
app.use("/LetUsEatOut",letUsEatOutRoutes);
app.use("/LetUsEatOut/:id/comments",commentRoutes);

app.listen(PORT,process.env.ip, function () {
    console.log("LetUsEatOut has started!");
});
