// App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import News from "./Components/News";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<News category="gb" />} />
          <Route path="/india" element={<News category="in" />} />
          <Route path="/australia" element={<News category="au" />} />
          <Route path="/usa" element={<News category="us" />} />
          <Route path="/france" element={<News category="fr" />} />
          <Route path="/israel" element={<News category="il" />} />
          <Route path="/russia" element={<News category="ru" />} />
          <Route path="/japan" element={<News category="jp" />} />
          <Route path="/ukraine" element={<News category="ua" />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
