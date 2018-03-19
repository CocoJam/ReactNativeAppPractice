import React from "react";
import {Button} from "react-native";

export default fetchLocation = (items) => {
    return (
        <Button title="Get Location" onPress={items.onGetLocation}/>
    );
}