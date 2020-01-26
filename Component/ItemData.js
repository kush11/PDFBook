import React from 'react';
import { Text, View, TouchableOpacity, Dimensions, StyleSheet, FlatList } from 'react-native';

const ItemData = ({ data, item, navigation, title }) => {
    // console.log(item.samplePaper);
    return (
        <View style={{ flex: 1, padding: 5 }}>
            <TouchableOpacity style={styles.elevation}
                onPress={() =>
                // console.log('pressed', item.samplePaper)
                {
                    navigation.navigate('ContentPage', {
                        datas: data,
                        item: item.samplePaper,
                        title,
                    });
                }

                }
            >
                <View style={{
                    flex: 2,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <View style={styles.circle}>
                        <Text>{item.id}</Text>
                    </View>
                </View>
                <View style={{ flex: 7, justifyContent: 'center', padding: 10 }}>
                    <Text>{item.name}</Text>
                </View>

            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    elevation: {
        flex: 1,
        flexDirection: 'row',
        borderWidth: 1,
        // marginTop: 10,
        elevation: 5,
        borderWidth: 0.15,
        backgroundColor: 'white',
        borderRadius: 15,
        borderColor: 'transparent',
        shadowOffset: { width: 4, height: 4 },
        shadowColor: '#90a4ae',
        shadowOpacity: 5.0,
    },
    circle: {
        borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 4,
        width: Dimensions.get('window').width * 0.11,
        height: Dimensions.get('window').width * 0.11,
        // width: 50,
        // height: 50,
        // borderWidth: 1,
        backgroundColor: 'pink',
        justifyContent: 'center',
        alignItems: 'center'
        // borderRadius: 10
    }
})

export default ItemData;
