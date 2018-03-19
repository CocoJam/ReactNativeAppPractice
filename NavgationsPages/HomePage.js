import React from "react";
import {Button,View} from "react-native";
import { Provider } from 'react-redux';
import store from "../Store/ReduxStore";
export default class HomeScreen extends React.Component {
    static navigationOptions = {
        title: 'Home',
    };

    render() {
        return (
            <Provider store={store}>
                <Button
                    title="Go to Jane's profile"
                    onPress={() =>
                        this.props.navigation.navigate('Profile', {name: 'Jane'})
                    }
                />
            </Provider>
        );
    }
};