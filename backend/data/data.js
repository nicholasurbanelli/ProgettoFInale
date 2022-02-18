const chats = [
  {
    isGroupChat: false,
    users: [
      {
        name: "Mattia",
        email: "mattia@example.com",
      },
      {
        name: "Pacca",
        email: "pacca@example.com",
      },
    ],
    _id: "617a077e18c25468bc7c4dd4",
    chatName: "Mattia",
  },
  {
    isGroupChat: false,
    users: [
      {
        name: "Guest User",
        email: "guest@example.com",
      },
      {
        name: "Pacca",
        email: "pacca@example.com",
      },
    ],
    _id: "617a077e18c25468b27c4dd4",
    chatName: "Guest User",
  },
  {
    isGroupChat: false,
    users: [
      {
        name: "Lorenzo",
        email: "lorenzo@example.com",
      },
      {
        name: "Pacca",
        email: "pacca@example.com",
      },
    ],
    _id: "617a077e18c2d468bc7c4dd4",
    chatName: "Lorenzo",
  },
  {
    isGroupChat: true,
    users: [
      {
        name: "Mattia",
        email: "mattia@example.com",
      },
      {
        name: "Pacca",
        email: "pacca@example.com",
      },
      {
        name: "Guest User",
        email: "guest@example.com",
      },
    ],
    _id: "617a518c4081150716472c78",
    chatName: "Friends",
    groupAdmin: {
      name: "Guest User",
      email: "guest@example.com",
    },
  },
  {
    isGroupChat: false,
    users: [
      {
        name: "Fabio",
        email: "fabio@example.com",
      },
      {
        name: "Pacca",
        email: "pacca@example.com",
      },
    ],
    _id: "617a077e18c25468bc7cfdd4",
    chatName: "Fabio",
  },
  {
    isGroupChat: true,
    users: [
      {
        name: "Mattia",
        email: "mattia@example.com",
      },
      {
        name: "Pacca",
        email: "pacca@example.com",
      },
      {
        name: "Guest User",
        email: "guest@example.com",
      },
    ],
    _id: "617a518c4081150016472c78",
    chatName: "Chill Zone",
    groupAdmin: {
      name: "Guest User",
      email: "guest@example.com",
    },
  },
];


 module.exports= { chats };

