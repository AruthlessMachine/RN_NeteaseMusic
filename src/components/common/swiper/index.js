import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';

import Swiper from 'react-native-swiper';


export default class extends Component {
    render(){
        return (
            <View style={{
                height:156,
                margin:6,
                overflow:'hidden',
                borderRadius:5
            }}>
                <Swiper style={s.wrapper}
                    autoplay={true}
                    activeDotColor={'#e44a31'}
                    dotStyle={{
                        width:4,
                        height:4,
                        bottom:-16
                    }}
                    activeDotStyle={{
                        width:5,
                        height:5,
                        bottom:-16
                    }}
                >
                    <View style={s.slide1}>
                        <Text style={s.text}>Hello Swiper</Text>
                    </View>
                    <View style={s.slide2}>
                        <Text style={s.text}>Beautiful</Text>
                    </View>
                    <View style={s.slide3}>
                        <Text style={s.text}>And simple</Text>
                    </View>
                </Swiper>
            </View>
        );
    }
}

const s = StyleSheet.create({
    wrapper: {

    },
    slide1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#9DD6EB',
    },
    slide2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#97CAE5',
    },
    slide3: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#92BBD9',
    },
    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold',
    }
})
