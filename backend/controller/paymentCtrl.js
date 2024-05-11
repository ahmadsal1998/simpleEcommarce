/*onst Razorpay =require("razorpay");
const instance = new Razorpay({
    key_id: "",
    key_secret:"",
})

const checkout = async (req,res) => {
    const {amount} = req.body;
    const option = {
        amount: amount *100,
        currency: "INR"
    }
    const order = await instance.orders.create(option);
    res.json({
        success:true,
        order,
    })
}
/*
const paymentVerification = async (req,res) => {
   const { RazorpayOrderId, RazorpayPaymentId } = req.body;
   res.json({
    RazorpayOrderId,RazorpayPaymentId
   })
}

module.exports = {checkout,paymentVerification}
*/