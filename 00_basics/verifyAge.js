/**
 * 
 * you are given some data, in which you are given a list of student of age where you have to check whether all students are above 18 or not, if anyone student is less than 18 then do something otherwise do something
 * 
 * 
 * 
 */

const studentAge = [18, 19, 29, 29, 38, 12, 33, 43]

const eligibility = studentAge.every((age) => age >= 18)

console.log(eligibility)