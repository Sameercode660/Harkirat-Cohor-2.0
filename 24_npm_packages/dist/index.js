"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userInputSchma = void 0;
const zod_1 = require("zod");
exports.userInputSchma = zod_1.z.object({
    name: zod_1.z.string(),
    email: zod_1.z.string().email(),
    age: zod_1.z.number().min(0)
});
