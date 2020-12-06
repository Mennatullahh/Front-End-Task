
import './App.css';
import AppData from './components/AppData'
import ApprovalMenna from './components/ApplicantData'
import Loginform from './components/loginform'
import MennaApproval from './components/reviewAndRecommendation'
import ResearchOutputt from './components/researchOutput'
import Header from './components/Header'
import Dashh from './components/Dash'
import TB from './components/Tentativebudget'
import CI from './components/ConferenceInformation'
import Approval from './components/ApprovalPage'
import BusApproval from './components/BusLeave&Approval'
import DC from './components/DeanCheckList'
import SR from './components/ٍSurvey'
import CR from './components/CR'
import Personal from './components/Personal'
import Statue from './components/Status'
import { BrowserRouter, Route, Switch } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Route path="/dash">
        <Dashh></Dashh>
      </Route>
      <Route path="/status">
        <Statue></Statue>
      </Route>
      <Route path="/personal">
        <Personal></Personal>
      </Route>
      <Route path="/CR">
        <CR></CR>
      </Route>
      <Route path="/Approvalapp">
        <ApprovalMenna></ApprovalMenna>
      </Route>
      <Route path="/Reviewww">
        <MennaApproval></MennaApproval>
      </Route>
      <Route path="/TB">
        <TB></TB>
      </Route>
      <Route path="/CI">
        <CI></CI>
      </Route>
      <Route path="/AP">
        <Approval></Approval>
      </Route>
      <Route path="/ResearchOutput">
        <ResearchOutputt></ResearchOutputt>
      </Route>
      <Route path="/AD">
        <AppData></AppData>
      </Route>
      <Route path="/BA">
        <BusApproval></BusApproval>
      </Route>
      <Route path="/DC">
        <DC></DC>
      </Route>
      <Route path="/SR">
        <SR></SR>
      </Route>
        <Switch>
        <Route path="/" exact={true}>
          <Loginform/> 
        </Route>
        </Switch>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
