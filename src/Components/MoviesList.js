import React from 'react';
import {connect} from 'react-redux' ;
import * as actionss from '../actions';

class MoviesList extends React.Component{
    componentWillMount(){
        this.props.moviesList();
        console.log(this.props.movies)
    }
    renderList =(moviess)=>{
        if(moviess)
        return moviess.map((movie)=>{
            return(
                <h1>{movie.name}</h1>
            )
        })
    }
    render(){
        return(
            <div className="App">
                {this.renderList(this.props.movies)}
            </div>
        );
    }
}
function mapStateToProps(state){
    return{
        movies:state.movies,
    }
}
export default connect(mapStateToProps , actionss)(MoviesList);



