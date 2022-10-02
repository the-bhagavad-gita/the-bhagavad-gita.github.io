import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./home/HomePage";
import AboutPage from "./about/AboutPage";
import Header from "./common/Header";
import Footer from "./common/Footer";
import PageNotFound from "./PageNotFound";
import ManageCardPage from './cards/ManageCardPage';
import CardPage from "./cards/CardPage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import GroupsPage from "./groups/GroupsPage";
import ManageGroupPage from './groups/ManageGroupPage';
import CardView from "./cardview/cardview";
// import AuthContext from "./AuthContext";
// import Auth from './auth/Auth';
import Callback from './Callback';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      // auth: new Auth(this.props.history),

    };
  }

  render() {
    // const { auth } = this.state;
    return (

      <div className="dashboard-header ">
        <Header />
        <Router basename={process.env.PUBLIC_URL}>
          <Switch>
            <Route exact path="/" component={HomePage} />
            {/* <Route exact path="/home" component={HomePage} /> */}
            <Route path="/callback" render={props => <Callback   {...props} />} />
            <Route exact path="/about" component={AboutPage} />
            <Route exact path="/groups" component={GroupsPage} />
            <Route exact path="/group/:id" component={ManageGroupPage} />
            <Route exact path="/group" component={ManageGroupPage} />
            <Route exact path="/cards" component={CardPage} />
            <Route exact path="/card/:id" component={ManageCardPage} />
            <Route exact path="/card" component={ManageCardPage} />
            <Route exact path="/cardview/:id" component={CardView} />
            <Route exact component={PageNotFound} />
          </Switch>
        </Router>
        <Footer />
        <ToastContainer autoClose={3000} hideProgressBar />
      </div>

    );
  }
}

export default App;
