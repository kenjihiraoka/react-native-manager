import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import firebase from 'firebase';
import LoginForm from './components/LoginForm';

class App extends Component {
    componentWillMount() {
        const config = {
            apiKey: "AIzaSyAL7M-Nd6AL6MKOrTVc3kwkjGUPS7Btxe4",
            authDomain: "manager-588ed.firebaseapp.com",
            databaseURL: "https://manager-588ed.firebaseio.com",
            projectId: "manager-588ed",
            storageBucket: "manager-588ed.appspot.com",
            messagingSenderId: "43681844202"
        }
        firebase.initializeApp(config);        
    }

    render() {
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
        
        return (
            <Provider store={store}>
                <LoginForm />
            </Provider>
        );
    }
}

export default App;