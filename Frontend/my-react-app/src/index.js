// index.js
import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ChakraProvider } from "@chakra-ui/react";
import ChatProvider from "./Context/ChatProvider";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const root = createRoot(document.getElementById("root"));

root.render(
  <ChakraProvider>
    <BrowserRouter>
      <ChatProvider>
        <Routes>
          <Route path="*" element={<App />} />
        </Routes>
      </ChatProvider>
    </BrowserRouter>
  </ChakraProvider>
);

reportWebVitals();
