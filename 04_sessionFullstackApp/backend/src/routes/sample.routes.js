import { Router } from "express";
import { sampleFunction } from "../controllers/sample.controller.js";

const sampleRouter = Router()

sampleRouter.route('/sample').post(sampleFunction)
sampleRouter.route('/user').get(function(req, res) {
    res.json({
        message: 'Successfully reached to the contronller'
    })
})
export {
    sampleRouter
}