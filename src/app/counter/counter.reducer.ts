import {createReducer,on} from '@ngrx/store'
import { intialState } from './store/counter.state'
import { customIncrement, decrement, increment, reset } from './store/counter.action'
const _counterReduce=createReducer(intialState,
   on(increment,(state)=>{
    return{...state,counter: state.counter+1};

   }),
   on(decrement,(state)=>{
    return{...state,counter: state.counter-1};

   }),
   on(reset,(state)=>{
    return{...state,counter: 0};

   }),
   on(customIncrement,(state,action)=>{
    return{...state,
    counter: state.counter+action.value};

   })


)


export function counterReducer(state:any,action:any){
    return _counterReduce(state,action)
}