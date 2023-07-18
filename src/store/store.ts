// store/index.ts
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './reducers';
import rootSaga from './saga/rootSaga';
import thunk from 'redux-thunk';

const sagaMiddleware = createSagaMiddleware({
});

const store = configureStore({
  reducer: rootReducer,
  middleware: [...getDefaultMiddleware({ thunk: false, serializableCheck: false }), sagaMiddleware, thunk],
});

sagaMiddleware.run(rootSaga);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof rootReducer>;

export default store;