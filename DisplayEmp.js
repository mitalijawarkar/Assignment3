  
import React from 'react';

class Display extends React.Component{

    constructor(props){
        super(props);
    }

    render(){
        return(
            <li>Id:&nbsp;{this.props.emp.empId} &nbsp;|
            &nbsp;Name:&nbsp;{this.props.emp.empName} &nbsp;|
            &nbsp;Company:&nbsp;{this.props.emp.empCompany}</li>           
        );
    }
}

export default ShowEmpComponent;