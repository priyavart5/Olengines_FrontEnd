import React, { Component } from "react";

class Profile extends Component{
    constructor(){
        super()
        this.state ={
            profile:""
        }
    }

    onProfile = (event) => {
        this.superstate({profile: event.target.value})
    }

    onProfileSubmit= (event) => {
        event.preventdefault();
        fetch("http://localhost4000/profile/:id"),{
            method:"GET",
            Headers:"content-type"="application-json",
            body:JSON.stringify(
                profile = this.state.onProfile
            )
            .then(Response => profile.Response)
            .then(profileid => {
                this.props.history.push('/home');
                console.log("User Found")
            })
        }
    }

    render() {
        return (
            <div>
                
            </div>
        )
    }
}

export default Profile;