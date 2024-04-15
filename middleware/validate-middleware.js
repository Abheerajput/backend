
  const validate = (schema) => async(req,res,next) => {
try{
const parseBody = await schema.parseAsync (req.body)
req.body =parseBody;

next();
}catch (err){
    const message = "fill all the input properly"
    const extraDetails = err.errors[0].message;
    console.log(message);
    const status = 422;
// res.status(400).json({msg:message})
const error ={
  status,
  message,
  extraDetails
};
next(error);
}
  }



module.exports = validate;