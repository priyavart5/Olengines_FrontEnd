import React, { Component } from "react";
import './Signinstyle.css';
import image from '../../Stuff/Images/latestcarsbanner.png';
import { NavLink } from "react-router-dom";

class Signin extends Component {
    constructor(props){
        super(props);
        this.state = {
            SignInEmail : '',
            SignInPassword : ''
        }
    }

    onEmailChange = (event) =>{
        this.setState({SignInEmail : event.target.value})
    }

    onPasswordChange = (event) =>{
        this.setState({SignInPassword : event.target.value})
    }


    onSubmitSignin = (event) => {
        event.preventDefault();
        fetch("http://localhost:4000/signin" ,{
            method:'POST',
            headers : {'Content-Type':'application/json'},
            body: JSON.stringify({
                email: this.state.SignInEmail,
                password: this.state.SignInPassword
            })
        })
        .then(response => response.json())
        .then(user =>{
            if(user.email){
                this.props.history.push("/home"); 
                console.log('signin success');
            }else if(user.email ==! this.onEmailChange ){
                window.alert("Wrong Email Address")
            }
            else if(this.onPasswordChange ==! user.isValid ){
                window.alert("Wrong Password")
            }
            else{
                window.alert("Password is Incorrect")
            }
        })
    }




    render(){
        return(
            <div className='container'>
                <div className='first'>
                    <NavLink exact='true' to="/" className='close' >Close</NavLink>
                </div>
                <div className='main'>
                    <div className='second'>
                        <p className='heading'>Welcome back to<br/><span >Olengines</span>.</p>
                        <img src={image} alt='main' className='imagesignin' />
                    </div>
                    <form className='fields'>
                        <p className='signin'>Sign in</p>
                        <div className="usernamesignin">
                            <label htmlFor="email" className="emailaddress">Email Address</label>
                            <input onChange={this.onEmailChange}  type="text" className="emailaddressinput" />
                        </div>
                        <div class="password">
                            <label htmlFor="pass" className="labelpassword">Password</label>
                            <input onChange={this.onPasswordChange} type="password" class="inputpassword" data-type='password'/>
                        </div>
                        <button className='signinbutton' onClick={this.onSubmitSignin} value='signin' type='submit'>Sign In</button>
                        <p className='forget'>Forget Password? <NavLink exact='true' to='/' className='resetpasswordsignin'>Reset</NavLink></p>
                        <p className='notaccount'>Don't have an account? <NavLink exact='true' to='/signup' className='notaccountsignin'>Sign up</NavLink></p>
                    </form>
                </div>
            </div>
        );
    }
}

export default Signin;