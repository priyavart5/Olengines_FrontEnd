import React, { Component } from "react";
import './Signinstyle.css';
import {NavLink} from 'react-router-dom';
import image from '../../Stuff/Images/latestcarsbanner.png';


class Signup extends Component{

    constructor(props){
        super(props);
        this.state={
            name:'',
            email:'',
            password:''
        }
    }

    onNameChange  = (event) =>{
        this.setState({name : event.target.value})
    }

    onEmailChange = (event) =>{
        this.setState({email : event.target.value})
    }

    onPasswordChange = (event) =>{
        this.setState({password : event.target.value})
    }

    onSubmitSignup = (event) => {
        event.preventDefault();
        fetch("http://localhost:4000/signup" ,{
        method:'POST',
        headers : {'Content-Type':'application/json'},
        body: JSON.stringify({
            name: this.state.name,
            email: this.state.email, 
            password: this.state.password
        })
    })
    .then(response => response.json())
    .then(user =>{
        if(user.email){
            console.log('signup success');
            this.props.history.push("/signin");
        }
    })
    }

    render() {
    return(
        <>
        <div className='container'>
                <div className='first'>
                    <NavLink exact='true' to="/" className='close' >Close</NavLink>
                </div>
                <div className='main'>
                    <div className='second'>
                        <p className='heading'>Hey, welcome in<br/><span >Olengines</span>.</p>
                        <img src={image} alt='main' className='imagesignin' />
                    </div>
                    <div className='fieldssignup'>
                        <form action='/signup' method='post'>
                        <p className='signupforsignup'>Sign up</p>
                        <div class="fullname">
                            <label for="fullname" className="labelpassword" id='labelpasswordsignup'>Full Name</label>
                            <input onChange={this.onNameChange}  type="name" class="inputpassword" data-type='name' name='name' required='true'/>
                        </div>
                        <div class="usernamesignup">
                            <label for="user" className="emailaddress">Email</label>
                            <input  onChange={this.onEmailChange}  type="text" className="emailaddressinput" name='email' required />
                        </div>
                        <div class="passwordsignup">
                            <label htmlfor="passsignup" className="labelpassword">Password</label>
                            <input onChange={this.onPasswordChange }  type="password" className="inputpassword" data-type='password' name='password' required/>
                        </div>
                        <div className='checkboxagree'>
                            <input type='checkbox' className='CBagree' required /> 
                            <label htmlFor='agree' className='CBagreelabel'>I agree to your <span><NavLink exact='true' to='/home' className='link'> Terms & Conditions</NavLink></span> and <span><NavLink exact='true' to='/latestcars' className='link2'> Privacy Policy</NavLink></span>.</label>
                        </div>
                        <button onClick={this.onSubmitSignup} type='submit' className='createbutton'  value='signup' >Create your account</button>
                        <p className='alreadyregistered'>Already registered? <NavLink exact='true' to='/signin' className='alreadysignin'>Sign in</NavLink></p>
                        </form>
                    </div>
                </div>
            </div>
            </>
        );
    }
    }

export default Signup;





