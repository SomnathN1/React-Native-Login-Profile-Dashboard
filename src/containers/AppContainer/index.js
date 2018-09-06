import React, { Component } from 'react';
import { View } from 'react-native';


import RootNavigation from '../../RootNavigation'

class AppContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View style={{ flex: 1, opacity: 1 }}>
                <RootNavigation/>
            </View>
    )
    }

}

export default AppContainer;