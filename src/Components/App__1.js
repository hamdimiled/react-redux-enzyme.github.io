import React from 'react';
import { SkiDayList } from './SkiDayList';

import  SkiDayCount  from './SkiDayCount';
export default class App extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            allSkiDays :[{
               resort :'Squaw Valley',
               date: new Date("1/2/2016"),
               powder : true ,
               backcountry:false
           },
           {
               resort :'Kirkwood',
               date: new Date("3/28/2016"),
               powder : false ,
               backcountry:false
           },{
               resort :'Mt.Valley Tallac',
               date: new Date("4/2/2016"),
               powder : false ,
               backcountry:false
           }]
        }

        console.log(this.props)

    }
    render(){
        return( <div>
            <SkiDayCount
                total={'bbb'}
                powder={90}
                backcountry={10}
            />
           <SkiDayList days={this.state.allSkiDays}
           /></div>)
    }
}
