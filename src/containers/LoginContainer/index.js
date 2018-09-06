import React, {Component} from 'react';
import {Platform, StyleSheet, Alert, View} from 'react-native';
import LoginComponent from '../../component/LoginComponent'
class LoginContainer extends Component {
    static navigationOptions = {
        header: null,
    }
    constructor(props) {
        super(props)
        this.state = {
            username : '',
            password : '' ,
            user_name : '',
            showPassword: true,
        }
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleUsernameChange = this.handleUsernameChange.bind(this);
        this.showPassword = this.showPassword.bind(this);
        this.onLoginPress = this.onLoginPress.bind(this);
    }

    handlePasswordChange(text) {
        this.setState({ password: text });
    }

    handleUsernameChange(text) {
        this.setState({ username: text });
    }

    showPassword() {
        const showPassword = !this.state.showPassword
        this.setState({ showPassword });
    }

    onLoginPress() {
        if(!this.state.username.trim()) {
            Alert.alert("Please enter user name");
            return
        }

        if(!this.state.password.trim()) {
            Alert.alert("Please enter password");
            return
        }
        this.props.navigation.navigate('Dashboard')
    }

    componentDidMount() {

    }

    render() {
        return (
            <LoginComponent
                handlePasswordChange={this.handlePasswordChange}
                handleUsernameChange={this.handleUsernameChange}
                showPassword={this.showPassword}
                onLoginPress={this.onLoginPress}
                showPassword={this.state.showPassword}
                username={this.state.username}
                password={this.state.password}
            />
        );
    }

}

export default LoginContainer;


