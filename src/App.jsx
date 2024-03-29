import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import Todo from "./components/todo";
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <Provider store={store}>
       <Todo /> 
    </Provider>
  );
};
export default App;