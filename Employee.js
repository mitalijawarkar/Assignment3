import React from 'react';


const Employee=(props)=>{
    return  <div>
                <form onSubmit={props.Emp}>
              Id:&nbsp;<input type='number' value={props.currentId} onChange={props.updateId}></input>&nbsp;
                 Name:&nbsp; <input type='text' value={props.currentName} onChange={props.updateName}></input><br/><br/>
                    <button type="submit">EmpModule</button>
                </form>
            </div>
}
export default Employee;