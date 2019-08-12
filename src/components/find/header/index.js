import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Image,
    Text,
    StatusBar,
    NativeModules
} from 'react-native';
let {StatusBarManager} = NativeModules

import IconFontAwesome from "react-native-vector-icons/FontAwesome5";
import IconFeather from "react-native-vector-icons/Feather";
import IconEvilIcons from "react-native-vector-icons/EvilIcons";

export default class extends Component {
    render() {
        return (
            <View style={s.con}>
                <StatusBar
                    translucent={true}
                    backgroundColor={'transparent'}
                />
                <View
                    style={s.head}
                >

                    <IconFontAwesome
                        name={'microphone-alt'}
                        color={'#fff'}
                        size={24}
                    />
                    <View
                        style={{
                            width:290,
                            height:30,
                            paddingHorizontal:5,
                            backgroundColor:'#fff6',
                            borderRadius:15,
                            flexDirection:'row',
                            alignItems:'center'
                        }}
                    >
                        <IconEvilIcons
                            name={'search'}
                            color={'#fefefe'}
                            size={24}
                        />
                        <Text
                            style={{
                                color:'#fefefe',
                                fontSize:14,
                                marginLeft:5
                            }}
                        >
                            Here With You -Asher
                        </Text>
                    </View>
                    <IconFeather
                        name={'menu'}
                        color={'#fff'}
                        size={24}
                    />
                </View>
            </View>
        )
    }
}

let s = StyleSheet.create({
    con:{
        height:90,
        backgroundColor:'#e44a31'
    },
    head:{
        height:50,
        marginTop:StatusBarManager.HEIGHT,
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center'
    },
    search:{

    },
    txt:{

    }
})