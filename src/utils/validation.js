import Joi from "joi";





 const movieValidationSchema=Joi.object({
    name: Joi.string().required().min(2).max(10),
    type: Joi.string().required().min(2).max(10),
 })


 export default movieValidationSchema;