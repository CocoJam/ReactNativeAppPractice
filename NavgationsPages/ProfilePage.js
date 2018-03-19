import React from "react";
import {Button} from "react-native";
import store from "../Store/ReduxStore";
import {Provider, connect} from 'react-redux';
import InnerButton from './internal_buttons/innerButton';

export default class ProfilePage extends React.Component {
    static navigationOptions = {
        title: 'Profile',
    };

    render() {
        return (

                <InnerButton/>
        );
    }
}
