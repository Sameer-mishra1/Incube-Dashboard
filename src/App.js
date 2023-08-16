import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../src/Components/Pages/Login/Login";
import Dashboard from '../src/Components/Pages/Dashboard/Dashboard'
import Scout from "../src/Components/Pages/Scout/Scout";
import Events from "../src/Components/Pages/Events/Events";
import CohortApplications from "../src/Components/Pages/CohortApplications/CohortApplications";
import LiveDeals from "../src/Components/Pages/LiveDeals/LiveDeals";
import Team from "../src/Components/Pages/Team/Team";
import Notifications from "../src/Components/Pages/Notifications/Notifications";
import Portfolio from "../src/Components/Pages/Portfolio/Portfolio";
import Profile from "../src/Components/Pages/Profile/Profile";


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
        <Route path="/collapse"/>
        <Route path="/user-Profile" Component={Profile}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;