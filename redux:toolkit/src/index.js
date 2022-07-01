import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
// redux
import store from "./redux/store"; // import my store.js file
import { Provider } from "react-redux"; // import the provider from redux

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* wrapping our entire app in the redux provider and passing store as a prop */}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
