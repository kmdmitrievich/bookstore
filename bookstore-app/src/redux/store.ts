import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import user_reducer from './reducers/user_reducer';

import { combineReducers } from 'redux';
import { watcherUser } from './action_creators';
import { all } from 'redux-saga/effects';
import { watcherBooks } from './action_creators/book_action_creators';

const sagaMiddleware = createSagaMiddleware();
function* rootSaga() {
    yield all([

        watcherUser(),
        watcherBooks(),
    ])
}
export default createStore(combineReducers({
    user: user_reducer,
}), applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);