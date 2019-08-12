import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Image,
    Text,
    Dimensions
} from 'react-native';
import ScrollableTabView,{ScrollableTabBar} from 'react-native-scrollable-tab-view'
import IconAntDesign from "react-native-vector-icons/AntDesign";

import Head from './header'
import Personality from './personality'
import Station from './station'

let {width} = Dimensions.get('window')
export default class  extends Component {
    static navigationOptions = {
            tabBarLabel:'发现',
            tabBarIcon({focused}){
                return(
                    <IconAntDesign
                        name={'find'}
                        size={18}
                        color={focused?'#e84f35':'#9a9a9a'}
                    />
                )
            }
    }

    render() {
        return (
            <View>
                <Head></Head>
                <View style={{
                    height:500,
                    backgroundColor:'#f60'
                }}>
                    <View style={{
                        position:'absolute',
                        width,
                        height:168,
                        backgroundColor:'#e44a31'

                    }} />
                    <ScrollableTabView
                        tabBarActiveTextColor={'#fff'}
                        tabBarInactiveTextColor={'#fff'}
                        tabBarUnderlineStyle={{
                            height:3,
                            backgroundColor:'#fff',
                            borderRadius:2,
                        }}
                        renderTabBar={()=>(
                            <ScrollableTabBar
                                style={{
                                    borderWidth:0
                                }}
                            />
                        )}
                    >
                        <Personality tabLabel="个性推荐"/>
                        <Station tabLabel="主播电台" />
                    </ScrollableTabView>
                </View>
            </View>
        )
    }
}

let s = StyleSheet.create({

})