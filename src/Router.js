import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import LoginForm from './components/LoginForm'; 
import EmplyeeList from './components/EmployeeList';

const RouterComponent = () => {
    return (
        <Router>
            <Scene key="root" style={styles.titleStyle}>
                <Scene key="login" component={LoginForm} title="Login" />
                <Scene key="employeeList" component={EmplyeeList} title="Employee List" initial />
            </Scene>
        </Router>
    );
};

const styles = {
    titleStyle: {
        flex: 1,
        textAlign: 'center',
        fontSize: 50
    }
}

export default RouterComponent;