const redux = require("redux");

const createStore = redux.createStore;

// initialize state
const initialState = {
	counter: 0,
};


// reducer
// store creation requires reducer as its the only
// thing that interacts with store for managing state
// reducer receives state in argument as well as the action
// it returns the updated state
const rootReducer = (state = initialState, action) => {
	if (action.type === "INC_COUNTER") {
		return {counter: state.counter + 1};
	}
	else if (action.type === "ADD_COUNTER") {
		return {counter: state.counter + action.payload.value};
	}
	else {
		return state;
	}
};

// store
const store = createStore(rootReducer);
console.log(store.getState()); // logs undefiened if state not initialized


// subscribe
store.subscribe(() => {
	console.log("Subscribed - " + store.getState());
});

// dispatching action
store.dispatch({type: "INC_COUNTER"});
store.dispatch({type: "ADD_COUNTER", payload: {value: 10}});
console.log(store.getState());
