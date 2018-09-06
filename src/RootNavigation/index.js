import { StackNavigator, TabNavigator, NavigationActions } from 'react-navigation';
import LoginContainer from '../containers/LoginContainer';
import DashboardContainer from '../containers/DashboardContainer';
import NotificationContainer from '../containers/NotificationContainer';

const AppNavigator = StackNavigator(
    {
        Login: { screen: LoginContainer },
        Dashboard: { screen: DashboardContainer },
        Notification: { screen: NotificationContainer },
    },
);


export default AppNavigator;
