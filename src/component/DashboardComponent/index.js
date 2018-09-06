import React from 'react';
import { View, Text, StyleSheet, TextInput ,Image , TouchableOpacity ,Dimensions} from 'react-native';
const { width, height } = Dimensions.get('window');
import PropTypes from 'prop-types';
import profile from '../../common/images/profile_image.jpg'
import email from '../../common/images/email_profile.png'
import phone from '../../common/images/phone_profile.png'
import birthday from '../../common/images/birthday_profile.png'
import anniversary from '../../common/images/aniversary_profile.png'
import  profilePencil from '../../common/images/edit_profile_pencil.png'

const DashboardComponent = props => (
   <View style={{flex:1,  backgroundColor: 'white',}}>
       <View style={styles.imageSupprtViewStyle}>

           <View style={styles.imageParentStyle}/>
           <View style={styles.nameParentStyle}>
               <Text style={styles.nameTextStyle}>Sally Smith</Text>
           </View>
           <Image style={styles.profileImageStyle} source={profile}/>
       </View>

       <View style={styles.supportView}/>

       <View style={styles.buttonParentStyles}>
           <View style={styles.buttonSubParentStyle}></View>
           <View style={{flex: 1}}>
               <TouchableOpacity style={styles.profileFieldButtonStyle}>
                   <Image style={styles.profileFieldTextStyle} source={email} resizeMode={'contain'}/>
                   <Text style={{marginLeft: '7%'}}>test@gmail.com</Text>
               </TouchableOpacity>

               <TouchableOpacity style={styles.profileFieldButtonStyle}>
                   <Image style={styles.profileFieldTextStyle} source={phone} resizeMode={'contain'}/>
                   <Text style={{marginLeft: '7%'}}>6732476723</Text>
               </TouchableOpacity>

               <TouchableOpacity style={styles.profileFieldButtonStyle}>
                   <Image style={styles.profileFieldTextStyle} source={birthday} resizeMode={'contain'}/>
                   <Text style={{marginLeft: '7%'}}> 21 Jan 1984</Text>
               </TouchableOpacity>

               <TouchableOpacity style={styles.profileFieldButtonStyle}>
                   <Image style={styles.profileFieldTextStyle} source={anniversary} resizeMode={'contain'}/>
                   <Text style={{marginLeft: '7%'}}>21 Jan 1984</Text>
               </TouchableOpacity>


               <TouchableOpacity style={styles.editButtonStyle} onPress={props.onEditProfile}>
                   <Image style={styles.editProfileImageStyle} source={profilePencil}/>
               </TouchableOpacity>

           </View>
           <View style={styles.dividerStyle}></View>
       </View>

       <TouchableOpacity style={styles.logoutButtonStyle} onPress={props.onLoginPress}>
           <Text style={styles.logoutButtonTextStyle}>Logout</Text>
       </TouchableOpacity>
   </View>
);

DashboardComponent.propTypes = {
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
    logoutButtonStyle: {
        height: 50,
        width: width-60,
        alignSelf:'center',
        backgroundColor:'rgba(234,33,45,1)',
        borderRadius:5,
        marginTop: 60,
        alignItems:'center',
        justifyContent:'center'
    },
    logoutButtonTextStyle:{
        color:'white',
        fontSize:18,
        fontWeight:'500'
    },
    profileFieldButtonStyle:{
        height: 45,
        width: '100%',
        alignItems: 'center',
        flexDirection: 'row'
    },
    profileFieldTextStyle:{
        height: 22,
        width: 22,
        marginLeft: '20%'
    },
    editButtonStyle:{
        height: 50,
        width: 50,
        borderRadius: 25,
        backgroundColor: '#03334F',
        position: 'absolute',
        marginLeft: width - 60,
        marginTop: 120,
        alignItems:'center',
        justifyContent:'center'
    },
    editProfileImageStyle:{
        height: 20,
        width: 20,
    },
    dividerStyle:{
        height: 1,
        width: '100%',
        backgroundColor: 'rgba(219,219,219,1)',
    },
    imageSupprtViewStyle: {
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        height: 200
    },
    profileImageStyle:{
        height: 120,
        width: 120,
        borderRadius: 60,
        position: 'absolute'
    },
    nameTextStyle:{
        width: '100%',
        textAlign: 'center',
        fontSize: 22
    },
    nameParentStyle:{
        height: 100,
        width,
        alignItems: 'flex-end',
        flexDirection: 'row'
    },
    imageParentStyle:{
        height: 100,
        width,
        backgroundColor: '#03334F'
    },
    supportView:{
        height: 50,
        width: '100%',
        backgroundColor:'white'
    },
    buttonParentStyles: {
        height: 182,
        width: '100%',
        backgroundColor: 'rgba(237,237,237,1)'
    },
    buttonSubParentStyle: {
        height: 1,
        width: '100%',
        backgroundColor: 'rgba(219,219,219,1)'
    }

});

export default DashboardComponent;