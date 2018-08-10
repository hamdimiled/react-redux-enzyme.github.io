


export default function (state = {}, action) {
    switch (action.type) {
        case 'SEARCH_CARS':
            return {...state , list: action.payload};
        case 'CARS_DETAIL':
        return {...state , detail: action.payload} 
        case  'DETAIL_CARS' :
          return {...state , detail: action.payload}
          default :
          return state ;
    }
}