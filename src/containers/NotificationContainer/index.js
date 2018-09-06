import React, {Component} from 'react';
import {Platform, StyleSheet, Alert, View, Image, TouchableOpacity} from 'react-native';
import logo from '../../common/images/sample_logo.png'
import NotificationComponent from '../../component/NotificationComponent'
class NotificationContainer extends Component {
    static navigationOptions = ({ navigation }) => ({
        headerTitle: (
            <Image
                source={logo}
                style={styles.headerButtonStyle}
                resizeMode={'contain'}
            />
        ),
        headerStyle: {
            backgroundColor: '#03334F',
            borderBottomWidth: 0,
            shadowOpacity: 0,
            shadowOffset: {
                height: 0,
            },
            shadowRadius: 0,
            elevation: 0,
        },
        headerTitleStyle: { alignSelf: 'center' },
    });
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <NotificationComponent />
        );
    }

}

const styles = StyleSheet.create({
    notificationbtStyle: {
        flexDirection: 'row',
        paddingRight: 20
    },
    headerButtonStyle: {
        height: 30,
        alignSelf: 'center',
    },
    notiImageStyle:{
        width: 24,
        height: 24,
    }

});


export default NotificationContainer;
