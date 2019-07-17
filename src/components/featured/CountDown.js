import React, { Component } from 'react';
import Slide from 'react-reveal/Slide';

class CountDown extends Component {

    state = {
        deadline: "Dec, 16, 2019",
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    }
getTimeUntil(deadline){
    const time = Date.parse(deadline)-Date.parse(new Date());
    if(time < 0) {
        console.log("This event has passed")
    } else {
        const seconds = Math.floor((time/1000)%60);
        const minutes = Math.floor((time/1000/60)%60);
        const hours = Math.floor((time/(1000*60*60))%24);
    }
    
}

    componentDidMount(){
        setInterval(()=>this.getTimeUntil(this.state.deadline), 1000)
    }
    render() {
        return (
            <Slide left delay={1000}>
                <div className="countdown_wrapper">
                    <div className="countdown_top">
                        Event starts in
                </div>
                    <div className="countdown_bottom">
                        <div className="countdown_item">
                            <div className="countdown_time">
                                23
                        </div>
                            <div className="countdown_tag">
                                Days
                        </div>
                        </div>
                        <div className="countdown_item">
                            <div className="countdown_time">
                                2
                        </div>
                            <div className="countdown_tag">
                                Hours
                        </div>
                        </div>
                        <div className="countdown_item">
                            <div className="countdown_time">
                                20
                        </div>
                            <div className="countdown_tag">
                                Minutes
                        </div>
                        </div>
                        <div className="countdown_item">
                            <div className="countdown_time">
                                45
                        </div>
                            <div className="countdown_tag">
                                Seconds
                        </div>
                        </div>
                    </div>
                </div>
            </Slide>
        );
    }
}

export default CountDown;