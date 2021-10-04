import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { contactsReducer } from './phonebook/phonebook-reducers';

const rootReducer = combineReducers({
  contacts: contactsReducer,
});

export const store = createStore(rootReducer, composeWithDevTools());
