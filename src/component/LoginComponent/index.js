import React from 'react';
import { View, Text, StyleSheet, TextInput ,Image , TouchableOpacity ,Dimensions} from 'react-native';
const { width, height } = Dimensions.get('window');
import PropTypes from 'prop-types';
import logo from '../../common/images/sample_logo.png'
const LoginComponent = props => (
    <View style={styles.container}>
        <View style={styles.parentViewStyle}>
            <Image source = {logo}
                   style = {styles.imageLogo} />
            <Text style={styles.textHeaderStyle}> LOGIN </Text>

            <Text style={styles.textStyle}> Email or Mobile </Text>
            <TextInput  style={styles.textboxfield}
                        underlineColorAndroid='transparent'
                        onChangeText={props.handleUsernameChange}
                        value={props.username}
                        placeholder = {'Username'}
                        placeholderTextColor={'rgba(221,221,221,1)'}
            />
            <Text style={[styles.textStyle, {marginTop: 20}] }> Password </Text>
            <View>
                <TextInput
                    secureTextEntry={props.showPassword}
                    style={styles.textboxfield}
                    underlineColorAndroid='transparent'
                    onChangeText={props.handlePasswordChange}
                    returnKeyType={'done'}
                    value={props.password}
                    placeholder = {'Password'}
                    placeholderTextColor={'rgba(221,221,221,1)'}
                />
            </View>
            <Text style={styles.textForgotPasswordStyle}> Forgot password? </Text>

            <TouchableOpacity style={styles.loginButtonStyle} onPress={props.onLoginPress}>
                <Text style={styles.loginButtonTextStyle}>Login</Text>
            </TouchableOpacity>

        </View>
    </View>
);

LoginComponent.propTypes = {
    handlePasswordChange : PropTypes.func,
    handleUsernameChange: PropTypes.func,
    showPassword: PropTypes.func,
    onLoginPress: PropTypes.func,
    showPassword: PropTypes.bool,
    username: PropTypes.string,
    password: PropTypes.string,
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#153048',
        height:height-20,

    },
    textButtonStyle:{
        width: width-60,
        height:40,
        color: '#ffffff',
        textAlign:'center',
        fontWeight: 'normal',
        padding:10,
    },
    textForgotPasswordStyle:{
        width: width-60,
        marginTop: 25,
        color: 'rgba(177, 205, 217,1)',
        textDecorationLine: 'underline',
        textAlign:'center',

    },
    textHeaderStyle: {
        width: width-60,
        height:30,
        marginTop: 30,
        textAlign: 'center',
        color: '#ffffff',
        // fontFamily: 'Lato',
        fontWeight: 'bold',
    },
    textStyle: {
        color: 'rgba(177, 205, 217,1)',
        textAlign:'left',
        marginBottom:7,
        marginTop: 10,
    },
    textboxfield: {
        borderRadius: 3,
        backgroundColor: 'rgba(7,75,104,1)',
        padding: 8,
        width: width-60,
        height:45,
        fontSize: 15,
        textAlign:'left',
        color: '#ffffff',

    },
    imageLogo: {
        alignSelf:'center',
        height:100,
        width:100,
        resizeMode: 'contain',
    },
    buttonContainer: {
        backgroundColor: '#EF4036',
        borderRadius: 5,
        padding: 10,
        marginTop: 30,
        shadowColor: '#000000',
        width: width-60,
        height:40,
        justifyContent: 'center',
        alignItems: 'center',
        shadowOffset: {
            width: 0,
            height: 3
        },
        shadowRadius: 3,
        shadowOpacity: 0.25
    },
    loginButtonStyle:{
        height: 50,
        width: width-60,
        backgroundColor:'rgba(234,33,45,1)',
        borderRadius:5,
        marginTop: 20,
        alignItems:'center',
        justifyContent:'center'
    },
    loginButtonTextStyle:{
        color:'white',
        fontSize:18,
        fontWeight:'500'
    },
    parentViewStyle:{
        marginTop: 60,
        flex:1
    }
});

export default LoginComponent;