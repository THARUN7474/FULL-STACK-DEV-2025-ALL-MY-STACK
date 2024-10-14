const mongoose = require("mongoose");

// mongoose
//   .connect("mongodb://127.0.0.1:27017/scratch", {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => console.log("MongoDB connected"))
//   .catch((err) => console.log(err));

const userSchema = new mongoose.Schema({
  fullname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  cart: {
    type: Array,
    default: [],
  },
  isadmin: Boolean,

  orders: {
    type: Array,
    default: [],
  },
  contact: Number,
  picture: String,
  // address : String,
  // city : String,
  // state : String,
  // country : String,
  // zipcode : Number,
});

module.exports = mongoose.model("user", userSchema);
