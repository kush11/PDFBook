import React, { PureComponent } from 'react';
import { Text, View, TouchableOpacity, Dimensions, StyleSheet, SafeAreaView, FlatList } from 'react-native';
import Analytics from 'appcenter-analytics';
class componentName extends PureComponent {
    constructor(props) {
        super(props);        
        this.state = {
        };
    }
    static navigationOptions = ({ navigation }) => {
        const { params } = navigation.state;
        return {
            title: params ? params.title : 'Class 10',
        };
      };
    renderItem = ({ item, navigation },activeTab) => {          
        return (
            <View style={{ height: 60, width: '100%' }}>
                <TouchableOpacity style={styles.elevation}
                    onPress={()=>{
                        this.props.navigation.navigate('PdfView', {pdfUrl: item.pdfLink}, Analytics.trackEvent(`${activeTab}_pdfData`, { pdfOpened:item.name }));
                    }}                
                >
                    <View style={{
                        flex: 1.5,
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: 'red',
                        // borderBottomLeftRadius:20,
                        borderTopStartRadius: 20,
                        borderBottomRightRadius: 20,
                        // borderRadius:20

                    }}>
                        <View style={styles.circle}>
                            {/* <Text>{item.id}</Text> */}
                            <Text>{item.id}</Text>
                        </View>
                    </View>
                    <View style={{ flex: 7, justifyContent: 'center', padding: 10 }}>
                        {/* <Text>{item.name}</Text> */}
                        <Text>{item.name}</Text>
                    </View>

                </TouchableOpacity>
            </View>
        )
    }

    render() {
        const { navigation } = this.props;
        //itemId: {JSON.stringify(navigation.getParam('itemId', 'NO-ID'))}        
        const contentPageData = navigation.getParam('item');
        const activeTab = navigation.getParam('tab');
        const allDataFromPage = navigation.getParam('datas');
        // contentPageData.samplePaper.english.map((d)=>{console.log(d)})
        const allData = contentPageData;        
        return (
            // <View style={{ flex: 1, padding: 5 }}>
            //     {allData.map((data, index) => (
            //         <TouchableOpacity style={styles.elevation} key={index}
            //             onPress={
            //                 () =>
            //                     // console.log('pressed', data.pdfLink),
            //                     navigation.navigate('PdfView',{
            //                         pdfUrl:'http://samples.leanpub.com/thereactnativebook-sample.pdf'
            //                     })                                
            //             }
            //         >
            //             <View style={{
            //                 flex: 2,
            //                 justifyContent: 'center',
            //                 alignItems: 'center'
            //             }}>
            //                 <View style={styles.circle}>
            //                     {/* <Text>{item.id}</Text> */}
            //                     <Text>dss</Text>
            //                 </View>
            //             </View>
            //             <View style={{ flex: 7, justifyContent: 'center', padding: 10 }}>
            //                 {/* <Text>{item.name}</Text> */}
            //                 <Text>{data.name}</Text>
            //             </View>

            //         </TouchableOpacity>
            //     ))}
            // </View>
            <View style={{ flex: 1, padding: 5, marginTop: 15 }}>
                <SafeAreaView style={{ flex: 1, width: '100%' }}>
                    <FlatList
                        data={allData}
                        renderItem={(item) => this.renderItem(item, activeTab)}
                        keyExtractor={item => item.id.toString()}
                    />
                </SafeAreaView>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    elevation: {
        // flex: 1,
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
        width: Dimensions.get('window').width / 11,
        height: Dimensions.get('window').width / 11,
        // width: 50,
        // height: 50,
        // borderWidth: 1,
        backgroundColor: 'pink',
        justifyContent: 'center',
        alignItems: 'center'
        // borderRadius: 10
    }
})
export default componentName;
