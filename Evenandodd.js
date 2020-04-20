import React from 'react';


class Evenandodd extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
            <input id='num' type='number'></input>
            <button type='submit' onClick={this.props.addNumber}>Number</button>
            </div>        
        );
    }
}

export default Evenandodd;