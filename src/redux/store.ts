import { combineReducers,applyMiddleware,createStore } from '@reduxjs/toolkit'
import languageReducer from "./language/languageReducer";
import recommandProductReducer from "./recommendProducts/recommendProductsReducer";
import thunk from 'redux-thunk'
import { actionLog } from './middlewares/actionLog';

const rootReducer = combineReducers({
    language:languageReducer,
    recommandProducts:recommandProductReducer
})

const store = createStore(rootReducer,applyMiddleware(thunk,actionLog))

export type RootState = ReturnType<typeof store.getState>
export default store;

/*
1, 建立Store
2, 给store设置reducer
*/