import React from 'react';
import {Text,View,TouchableOpacity,StyleSheet,Image} from  'react-native';
import * as Permissions from 'expo-permissions';
import { BarCodeScanner } from 'expo-barcode-scanner';

export default class ScanScreen extends React.Component{
    constructor(){
        super()
        this.state={
            hasCameraPermission: null,
            scanned: false,
            scannedData : '',
            buttonState : 'normal',
        }
    }

    getCameraPermission = async() => {

        const {status} = await Permissions.askAsync(Permissions.CAMERA);
        this.setState({
            hasCameraPermission:status === "granted",
        })

    }

    handleBarCodeScanner =  async( {type,data} ) =>{

        this.setState({
            scanned:true,
            scannedData:data,
            buttonState: 'normal', 
        })

    }

    render(){
        const hasCameraPermission = this.state.hasCameraPermission;
        const scanned = this.state.scanned;
        const buttonState = this.state.buttonState;
        if(buttonState === "clicked" && hasCameraPermission ){
            return (
                <BarCodeScanner
                onBarCodeScanned={
                    scanned? undefined : this.handleBarCodeScan
                } style={StyleSheet.absoluteFillObject}/>
            )
        }else if(buttonState === "normal" ){
        
                return(
                    <View style={styles.container}>
                        <Text style={styles.dt}>{
                            hasCameraPermission === true ?this.state.scannedData
                            :"Request Camera Permission"
                        }</Text>
                        <TouchableOpacity onPress={this.getCameraPermission } 
                        style={styles.sb}><Text style={styles.dt}>Scan Bar Code
                        </Text></TouchableOpacity>
                    </View>
                )
        }
    }

}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignContent:"center",
    },

    dt:{
        fontSize:15,
        textDecoration:"underline",
    },

    sb:{
        backgroundColor:'green',
        padding:10,
        margin:10,
    }
})
