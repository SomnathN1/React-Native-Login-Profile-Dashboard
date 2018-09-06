import React from 'react';
import { View, Text, StyleSheet, TextInput ,Image , SectionList ,Dimensions} from 'react-native';
const { width, height } = Dimensions.get('window');
import PropTypes from 'prop-types';
import logo from '../../common/images/sample_logo.png'
import noti from '../../common/images/notification_round_image.png'
const NotificationComponent = props => {

    /*render list Item*/
    const renderListItem = (item, index, section) => {

        return(
            <View  style={{height:60, width:'100%', backgroundColor:'grey'}}>
                <View style={{height:59.5, width:'100%', backgroundColor:'white', justifyContent:'center', paddingLeft:20, paddingRight:20, flexDirection:'row'}}>
                    <Image source={noti} style={{height:35, width:35, alignSelf:'center', marginLeft:16}}/>
                    <View style={{height:59.5, width:'100%', backgroundColor:'white', justifyContent:'center'}}>
                    <Text style={{color :'black', marginLeft:18, fontWeight:'600'}} key={index}>{item}</Text>
                    <Text style={{color :'grey', marginLeft:18, fontSize:12, marginTop:4}} key={index}>{item}</Text>
                     </View>
                </View>
            </View>
        )

    }

    /*render list section header*/
    const renderHeader = (title) => {
        return(
            <View style={{height:30, width:'100%', backgroundColor:'rgba(113,138,152,1)', justifyContent:'center'}}>
            <Text style={{color :'white', marginLeft:16}}>{title}</Text>
            </View>
        )

    }


    return (
        <View style={styles.container}>
            <SectionList
                renderItem={({item, index, section}) => renderListItem(item, index, section)}
                renderSectionHeader={({section: {title}}) => renderHeader(title)}
                sections={[
                    {title: 'Today', data: ['Payment successfully', 'Transfer successfully']},
                    {title: 'Yesterday', data: ['Transfer successfully', 'Attendance Marked']},
                    {title: '22 Jan 2018', data: ['Attendance Marked', 'Payment successfully']},
                ]}
                keyExtractor={(item, index) => item + index}
            />
        </View>
    );
}

NotificationComponent.propTypes = {
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        width:'100%'

    },
});

export default NotificationComponent;