import React, { PureComponent } from 'react';
import { View, Text, StyleSheet, FlatList, SafeAreaView, TouchableOpacity } from 'react-native';
import ItemData from './ItemData';
import tabTwoJsonData from '../Data/tabTwo.json';

export default class tabTwo extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    renderItem = ({ item }) => {
        return (
            <View style={{ height: 60, width: '100%' }}>
                <ItemData title ={item.name} data={tabTwoJsonData} item={item} navigation={this.props.navigation} />
            </View>
        )
    }

    render() {
        return (
            <View style={styles.container}>
                <SafeAreaView style={{ flex: 1, width: '100%' }}>
                    <FlatList
                        data={tabTwoJsonData}
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
