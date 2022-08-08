const mongoose= require("mongoose"); 

const ticketSchema= mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId, 
        required: "true", 
        ref: "User"
    }, 
    product: {
        type: String, 
        required: ["true", "Please add a product"], 
        enum: ["iPhone", "Mac", "MacBook", "iPad"]
    }, 
    description: {
        type: String, 
        required: ["true", "Please add a description of the issue"]
    }, 
    status: {
        type: String, 
        enum: ["new", "open", "closed"], 
        default: "new"
    }
}, {
    timestamps: true
})

module.exports= mongoose.model("Ticket", ticketSchema); 