import React from "react";
import "./css/App.css";
import Navbar from "./Navbar.js";
import AuthContext from "./auth-context.js";
import Login from "./Login.jsx";
import WishList from "./WishList.jsx";
import Register from "./Register.jsx";
import SearchResult from "./SearchResult.js";
import Review from "./Review.js";
import ProductDetail from "./ProductDetail.js";
import HomePage from "./HomePage.js";
import About from "./About.js";
import Contact from "./Contact.js";
import { connect } from "react-redux";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/js/dist/dropdown";
import "./css/App.css";
import "./css/animate.css";
import "./css/animate.min.css";
import "./css/bootstrap.min.css";
import "./css/fakeLoader.css";
import "./css/flexslider.css";
import "./css/font-awesome.min.css";
import "./css/jquery-ui.css";
import "./css/jquery-ui.min.css";
import "./css/jquery.fancybox.min.css";
import "./css/lightslider.min.css";
import "./css/megamenu.css";
import "./css/nouislider.min.css";
import "./css/owl.carousel.min.css";
import "./css/owl.theme.default.min.css";
import "./css/range.css";
import "./css/rangeslider.css";
import "./css/rateyo.css";
import "./css/style.css";
// import HeaderTop from './components/HeaderTop.js';
// import LoginUser from './components/LoginUser.js';

class App extends React.Component {
  useScript = (url, script) => {
    // const script = document.createElement("script");

    script.src = url;
    script.async = true;

    document.body.appendChild(script);
  };
  checkAuth(){
    var token =localStorage.getItem('token')
    var userID = localStorage.getItem('username')
    if (token&&userID){
      this.setState({ token: token, userID: userID });
    }
  }
  componentDidMount() {
    const script = document.createElement("script");
    this.useScript("./js/modernizr.js", script);
    this.useScript("./js/jquery.min.js", script);
    this.useScript("./js/jquery-ui.js", script);
    this.useScript("./js/popper.js", script);
    this.useScript("./js/bootstrap.min.js", script);
    this.useScript("./js/jquery.counterup.min.js", script);
    this.useScript("./js/jquery.nav.js", script);
    this.useScript("./js/jquery.rateyo.js", script);
    this.useScript("./js/jquery.scrollUp.min.js", script);
    this.useScript("./js/jquery.sticky.js", script);
    this.useScript("./js/mobile.js", script);
    this.useScript("./js/lightslider.min.js", script);
    this.useScript("./js/owl.carousel.min.js", script);
    this.useScript("./js/circle-progress.min.js", script);
    this.useScript("./js/waypoints.min.js", script);
    this.useScript("./js/simplePlayer.js", script);
    this.useScript("./js/main.js", script);
    this.checkAuth()
  }

  state = {
    token: null,
    userID: null,
  };
  login = (token, userID, tokenExpiration) => {
    this.setState({ token: token, userID: userID });
  };
  logout = () => {
    this.setState({ token: null, userID: null });
    localStorage.clear()
  };

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <React.Fragment>
            <AuthContext.Provider
              value={{
                token: this.state.token,
                userID: this.state.userID,
                login: this.login,
                logout: this.logout,
              }}
            >
              {/* <Navbar /> */}
              <Switch>
                <Route exact path="/" render={() => <HomePage dispatch={this.props.dispatch}/>} />
                <Route path="/Review" render={() => <Review />} />
                {/* <Route
                  path="/ProductDetail"
                  render={() => (
                    <ProductDetail
                      dispatch={this.props.dispatch}
                      products={this.props.products}
                    />
                  )}
                /> */}
                <Route //change this route to pass URL param :id to ProductDetail component from SearchResult comp
                  path="/ProductDetail/:id"
                  render={(props) => (
                    <ProductDetail
                      dispatch={this.props.dispatch}
                      products={this.props.products}
                      {...props}
                    />
                  )}
                />
                <Route path="/HomePage" render={() => <HomePage dispatch={this.props.dispatch}/>} />
                {this.state.token && (
                  <Redirect from="/login" to="/HomePage" exact />
                )}
                <Route path="/Login" render={() => <Login />} />
                <Route path="/WishList" render={() => <WishList dispatch={this.props.dispatch}/>} />
                <Route path="/Register" render={() => <Register />} />
                <Route path="/SearchResult" render={() => < SearchResult dispatch={this.props.dispatch}/>} />
                <Route path="/About" render={() => <About />} />
                <Route path="/Contact" render={() => <Contact />} />
              </Switch>
            </AuthContext.Provider>
          </React.Fragment>
        </BrowserRouter>
      </div>
    );
  }
}

function mapStateToProps(centralState) {
  return {
    products: centralState.products,
  };
}

export default connect(mapStateToProps)(App);
