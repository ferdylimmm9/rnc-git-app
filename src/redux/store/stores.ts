import { applyMiddleware, combineReducers, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import githubReducer from "../reducers/github-reducers";
import { watchGithubSagas } from "../sagas/github-saga";

// Create Saga Middleware
const sagaMiddleware = createSagaMiddleware();

// Combine Reducers (In case you add more reducers later)
const rootReducer = combineReducers({
  github: githubReducer,
});

// Create Store
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

// Run Saga Middleware
sagaMiddleware.run(watchGithubSagas);

export default store;
export type RootState = ReturnType<typeof rootReducer>;
