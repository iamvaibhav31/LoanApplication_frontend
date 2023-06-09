import logo from "./logo.svg";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import {
  Login,
  Dashboard,
  Loandetails,
  Register,
  JourneySplash,
  JourneyWelcome,
  JourneyBasicInfo1,
  JourneyBasicInfo2,
  JourneyLoanOffer,
  JournyLoanAggreement,
  JourneyApproved,
  JourneyRejected,
} from "./pages";
import Provider from "./provider/Provider";
import ProtectedRoute from "./utils/ProtectedRoutes";
import { parseCookies } from "nookies";
function App() {
  const cookies = parseCookies();
  const isAuth = cookies["authToken"];
  return (
    <div className="App">
      <BrowserRouter>
        <Provider>
          <Routes>
            <ProtectedRoute
              path="/dashboard"
              component={<Dashboard />}
              isAuth={isAuth}
            />
            {/* <Route exact path="/" element={} /> */}
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/register" element={<Register />} />
            <Route exact path="/details" element={<Loandetails />} />
            <Route exact path="/journey/splash" element={<JourneySplash />} />
            <Route exact path="/journey/Welcome" element={<JourneyWelcome />} />
            <Route exact path="/journey" element={<JourneyBasicInfo1 />} />
            <Route exact path="/journey/Info" element={<JourneyBasicInfo2 />} />
            <Route exact path="/journey/offer" element={<JourneyLoanOffer />} />
            <Route
              exact
              path="/journey/agreement"
              element={<JournyLoanAggreement />}
            />
            <Route
              exact
              path="/journey/approved"
              element={<JourneyApproved />}
            />
            <Route
              exact
              path="/journey/rejected"
              element={<JourneyRejected />}
            />
          </Routes>
        </Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
