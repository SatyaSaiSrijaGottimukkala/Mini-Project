import { alternatives } from "joi";
import React ,{Component} from "react";
import {
    StyleSheet,Text, View, TouchableOpacity, TouchableHighlight, Image, Alert, TextInput, Button
} from "react-native";

export default class Login extends Component {
    constructor(props){
        super(props);
    }
    static navigationOptions={
        headerTitile:'login'
    }
    state={
        email:"",
        password:""
    }

    onLoginButton=()=>{
        console.log(".....you clicked login button.....");
        if(this.state.email==="Longstay"&& this.state.password==="longstay"){
            this.props.navigation.navigate('Home')
            //alert("navigating to home")
            this.setState({
                email:"",
                password:""
            });}
        else{
            alert("user name or password are incorrect if you dont remember reset by clicking forgot password ")
        }
        
    }

    
    render(){
        return (
            <View style={styles.container}>
            <Text style={styles.text,{"fontSize":30,"marginLeft":-50}} >Login Account</Text>
            <Text style={styles.text,{"marginLeft":-200}}
                    >email</Text>
            <View style={styles.inputContainer}>
    
                <TextInput style={styles.inputs}
                        placeholder="email"
                        keyboardType="email-address"
                        underlineColorAndroid='transparent'
                        value={this.state.email}
                        onChangeText={(email) => this.setState({ email })} />
            </View>
            <Text style={styles.text,{"marginLeft":-170}}
                    >password</Text>
            <View style={styles.inputContainer}>
            <Image style={styles.inputIcon}
                        source={{ uri: 'file:///Users/a845604yara.com/Downloads/eye-off.svg' }} />
                <TextInput style={styles.inputs}
                        placeholder="password"
                        secureTextEntry={true}
                        underlineColorAndroid='transparent'
                        value={this.state.password}
                        onChangeText={(password) => this.setState({ password })} />
            </View>
            
            <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={() => this.onLoginButton()}>
            <Text style={styles.loginText}>Login</Text>
            </TouchableHighlight>
            <Button  color="#8B0000" title="FORGOT PASSWORD" ></Button>

            </View>
        )
    }
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"#DCDCDC"
    },
    inputContainer:{
        borderBottomColor: '#F5FCFF',
        backgroundColor: '#FFFFFF',
        borderRadius: 30,
        borderBottomWidth: 1,
        width: 250,
        height: 45,
        marginBottom: 20,
        flexDirection: 'column',
        alignItems: 'flex-start' 
    },
    inputs: {
        height: 45,
        marginLeft: 16,
        borderBottomColor: '#FFFFFF',
        flex: 1,
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
        backgroundColor: "#8B0000",
    },
    loginText: {
        color: 'white',
    },
    text :{
        fontSize:15,
        marginLeft:-150,

    }
})