// require("dotenv").config();
// const jwt = require("jsonwebtoken");

// const generateAndSignJwt = async () => {
//   const userId = 123;
//   const admin = true;

//   const user = {
//     id: 123,
//     admin: true,
//   };

//   const token = await jwt.sign({ id: user.id }, process.env.SECRET_KEY);

//   return token;
// };

// const verify = async () => {
//   try {
//     const realToken = await generateAndSignJwt();
//     const fakeToken = "wukrhgfk;uashgkjasbg";

//     //   const realDecoded = await jwt.verify(realToken, process.env.SECRET_KEY);
//     const fakeDecoded = await jwt.verify(fakeToken, process.env.SECRET_KEY);

//     //   console.log("realDecoded:", realDecoded);

//     console.log("fakeDecoded:", fakeDecoded);
//   } catch (error) {
//     console.log("invalid token", error);
//   }
// };
// verify();
