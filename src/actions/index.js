const URL_ROOT = 'http://localhost:3000'
export function moviesList(){
    return{
        type:'MOVIES_LIST' , 
        payload:[{
            id :1 , name:"Pulp Fiction"
        } , {
            id : 2 , name:"PAcific Rim"
        } , {
            id : 3 , name:"mr robbot"
        }]
    }
}

export function getCars(keyword){
    const request = fetch(`${URL_ROOT}/carsIndex?q=${keyword}`,{method:'GET'})
                    .then(response=>resonse.json());
    return{
        type:'SEARCH_CARS',
        payload:request
    }


} 

export function carDetail(id){
    const request = fetch(`${URL_ROOT}/carsIndex?q=${id}`,{method:'GET'})
                    .then(response=>resonse.json());
    return{
    type:'CARS_DETAIL' ,
    payload:request

    }
} 
export function cleardetail(){
    return{
        type:'DETAIL_CARS',
        payload:{}

    }
    
} 