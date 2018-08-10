
import * as constants from '../actions/constants' ;

const balanceReducer =(state=0, action)=>{
    let balance ;
    switch (action.type){
        case (constants.SET_BALANCE):
         return action.balance;
         break;
         default :
            return balanceReducer
    }
}

export default balance