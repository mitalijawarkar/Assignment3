import React from 'react';
import DisplayEmp from './DisplayEmp;
import Employee './Employee';

class Displayempinfo extends React.Component{

    constructor(props){
        super(props);
        this.updateName=this.updateName.bind(this);
        this.updateId=this.updateId.bind(this);
        this.addEmp=this.addEmp.bind(this);
        this.state={
            employee:[{
                Id:100,
          Name:"Poonam",
                Company:"Yash Technologies"
            }],
            currentName:'',
            currentId:''
        }
    }
    updateName(newValue){
        this.setState({
            currentName:newValue.target.value
        });
    }
    updateId(newValue){
        this.setState({
            currentId:newValue.target.value
        });
    }
    addEmp(event){
        event.preventDefault();
        document.getElementById('errMsg').textContent='';
        let employees=this.state.employee;
        let currentName= this.state.currentName;
        let currentId= this.state.currentId;
        var isRepeat=false;
        employees.forEach(emp=>{
            if(emp.Id==currentId){
                isRepeat=true;
            }
        });
        if(currentId!="" && currentName!=""){
            if(!isRepeat){
                employees.push({Id:currentId, Name:currentName, Company:"Yash Technologies"});
                this.setState({
                    employee:employees,
                    currentName:'',
                    currentId:''
                });
            }
            else{
                document.getElementById('errMsg').setAttribute('style','color:red');
        
            }
        }
        else{
            document.getElementById('errMsg').setAttribute('style','color:red');
         
        }
    }
    render(){
        return(
            <div>
            <Employee={this.updateName}
             updateId={this.updateId}
             addEmp={this.Emp}
             currentName={this.state.currentName}
             currentId={this.state.currentId}/>
            <ul>
                {this.state.employee.map((emp)=>{
                    return <EmployeeComponent key={emp.Id} emp={emp}/>
                })
                }
            </ul>
            <a id='errMsg'></a> 
            </div>
        );
    }
}

export default Displayempinfo