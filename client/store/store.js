import {createEpicMiddleware} from 'redux-observable';
import {createStore, applyMiddleware} from 'redux';
import rootReducer from 'reducer';
import epic from 'epic';
import en from './redux-dev-tools';

const composeEnhancers = en();

export const dependencies = {
};

export const epicMiddleware = createEpicMiddleware(epic, {
  dependencies,
});

const createStoreWithMiddleware = () =>
  createStore(rootReducer,
    composeEnhancers(applyMiddleware(epicMiddleware)),
  );

export default function configureStore() {
  return createStoreWithMiddleware();
}
