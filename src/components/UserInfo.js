import React, {useState} from 'react'

const UserInfo = ()=> {
    const [name, updateName] = useState({firstName: '', lastName: ''});
    return (
        <div>
            <h3>useState with object</h3>
            <form>
            <span>First Name: <input type='text' 
            value ={name.firstName} 
            onChange = {(e) => updateName({...name, firstName: e.target.value})}
            />
            </span><br/>
            <span>Last Name: <input type='text' 
            value ={name.lastName} 
            onChange = {(e) => updateName({...name, lastName: e.target.value})}
            />
            </span>
            </form>
            <span>First Name: {name.firstName}</span><br/>
            <span>Last Name: {name.lastName}</span>
        </div>
    )
}

export default UserInfo
