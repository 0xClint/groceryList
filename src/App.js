import AddItems from "./pages/AddItems";
import Home from "./pages/Home";
import Header from "./components/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="" exact element={<Home />} />
        <Route path="/add-items" exact element={<AddItems />} />
      </Routes>
    </Router>
  );
}

export default App;
