import React, { PureComponent } from 'react';
import { View, Text, StyleSheet, FlatList, SafeAreaView, TouchableOpacity } from 'react-native';
import ItemData from './ItemData';
import tabThreeJsonData from '../Data/tabThree.json';

export default class tabTree extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    renderItem = ({ item }) => {
        return (
            <View style={{ height: 60, width: '100%' }}>
                <ItemData title ={item.name} data={tabThreeJsonData} item={item} navigation={this.props.navigation} />
            </View>
        )
    }

    render() {
        return (
            <View style={styles.container}>
                <SafeAreaView style={{ flex: 1, width: '100%' }}>
                    <FlatList
                        data={tabThreeJsonData}
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
