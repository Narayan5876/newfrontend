import React from 'react'
import  {NavLink,Switch,Route,Redirect} from 'react-router-dom'
import '../css/Login.css';
import axios from 'axios'


class Register extends React.Component {
    constructor() {
   super()
    this.state = {
        email : '',
        password : '',
        fullname: '',
        phone: '',
        address: '',
        user_type: 'user',
        isRegistered: true
        
    }
}
    
handleChange = (e) => {
    this.setState({
        [e.target.name]: e.target.value
    })
}

Register = (e) => {
    e.preventDefault();
    console.log(this.state);

    axios.post('http://localhost:4000/register', this.state)
        .then((response) => {
            console.log(response.data);
            localStorage.setItem('token', response.data.token)
            this.setState({
            //this values should match with the value of model class of API
            //install cors in api
            fullname:this.state.fullname,
            email:this.state.email,
            address:this.state.address,
            password:this.state.password,
            user_type:this.state.user_type,
        });
        
        
        
    }).catch((err) => console.log(err))
}

    render(){
        
            
       
        return (
         
                  <div className="log">
            <form>
                
             <div class="containerss">
            

            <p>Fullname</p>
            <input type="text" value = {this.state.fullname} onChange = {(event)=> this.setState({fullname:event.target.value})} 
            placeholder="Enter Fullname" name="fullname" required/>
            
           <p>Address</p>
            <input type="text" value = {this.state.address} onChange = {(event)=> this.setState({address:event.target.value})} 
            placeholder="Enter Adress" name="address" required/>
            
            <p>Contact Number</p>
            <input type="text" value = {this.state.phone} onChange = {(event)=> this.setState({phone:event.target.value})} 
            placeholder="Enter phone number" name="phone" required/>
            
           <p>Email</p>
            <input type="email" value = {this.state.email} onChange = {(event)=> this.setState({email:event.target.value})} 
            placeholder="Enter email" name="email" required/>
            
            <p>Password</p>
            <input type="password" value = {this.state.password} onChange = {(event)=> this.setState({password:event.target.value})}
            placeholder="Enter Password" name="password" required/>
             <input type="hidden" value = {this.state.usertype} onChange = {(event)=> this.setState({usertype:event.target.value})}
            name="user_type" required/>
            
            <button className="abc" onClick={this.Register} type="submit">Register</button>
            
            <p>Alredy Member?
            <NavLink to="/Login"> Login</NavLink></p>
            
            </div>

            </form>
            </div>  

          

  
)
}
        }
    
    export default Register