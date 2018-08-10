
import React from 'react';
import '../stylesheet/style.css'
/*
 * A simple React component
 */
const Hat = ({type}) => {
    let url = '';
    switch (type) {
      case 'cap': url = `https://cdn.glitch.com/1fb3273a-81cb-45bc-acbd-555546cb098f%2Fcap.png?1518712935783`; break;
      case 'pirate': url = `https://cdn.glitch.com/1fb3273a-81cb-45bc-acbd-555546cb098f%2Fpirate.png?1518712936051`; break;
      case 'harry-potter': url = `https://cdn.glitch.com/1fb3273a-81cb-45bc-acbd-555546cb098f%2Fharry-potter.png?1518712935951`; break;
      case 'propeller': url = `https://cdn.glitch.com/1fb3273a-81cb-45bc-acbd-555546cb098f%2Fpropeller.png?1518712935957`; break;
      case 'leprecon': url = `https://cdn.glitch.com/1fb3273a-81cb-45bc-acbd-555546cb098f%2Fleprecon.png?1518712935850`; break;
    }
    return <img src={url} className='hat' />
  }
  
  const thinkerImg = 'https://cdn.glitch.com/1fb3273a-81cb-45bc-acbd-555546cb098f%2Fthinker.png?1518712935862';
  
  const Thinker = () => (
    <img className="thinker" src={thinkerImg} />
  )
  
  const ThinkerWithHat = ({hat}) => (
    <div className="thinker-container">
      <Thinker />
      <Hat type={hat}/>
    </div>
  );
  
  const HatSwitcher = ({onHatChanged}) => (
    <div>
      Select a hat:
    <select onChange={(e) => onHatChanged(e.target.value)}>
      <option value="cap">Cap</option>
      <option value="pirate">Pirate</option>
      <option value="harry-potter">Harry Potter</option>
      <option value="propeller">Propeller</option>
      <option value="leprecon">Leprecon</option>
    </select>
    </div>
  );
  
  export default class Domo extends React.Component {
    constructor(props) {
      super(props);
      this.state = { hat: 'cap' }
    }

    componentWillUpdate(nextProps, nextState){
        console.log(nextState)
    }

    
    render() {
      const onHatChanged = (hat) => {
        this.setState({ hat });
      };
      return (
        <div>
          <HatSwitcher onHatChanged={onHatChanged}/>
          <ThinkerWithHat hat={this.state.hat}/>
        </div>
      );
    }
  }