import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Screen1 from '../Component/pdfView';
import FrontPage from '../Component/frontPage';
import ContentPage from '../Component/contentPage';
import Tab1Page from '../Component/tabOne'
import Tab2Page from '../Component/tabTwo'
import PdfView from '../Component/pdfView';
import Demo from '../src/index';
// import Screen3 from '../Screen3';

const Routes = createStackNavigator(
    {
        Home: {
            screen: Screen1,
        },
        Demo: {
            screen: Demo
        },
        FrontPageScreen: {
            screen: FrontPage,
            navigationOptions: {
                gesturesEnabled: false,
                header: null,
                title: null
            }
        },
        ContentPage: {
            screen: ContentPage,
            // navigationOptions: {
            //     gesturesEnabled: false,
            //     header: null,
            //     title: null
            // }
        },
        Tab1Page: {
            screen: Tab1Page,
            navigationOptions: {
                gesturesEnabled: false,
                header: null,
                title: null
            }
        },
        Tab2Page: {
            screen: Tab2Page,
            navigationOptions: {
                gesturesEnabled: false,
                header: null,
                title: null
            }
        },
        PdfView: {
            screen: PdfView,
            navigationOptions: {
                gesturesEnabled: false,
                header: null,
                title: null
            }
        },
        // Details: {
        //     screen: Screen3,
        // },
    },
    {
        initialRouteName: 'FrontPageScreen',
    }
);

// const AppRoutes = createAppContainer({
//     Screen111: {
//         screen: Screen111,
//         navigationOptions: { header: null }
//     },
// });
const AppRoutes = createAppContainer(Routes);
export default AppRoutes;
