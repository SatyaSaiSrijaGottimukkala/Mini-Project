import React ,{Component} from "react";
import {
    StyleSheet,Text, View, TouchableOpacity, TouchableHighlight, Image, Alert, TextInput, Button
} from "react-native";
import Icon from 'react-native-vector-icons/Feather'
import {NativeModules} from 'react-native';

export default class Login extends Component {
    
    constructor(props){
        super(props);
    }
    static navigationOptions={
        headerTitile:'login'
    }
    state={
        email:"Longstay",
        password:"longstay"
    }
    
    onLoginButton=()=>{
        console.log(".....you clicked login button.....");
        if(this.state.email==="Longstay"&& this.state.password==="longstay"){
            this.props.navigation.navigate('Tabs')
            //alert("navigating to home")
            this.setState({
                email:"",
                password:""
            });}
        else{
            alert("user name or password are incorrect if you dont remember reset by clicking forgot password ")
        }
        
    }

    onForgotButton=()=>{
            alert("Sent a verification e-mail")   
    }
    
    render(){
        return (
            <View style={styles.container}>
            <View><Text style={styles.text,{"fontFamily":"Montserrat-Bold","fontSize":25,"marginLeft":-57,"marginBottom":30}} >Login Account</Text></View>
            <View><Text style={styles.text,{"marginLeft":-125,"marginBottom":10}}
                    >Email</Text></View>
            <View style={styles.inputContainer}>
                <TextInput style={styles.inputs}
                        placeholder="email"
                        keyboardType="email-address"
                        underlineColorAndroid='transparent'
                        value={this.state.email}
                        onChangeText={(email) => this.setState({ email })} />
            </View>
            <Text style={styles.text,{"marginLeft":-187,"marginBottom":10}}
                    >Password</Text>
            <View style={styles.inputContainer}>
                <TextInput style={styles.inputs2}
                        placeholder="password"
                        secureTextEntry={true}
                        underlineColorAndroid='transparent'
                        value={this.state.password}
                        onChangeText={(password) => this.setState({ password })} />
                <Icon style={{"marginRight":14,"marginTop":13}} size={20}  name="eye-off"/>
            </View>
            
            <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={() => this.onLoginButton()}>
            <Text style={styles.loginText,{"fontFamily":"Montserrat-Bold","color": 'white'}}>LOGIN</Text>
            </TouchableHighlight>
            <TouchableHighlight style={{"fontSize":5}} onPress={() => this.onForgotButton()}>
            <Text style={{"fontFamily":"Montserrat-Bold",color:"#B2002D","fontSize":12}}>FORGOT PASSWORD</Text>
            </TouchableHighlight>
            

            </View>
        )
    }
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"#FFFFFF"
    },
    inputContainer:{
        borderColor: 'black',
        backgroundColor: '#FFFFFF',
        borderRadius: 30,
        borderWidth: 0.25,
        width: 250,
        height: 45,
        marginBottom: 20,
        flexDirection: 'row',
        alignItems: 'flex-start' 
    },
    inputs: {
        height: 45,
        marginLeft: 16,
        borderColor: 'blue',
        flex: 1,
    },
    inputs2: {
        height: 45,
        marginLeft: 16,
        borderColor: 'blue',
        flex: 1,
        justifyContent:'center',
        alignItems: 'center',
    },
    image:{
        width:60,
        height:30,
        marginLeft:15,
        justifyContent:'center'
    },
    buttonContainer: {
        height: 45,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
        width: 250,
        borderRadius: 30,

    },
    loginButton: {
        backgroundColor: "#B2002D",
    },
    loginText: {
        color: 'white',
    },
    img1:{
        color:'#b22222',
        marginLeft:2
    },
    text :{
        
        fontSize:15,
        marginLeft:-150,

    }
})