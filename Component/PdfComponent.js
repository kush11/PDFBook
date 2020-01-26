/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { useState } from 'react';
import { StyleSheet, Dimensions, View, SafeAreaView, TouchableHighlight, Text } from 'react-native';

import Pdf from 'react-native-pdf';
import Orientation from 'react-native-orientation-locker';

const WIN_WIDTH = Dimensions.get('window').width;
const WIN_HEIGHT = Dimensions.get('window').height;
let pageNumber = 0;
const PdfComponent = (props) => {
    const [getPage, setPage] = useState()
    // constructor(props) {
    //     super(props);
    //     props = {
    //         page: 1,
    //         scale: 1,
    //         numberOfPages: 0,
    //         horizontal: false,
    //         width: WIN_WIDTH
    //     };
    //     pdf = null;
    // }

    // _onOrientationDidChange = (orientation) => {
    //     if (orientation == 'LANDSCAPE-LEFT' || orientation == 'LANDSCAPE-RIGHT') {
    //         setprops({ width: WIN_HEIGHT > WIN_HEIGHT ? WIN_HEIGHT : WIN_WIDTH, horizontal: true });
    //     } else {
    //         setprops({ width: WIN_HEIGHT > WIN_HEIGHT ? WIN_HEIGHT : WIN_WIDTH, horizontal: false });
    //     }
    // };

    // prePage = () => {
    //     let prePage = props.page > 1 ? props.page - 1 : 1;
    //     pdf.setPage(prePage);
    //     console.log(`prePage: ${prePage}`);
    // };

    // nextPage = () => {
    //     let nextPage = props.page + 1 > props.numberOfPages ? props.numberOfPages : props.page + 1;
    //     pdf.setPage(nextPage);
    //     console.log(`nextPage: ${nextPage}`);
    // };

    // zoomOut = () => {
    //     let scale = props.scale > 1 ? props.scale / 1.2 : 1;
    //     // setprops({ scale: scale });
    //     console.log(`zoomOut scale: ${scale}`);
    // };

    // zoomIn = () => {
    //     let scale = props.scale * 1.2;
    //     scale = scale > 3 ? 3 : scale;
    //     // setprops({ scale: scale });
    //     console.log(`zoomIn scale: ${scale}`);
    // };

    // switchHorizontal = () => {
    //     // setprops({ horizontal: !props.horizontal, page: props.page });
    // };

    let source = { uri: props.url, cache: true };
    //let source = require('./test.pdf');  // ios only
    //let source = {uri:'bundle-assets://test.pdf'};

    //let source = {uri:'file:///sdcard/test.pdf'};        
    return (
        <SafeAreaView style={styles.container}>
            {/* <View style={{ flexDirection: 'row' }}> */}
                {/* <TouchableHighlight disabled={\props.page === 1}
                    style={props.page === 1 ? styles.btnDisable : styles.btn}
                    onPress={() => prePage}>
                    <Text style={styles.btnText}>{'-'}</Text>
                </TouchableHighlight>
                <View style={styles.btnText}><Text style={styles.btnText}>Page</Text></View>
                <TouchableHighlight disabled={props.page === props.numberOfPages}
                    style={props.page === props.numberOfPages ? styles.btnDisable : styles.btn}
                    onPress={() => nextPage()}>
                    <Text style={styles.btnText}>{'+'}</Text>
                </TouchableHighlight>
                <TouchableHighlight disabled={props.scale === 1}
                    style={props.scale === 1 ? styles.btnDisable : styles.btn}
                    onPress={() => zoomOut()}>
                    <Text style={styles.btnText}>{'-'}</Text>
                </TouchableHighlight>
                <View style={styles.btnText}><Text style={styles.btnText}>Scale</Text></View>
                <TouchableHighlight disabled={props.scale >= 3}
                    style={props.scale >= 3 ? styles.btnDisable : styles.btn}
                    onPress={() => zoomIn()}>
                    <Text style={styles.btnText}>{'+'}</Text>
                </TouchableHighlight>
                <View style={styles.btnText}><Text style={styles.btnText}>{'Horizontal:'}</Text></View>
                <TouchableHighlight style={styles.btn} onPress={() => switchHorizontal()}>
                    {!props.horizontal ? (<Text style={styles.btnText}>{'false'}</Text>) : (
                        <Text style={styles.btnText}>{'true'}</Text>)}
                </TouchableHighlight> */}

            {/* </View> */}
            <View style={{ flex: 1, width: props.width }}>
                <Pdf ref={(pdf) => {
                    pdf = pdf;
                }}
                    source={source}
                    scale={props.scale}
                    horizontal={props.horizontal}
                    onLoadComplete={(numberOfPages, filePath, { width, height }, tableContents) => {
                        // setprops({
                        //     numberOfPages: numberOfPages
                        // });                        
                    }}
                    onPageChanged={(page, numberOfPages) => {
                        // setprops({
                        //     page: page
                        // });
                        pageNumber = page;
                        setPage(page)                        
                    }}
                    onError={(error) => {
                        console.log(error);
                    }}
                    style={{ flex: 1 }}
                />
            </View>
            {/* <Image source={imageSource} style={{position: "absolute", bottom: 0, right: 0}}/> */}
            <View style={{
                height: '5%',
                width: '20%',
                backgroundColor: 'gray',
                position: "absolute",
                bottom: 100,
                right: 0,
                justifyContent: 'center',
                alignItems: 'center',
                borderTopLeftRadius: 50,
                borderBottomLeftRadius: 50,
            }}>
                <Text style={{fontSize:20}}>{pageNumber}</Text>
            </View>
            {/* <View><Text>{getPage}</Text></View> */}
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        // marginTop: 25,
    },
    btn: {
        margin: 2,
        padding: 2,
        backgroundColor: "aqua",
    },
    btnDisable: {
        margin: 2,
        padding: 2,
        backgroundColor: "gray",
    },
    btnText: {
        margin: 2,
        padding: 2,
    }
});


export default PdfComponent;
