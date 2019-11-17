import React, { PureComponent } from 'react';
import { View, Text, StyleSheet, FlatList, SafeAreaView, TouchableOpacity } from 'react-native';
import ItemData from './ItemData';

let Data = [
    {
        id: '1',
        name: 'English',
        samplePaper: [
            {
                id: '1',
                name: "Communicative -2012 Set 1",
                pdfLink: 'http://samples.leanpub.com/thereactnativebook-sample.pdf'
            },
            {
                id: '2',
                name: "Communicative -2012 Set 2",
                pdfLink: 'http://samples.leanpub.com/thereactnativebook-sample.pdf'
            }
        ]

    },
    {
        id: '2',
        name: 'Hindi',
        samplePaper: [
            {
                id: '1',
                name: "Hindi -2012 Course 1",
                pdfLink: ''
            },
            {
                id: '2',
                name: "Hindi -2012 Course 2",
                pdfLink: ''
            }
        ]

    },
    {
        id: '3',
        name: 'Mathmatics',
        samplePaper: [
            {
                id: '1',
                name: "Mathmatics -2012 Course 1",
                pdfLink: ''
            },
            {
                id: '2',
                name: "Mathmatics -2012 Course 2",
                pdfLink: ''
            }
        ]

    },
    {
        id: '4',
        name: 'Science',
        samplePaper: [
            {
                id: '1',
                name: "Science -2012 Course 1",
                pdfLink: ''
            },
            {
                id: '2',
                name: "Science -2012 Course 2",
                pdfLink: ''
            }
        ]

    },
    {
        id: '5',
        name: 'Social Science',
        samplePaper: [
            {
                id: '1',
                name: "Social Science -2012 Course 1",
                pdfLink: ''
            },
            {
                id: '2',
                name: "Social Science -2012 Course 2",
                pdfLink: ''
            }
        ]

    }

]

export default class tabOne extends PureComponent {
    renderItem = ({ item }) => {
        console.log(this.props);
        console.log(this.props.navigation);
        return (
            <View style={{ height: 60, width: '100%' }}>
                <ItemData data={Data} item={item} navigation={this.props.navigation} />
            </View>
        )
    }

    render() {
        console.log(this.props);
        return (
            <View style={styles.container}>
                <SafeAreaView style={{ flex: 1, width: '100%' }}>
                    <FlatList
                        data={Data}
                        renderItem={this.renderItem}
                        keyExtractor={item => item.id}
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