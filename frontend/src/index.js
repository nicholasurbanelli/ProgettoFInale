import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter} from 'react-router-dom';
import ChatProvider from "./Context/ChatProvider";


//chatprovider sarebbe quello che abbiamo creato noi in frontend -> src -> context
//qualsiasi state mettiamo nella nostra context api sarà accessibile dall'intera chat
ReactDOM.render(
  //<React.StrictMode>
    //<ChatProvider>
    //<ChakraProvider>
   // <App />
    //</ChakraProvider>
   // </ChatProvider>
 // </React.StrictMode>,

 
 <ChakraProvider>
    <BrowserRouter>
      <ChatProvider>
        <App />
      </ChatProvider>
    </BrowserRouter>
  </ChakraProvider>,
  document.getElementById('root')
    //root si trova in index.html e quindi tutto è renerizzato lì dentro nel body

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

