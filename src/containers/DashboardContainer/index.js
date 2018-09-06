import React, {Component} from 'react';
import {Platform, StyleSheet, Alert, View, Image, TouchableOpacity} from 'react-native';
import logo from '../../common/images/sample_logo.png'
import notificationIcon from '../../common/images/notification_white.png'
import DashboardComponent from '../../component/DashboardComponent'
class DashboardContainer extends Component {
    static navigationOptions = ({ navigation }) => ({
        headerTitle: (
            <Image
                source={logo}
                style={styles.headerButtonStyle}
                resizeMode={'contain'}
            />
        ),
        headerRight: (
            <TouchableOpacity style={styles.notificationbtStyle} onPress={ () => navigation.navigate('Notification')}>
                <Image
                    source={notificationIcon}
                    style={styles.notiImageStyle}
                    resizeMode={'contain'}
                />
            </TouchableOpacity>
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
           <DashboardComponent />
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

export default DashboardContainer;

