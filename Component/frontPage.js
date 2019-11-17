import React, { Component } from 'react';
import { Platform, View, ScrollView, Text, StatusBar, SafeAreaView } from 'react-native';
import { Container, Header, Tab, Tabs, ScrollableTab } from 'native-base';
import Tab1 from './tabOne';
import Tab2 from './tabTwo';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import Tab3 from './tabThree';
import { sliderWidth, itemWidth } from '../src/styles/SliderEntry.style';
import SliderEntry from '../src/components/SliderEntry';
import styles, { colors } from '../src/styles/index.style';
import { ENTRIES1, ENTRIES2 } from '../src/static/entries';
import { scrollInterpolators, animatedStyles } from '../src/utils/animations';
const SLIDER_1_FIRST_ITEM = 1;
export default class TabsScrollableExample extends Component {

    constructor(props) {
        super(props);
        this.state = {
            slider1ActiveSlide: SLIDER_1_FIRST_ITEM
        };
    }

    // _renderItemWithParallax({ item, index }, parallaxProps) {
    //     return (
    //         <SliderEntry
    //             data={item}
    //             even={(index + 1) % 2 === 0}
    //             parallax={true}
    //             parallaxProps={parallaxProps}
    //         />
    //     );
    // }
    // _renderItem({ item, index }) {
    //     return <SliderEntry data={item} even={(index + 1) % 2 === 0} />;
    // }
    // mainExample(number, title) {
    //     const { slider1ActiveSlide } = this.state;
    //     return (
    //         <View style={{ height: '35%', width: '100%' }}>
    //             <Carousel
    //                 ref={c => this._slider1Ref = c}
    //                 data={ENTRIES1}
    //                 renderItem={this._renderItemWithParallax}
    //                 sliderWidth={sliderWidth}
    //                 itemWidth={itemWidth}
    //                 hasParallaxImages={true}
    //                 firstItem={SLIDER_1_FIRST_ITEM}
    //                 inactiveSlideScale={0.94}
    //                 inactiveSlideOpacity={0.7}
    //                 inactiveSlideShift={20}
    //                 containerCustomStyle={styles.slider}
    //                 contentContainerCustomStyle={styles.sliderContentContainer}
    //                 loop={true}
    //                 loopClonesPerSide={2}
    //                 autoplay={true}
    //                 autoplayDelay={500}
    //                 autoplayInterval={3000}
    //                 onSnapToItem={(index) => this.setState({ slider1ActiveSlide: index })}
    //             />
    //             <Pagination
    //                 dotsLength={ENTRIES1.length}
    //                 activeDotIndex={slider1ActiveSlide}
    //                 containerStyle={styles.paginationContainer}
    //                 dotColor={'rgba(255, 255, 255, 0.92)'}
    //                 dotStyle={styles.paginationDot}
    //                 inactiveDotColor={colors.black}
    //                 inactiveDotOpacity={0.4}
    //                 inactiveDotScale={0.6}
    //                 carouselRef={this._slider1Ref}
    //                 tappableDots={!!this._slider1Ref}
    //             />
    //         </View>
    //     );
    // }
    // momentumExample(number, title) {
    //     return (
    //         <View
    //         // style={styles.exampleContainer}
    //         >
    //             {/* <Text style={styles.title}>{`Example ${number}`}</Text>
    //             <Text style={styles.subtitle}>{title}</Text> */}
    //             <Carousel
    //                 data={ENTRIES1}
    //                 renderItem={this._renderItem}
    //                 sliderWidth={sliderWidth}
    //                 itemWidth={itemWidth}
    //                 inactiveSlideScale={0.95}
    //                 inactiveSlideOpacity={1}
    //                 enableMomentum={true}
    //                 activeSlideAlignment={'start'}
    //                 containerCustomStyle={styles.slider}
    //                 contentContainerCustomStyle={styles.sliderContentContainer}
    //                 activeAnimationType={'spring'}
    //                 activeAnimationOptions={{
    //                     friction: 4,
    //                     tension: 40
    //                 }}
    //             />
    //         </View>
    //     );
    // }
    render() {
        // const example2 = this.momentumExample(2, 'Momentum | Left-aligned | Active animation');
        // const example1 = this.mainExample(1, 'Default layout | Loop | Autoplay | Parallax | Scale | Opacity | Pagination with tappable dots');
        return (
            <Container>
                {/* {example1} */}
                <Header
                    style={{ height: 0, paddingTop: 0 }}
                    hasTabs />
                <Tabs renderTabBar={() => <ScrollableTab />}>
                    <Tab heading="Board Paper">
                        <Tab1 navigation={this.props.navigation} />
                    </Tab>
                    <Tab heading="Sample Paper">
                        <Tab2 navigation={this.props.navigation} />
                    </Tab>
                    <Tab heading="Question">
                        <Tab3 navigation={this.props.navigation} />
                    </Tab>
                </Tabs>
            </Container>
        );
    }
}