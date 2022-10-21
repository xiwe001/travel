import { combineReducers,configureStore} from '@reduxjs/toolkit'
import languageReducer from "./language/languageReducer";
import recommandProductReducer from "./recommendProducts/recommendProductsReducer";
import thunk from 'redux-thunk'
import { actionLog } from './middlewares/actionLog';
import {productDetailSlice} from '../redux/productDetail/slice'
const rootReducer = combineReducers({
    language:languageReducer,
    recommandProducts:recommandProductReducer,
    productDetail: productDetailSlice.reducer,
})

// const store = createStore(rootReducer,applyMiddleware(thunk,actionLog))
const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), actionLog],
    devTools: true,
  });

  
export type RootState = ReturnType<typeof store.getState>
export default store;

/*
1, 建立Store
2, 给store设置reducer
*/