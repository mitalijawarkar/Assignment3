import React from 'react';
import OddEvenForm from './OddEvenForm';

class EvenAndOdd extends React.Component{

    constructor(props){
        super(props);
     
        this.state={
            List:[2,4,5,6,1]
        }
    }

   
    render(){
        return(
            <div>
             List   : "[2,4,5,6,1]"
            
                    Odd Number: &nbsp;
                {this.state.List.filter(function(num){
                    return num%2!=0;
                }).map(function(num){
                    return <a>{num},</a>;
                })
                }<br/>
                Even Number: &nbsp;
                {this.state.List.filter(function(num){
                    return num%2==0;
                }).map(function(num){
                    return <a>{num},</a>;
                })
                }
                </ul>
            </div>
        );
    }
}

export default EvenAndOdd;