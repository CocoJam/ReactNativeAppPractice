const Reducer = (state = {}, action) => {
    switch (action.type) {
        case "Action1":
            state = {
                age: state.age,
                username: action.payload
            };
            break;
    }
    console.log("UserReducer has ran ", action.type);
    return state;
};
export default Reducer;