const mongoose = require('mongoose')


const chatModel = mongoose.Schema(
  {   
    chatName: { type: String, trim: true },
    isGroupChat: { type: Boolean, default: false },
    users: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],  //contiene l'id del prticolare utente
    latestMessage: {
      type: mongoose.Schema.Types.ObjectId,  //mostra l'ultimo messaggio sulla preview della chat
      ref: "Message",
    },
    groupAdmin: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
},
{ timestamps: true }
);

const Chat = mongoose.model("Chat", chatModel);

module.exports = Chat;