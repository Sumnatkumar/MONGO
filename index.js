const mongoose = require("mongoose");

main()
  .then(() => {
    console.log("connection successful");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/test");
}

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number,
});

const User = mongoose.model("User", userSchema);

User.findByIdAndDelete( "67cd27077766258ccaacb6cb").then((res) => {
    console.log(res);
});


// User.findOneAndUpdate({ name: "Bruce" }, { age: 42 }, { new: true })
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// User.findOne({ _id: "67cd23ac9e4e4944128df114" })
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// User.insertMany([
//     { name: "Tony", email: "tony@gmail.com", age: 50},
//     { name: "Peter", email: "peter@gmail.com", age: 30},
//     { name: "Bruce", email: "bruce@gmail.com", age: 47},
// ]).then((res) => {
//     console.log(res);
// })

// const user2 = new User({
//     name: "Bablu",
//     email: "sharma@gmail.com",
//     age: 48,
// });

// user2
//     .save()
//     .then((res) => {
//         console.log(res);
//     })
//     .catch((err) => {
//         console.log(err);
//     });
