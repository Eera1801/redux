import Home from "./components/Home";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import SignUp from "./components/sign-up";
import SignIn from "./components/Sign-in";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={ <SignUp />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Sign-in" element={<SignIn />} />
      </Routes>
    </Router>
  );
}

export default App;
