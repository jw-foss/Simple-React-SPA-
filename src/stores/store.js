// import createStore from redux
import { createStore } from 'redux';
// import reducers from reduces

// import state from sources
import articles from '../sources';
// define the initial state here
const  defaultState = {
	articles
};


// export store that we created

export default const store = createStore( /*add reducers here */, defaultState);
