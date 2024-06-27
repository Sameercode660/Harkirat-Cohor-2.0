const express = require("express");
const zod = require('zod')
const app = express();
app.use(express.json());
const nameSchema = zod.string()
const rollNumerSchema = zod.number()
const collegeSchema = zod.string()


// let numberOfRequest = 0;

// function countNumberOfRequest(req, res, next) {
//   if (numberOfRequest > 10) {
//     return res.status(401).json({
//       message: "Number of request exceeded than the specified limit",
//     });
//   }
//   numberOfRequest++;
//   console.log(numberOfRequest);
//   next();
// }

// app.get("/request", countNumberOfRequest, function (req, res) {

//   const a = array
//   res.status(200).json({
//     message: "Successfully counted the number of request",
//   });
// });


app.post('/request', function(req, res) {
    
    const {username, rollNumber, college} = req.body

    console.log(username, rollNumber, college)

    const usernameValidation = nameSchema.safeParse(username)
    const rollNumberValidation = rollNumerSchema.safeParse(rollNumber)
    const collegeValidation = collegeSchema.safeParse(college)

    if(!usernameValidation.success || !rollNumberValidation.success || !collegeValidation.success) {
        return res.status(411).json({
            message: "Please entere correct inputs"
        })
    }

    res.status(200).json({
        message: "Inputs are authenticated"
    })
})


app.listen(3000, () => {
  console.log("server is listening on port 3000");
});
