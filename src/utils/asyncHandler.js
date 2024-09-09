
// 2nd approach (Advanced approach)
const asyncHandler =(requestHandler) => {
    return (req, res, next) =>{
        Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err))
    }
}



export { asyncHandler }












//How do we make an asyncHandler function
//const asyncHandler = () => {}
//const asyncHandler = (funtion) => () => {}
//const asyncHandler = (funtion) => async () => {}


// 1st approach (most used)
// const asyncHandler = (fn) => async (req, res, next) => { 
//     try {
//         await fn(req, res, next)
//     } catch (error) {
//         res.status(err.code || 500).json({
//             success: false, 
//             message: err.message
//         })
//     }
// }