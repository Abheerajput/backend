

const {z} = require('zod');

const signupSchema = z.object({
    name: z.string({required_error:"Name is required"})
    .trim()
    .min(3,{message:"name must be at least of 3 char."}),

    email: z.string({required_error:"Email is required"})
    .trim()
    .email({message:"invalid email address"})
    .min(3,{ message:"email must be at least of 3 char."})
    .max(255,{message:"email not be more then 255 letters"}),

    phone: z.string({required_error:"phone number is required"})
    .trim()
    .min(10,{ message:"phonenumber must be at least of 10 char."})
    .max(13,{message:"number not more than 12"}),

    password: z.string({required_error:"password is requires"})
    .refine(value => value.length >= 8 && value.length <= 20, { message: "Password must be between 8 and 20 characters" }),
    


});
module.exports = signupSchema;