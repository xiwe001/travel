import { ThunkAction } from "redux-thunk"
import { RootState } from "../store"
import axios from "axios"

export const FETCH_RECOMMEND_PRODUCTS_START = 'FETCH_RECOMMEND_PRODUCTS_START'
export const FETCH_RECOMMEND_PRODUCTS_SUCCESS = 'FETCH_RECOMMEND_PRODUCTS_SUCCESS'
export const FETCH_RECOMMEND_PRODUCTS_FAIL = 'FETCH_RECOMMEND_PRODUCTS_FAIL'

interface FetchRecommendProductsStartAction{
    type:typeof FETCH_RECOMMEND_PRODUCTS_START
}

interface FetchRecommendProductsSuccessAction{
    type:typeof FETCH_RECOMMEND_PRODUCTS_SUCCESS,
    payload:any
}

interface FetchRecommendProductsFailAction{
    type:typeof FETCH_RECOMMEND_PRODUCTS_FAIL,
    payload:any
}

export type RecommendProductAction = | FetchRecommendProductsStartAction | FetchRecommendProductsSuccessAction | FetchRecommendProductsFailAction

export const fetchRecommendProductStartActionCreator = ():FetchRecommendProductsStartAction =>{
    return{
        type:FETCH_RECOMMEND_PRODUCTS_START
    }
}

export const fetchRecommendProductSuccessActionCreator = (data):FetchRecommendProductsSuccessAction =>{
    return{
        type: FETCH_RECOMMEND_PRODUCTS_SUCCESS,
        payload:data
    }
}

export const fetchRecommendProductFailActionCreator = (error):FetchRecommendProductsFailAction =>{
    return{
        type: FETCH_RECOMMEND_PRODUCTS_FAIL,
        payload:error
    }
}

export const giveMeDataActionCreator = ():ThunkAction<void,RootState,unknown,RecommendProductAction>=>async (dispatch,getState) =>{

    dispatch(fetchRecommendProductStartActionCreator())
    axios.get('http://localhost:8082/api/ProductCollections',{headers:{"x-icode":"asdf"}})
    .then(({data}) =>{
      if(data.success){
        dispatch(fetchRecommendProductSuccessActionCreator(data.response))
      }else{
        dispatch(fetchRecommendProductFailActionCreator(data.message))
      }
    })
}