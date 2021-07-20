import React from 'react';

const Login = () => {
    return ( 
    <>
        <div className= "login">
            <img className = "wave" src="wave.png"></img>
            <div className = "container">
                <div className="img">
                <img className = "programmer" src="programmer.svg"></img>
                </div>
                <div className = "login-container">
                    <form>
                    <img className = "profile" src="profile.svg"></img>
                    <h2>Welcome Tech Test Takers!</h2>
                    <div className="input-div one">
                        <div className="i">
                            <i className="fa fa-user"></i>
                        </div>
                        <div className="div">
                            <h5>Username</h5>
                            <input type="text" class="input"></input>
                        </div>
                    </div>
                    <div className="input-div pass">
                        <div className="i">
                            <i className="fa fa-lock"></i>
                        </div>
                        <div className="div">
                            <h5>Password</h5>
                            <input type="password" class="input"></input>
                        </div>
                    </div>
                    <input type="submit" class="btn" value="Login"></input>
                    </form>
                </div>
            </div>
        </div>
    </>
     );
}
 
const inputs = document.querySelectorAll(".input");


function addcl(){
	let parent = this.parentNode.parentNode;
	parent.classList.add("focus");
}

function remcl(){
	let parent = this.parentNode.parentNode;
	if(this.value == ""){
		parent.classList.remove("focus");
	}
}


inputs.forEach(input => {
	input.addEventListener("focus", addcl);
	input.addEventListener("blur", remcl);
});

export default Login;