import React from 'react';
import {connect} from 'react-redux';
import {Button,View} from "react-native";

class InnerButton extends React.Component {
    constructor(props) {
        super();
        this.state = {}
    }

    render() {
        return (
            <Button title="reducers" onPrss={ ()=>{this.props.actionPerformed("asdasddddddd")
            }
            }/>
        )
    }
}

const mappingStore = (state) => {
    console.log("Passing");
    console.log(state);
    return state;
};

const DispatchStore = (dispatch) => {
    console.log("Dispatching");
    return {
        actionPerformed: (arg) => {
            dispatch({
                type: "Action1",
                payload: arg
            });
        }
    }
};


export default connect(mappingStore, DispatchStore)(InnerButton)