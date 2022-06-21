import React, { Component } from 'react';
import Header from './Header/Header';
import Logout from './Auth/Logout';
import Auth from './Auth/Auth';
import Photo from './Body/Photo';
import CategoryButton from './Header/Dropdown';
import Animal from './Body/Animal';
import Tech from './Body/Tech';
import Nature from './Body/Nature';
import { Route, Switch, Redirect } from 'react-router-dom';
import { authCheck } from '../redux/authActionCreators';
import { connect } from 'react-redux';


const mapStateToProps = state => {
    return {
        token: state.authentication.token,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        authCheck: () => dispatch(authCheck())
    }
}

class Main extends Component {
    componentDidMount() {
        this.props.authCheck()
    }
    render() {
        let routes = null;
        if (this.props.token === null) {
            routes = (
                <Switch>
                    <Route path="/login"> < Auth /> </Route>
                    <Redirect to="/login" />
                </Switch>
            )
        } else {
            routes = (
                <Switch>
                    <Route path="/logout"> < Logout /> </Route>
                    <Route exact path="/"> <Photo /> </Route>
                    <Route path="/categoryBtn"> < CategoryButton /> </Route>
                    <Route path="/animal"> < Animal />  </Route>
                    <Route path="/nature"> < Nature />  </Route>
                    <Route path="/tech"> < Tech />  </Route>
                    <Redirect to="/" />
                </Switch>
            )
        }
        return (
            <div>
                <Header />
                <div className="container">
                    {routes}
                </div>
            </div>
        )
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Main);