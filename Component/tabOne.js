import React, { PureComponent } from 'react';
import { View, Text, StyleSheet, FlatList, SafeAreaView, TouchableOpacity } from 'react-native';
import ItemData from './ItemData';
import tabOneJsonData from '../Data/tabOne.json';

export default class tabOne extends PureComponent {
    renderItem = ({ item }) => {        
        return (
            <View style={{ height: 60, width: '100%' }}>
                <ItemData tab='BoardPaper' title ={item.name} data={tabOneJsonData} item={item} navigation={this.props.navigation} />
            </View>
        )
    }

    render() {        
        return (
            <View style={styles.container}>
                <SafeAreaView style={{ flex: 1, width: '100%' }}>
                    <FlatList
                        data={tabOneJsonData}
                        renderItem={this.renderItem}
                        keyExtractor={item => item.id.toString()}
                    />
                </SafeAreaView>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})