import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Login-Signup/Components/Login";
import Dashboard from "./Login-Signup/Components/Dashboard/Dashboard";
import Scout from "./Login-Signup/Components/Pages/Scout/Scout";
import Events from "./Login-Signup/Components/Pages/Events/Events";
import CohortApplications from "./Login-Signup/Components/Pages/CohortApplications/CohortApplications";
import LiveDeals from "./Login-Signup/Components/Pages/LiveDeals/LiveDeals";
import Team from "./Login-Signup/Components/Pages/Team/Team";
import Notifications from "./Login-Signup/Components/Pages/Notifications/Notifications";
import Portfolio from "./Login-Signup/Components/Pages/Portfolio/Portfolio";
import Profile from "./Login-Signup/Components/Pages/Profile/Profile";


const App = () => {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Login}/>
        <Route path="/dashboard" Component={Dashboard}/>
        <Route path="/scout" Component={Scout}/>
        <Route path="/events" Component={Events}/>
        <Route path="/cohort-applications" Component={CohortApplications}/>
        <Route path="/live-deals" Component={LiveDeals}/>
        <Route path="/team" Component={Team}/>
        <Route path="/portfolio" Component={Portfolio}/>
        <Route path="/notifications" Component={Notifications}/>
        <Route path="/user-Profile" Component={Profile}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;