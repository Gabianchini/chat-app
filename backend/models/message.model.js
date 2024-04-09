import mongoose from "mongoose"

const messageSchema = new mongoose.Schema({
    senderId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User", //referencia ao modelo user, pois o sender id é basicamene o id de um usuario que esta mandando a mensagem
        required: true
    },
    receiverId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User", //referencia ao modelo user, pois o receiver id é basicamene o id de um usuario que esta recebendo a mensagem
        required: true
    },
    message:{
        type: String,
        required: true
    }
    //timestamps: createdAt, updatedAt fields will be created automatically in the messages
},{timestamps: true});

const Message = mongoose.model("Message", messageSchema);

export default Message;