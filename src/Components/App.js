
import React from 'react'
import Gift from './Gift'
class App extends React.Component {
    state={
        gifts:[]
    }
    addGift=()=>{
        const {gifts} = this.state;
        const ids = gifts.map(gift=>gift.id);
        const max_id = ids.length > 0 ? Math.max(...ids) : 0;
        gifts.push({id : max_id + 1});
        this.setState({gifts})
        
    }
    render(){
        return (
        <div>
            <div>hi hamdi</div>
            <div className='gift-list'>
            {this.state.gifts.map(gift=>{
                return (<Gift key={gift.id}/>)
            })}
            </div>
            <button type='button' className='btn-add' onClick={this.addGift}> Click ME </button>
            </div>
            )
    }
}

export default App