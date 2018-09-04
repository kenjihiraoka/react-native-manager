import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm'; 
import EmployeeList from './components/EmployeeList';
import EmployeeCreate from './components/EmployeeCreate';
import EmployeeEdit from './components/EmployeeEdit';

const RouterComponent = () => {
    return (
        <Router sceneStyle={{  paddingTop: 5 }}>
            <Scene key="root" hideNavBar sceneStyle={styles.titleStyle}>
                <Scene key="auth">
                    <Scene key="login" component={LoginForm} title="Login" />
                </Scene>

                <Scene key="main">
                    <Scene
                        rightTitle="Add"
                        onRight={() => Actions.employeeCreate() }
                        key="employeeList" 
                        component={EmployeeList} 
                        title="Employee List"
                        initial
                    />
                    <Scene 
                        key="employeeCreate"
                        component={EmployeeCreate}
                        title="Create Employee"
                    />
                    <Scene 
                        key="employeeEdit"
                        component={EmployeeEdit}
                        title="Edit Employee"
                    />
                </Scene>
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