/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { PureComponent, useState } from 'react';
import { StyleSheet, Dimensions, View, TouchableOpacity, SafeAreaView, TouchableHighlight, Text } from 'react-native';
import Pdf from './PdfComponent';
import Orientation from 'react-native-orientation-locker';

const WIN_WIDTH = Dimensions.get('window').width;
const WIN_HEIGHT = Dimensions.get('window').height;
const url = 'http://samples.leanpub.com/thereactnativebook-sample.pdf';
const url1 = 'http://www.africau.edu/images/default/sample.pdf';
const url2 = 'https://www.adobe.com/support/products/enterprise/knowledgecenter/media/c4611_sample_explain.pdf';
const url3 = 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf'
const url4 = 'http://www.pdf995.com/samples/pdf.pdf';
const url5 = 'https://jeroen.github.io/images/ocrscan.pdf'
const url6 = 'http://unec.edu.az/application/uploads/2014/12/pdf-sample.pdf'
const url7 = 'https://cartographicperspectives.org/index.php/journal/article/view/cp43-complete-issue/pdf';
class PdfView extends PureComponent {
  state = {
    uri: url
  }
  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        {/* <TouchableOpacity
          onPress={() => this.setState({ uri: url })}
        >
          <Text>Book1</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => this.setState({ uri: url1 })}
        >
          <Text>Book2</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => this.setState({ uri: url1 })}
        >
          <Text>Book3</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => this.setState({ uri: url2 })}
        >
          <Text>Book4</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => this.setState({ uri: url3 })}
        >
          <Text>Book5</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => this.setState({ uri: url4 })}
        >
          <Text>Book6</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => this.setState({ uri: url5 })}
        >
          <Text>Book7</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => this.setState({ uri: url6 })}
        >
          <Text>Book8</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => this.setState({ uri: url7 })}
        >
          <Text>Book9</Text>
        </TouchableOpacity> */}
        <Pdf
          page={1}
          scale={1}
          numberOfPages={0}
          horizontal={false}
          width={WIN_WIDTH}
          // url={this.state.uri}
          url={navigation.getParam('pdfUrl')}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 25,
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


export default PdfView;
