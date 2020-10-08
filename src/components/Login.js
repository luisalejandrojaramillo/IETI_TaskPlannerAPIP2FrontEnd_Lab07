import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import LockIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import './Login.css'


export class Login extends React.Component{

    constructor(props){
        super(props);
        this.state={email:"",password:"",IsLoggedIn: false};
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleUser = this.handleUser.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
    }

    render(){
        return (
            <React.Fragment>
                <CssBaseline />
                <main className="layout" >
                    <Paper className="paper">
                        <Avatar className="avatar">
                            <LockIcon />
                        </Avatar>
                        <Typography variant="h2">Sign in</Typography>
                        <div>
                            <form className="form">
                                <FormControl margin="normal" required fullWidth>
                                    <InputLabel htmlFor="email">Email Address</InputLabel>
                                    <Input 
                                    id="email" 
                                    name="email" 
                                    autoComplete="email" 
                                    value = {this.state.email}
                                    onChange = {this.handleUser}
                                    autoFocus />
                                </FormControl>
                                <FormControl margin="normal" required fullWidth>
                                    <InputLabel htmlFor="password">Password</InputLabel>
                                    <Input
                                        name="password"
                                        type="password"
                                        id="password"
                                        autoComplete="current-password"
                                        value = {this.state.password}
                                        onChange = {this.handlePassword}
                                        autoFocus/>
                                </FormControl>
                                <Button onClick={this.handleSubmit}
                                    type="submit"
                                    fullWidth
                                    variant="outlined"
                                    color="primary"
                                    className="submit"
                                >
                                    Ingresar
                                </Button>
                                <Button
                                        variant="outlined"
                                        type ="submit"
                                        fullWidth
                                        color="primary"
                                        href = "/signup"
                                    >
                                        Sign Up
                                </Button>
                            </form>
                        </div> 
                    </Paper>
                </main>
            </React.Fragment>
        );
    }

    handleUser(username){
        this.setState({email: username.target.value});
    }
    handlePassword(userpwd){
        this.setState({password: userpwd.target.value});
    }
    handleSubmit(){
        if(localStorage.getItem("users")==null){
            localStorage.setItem("users",JSON.stringify([{"username":"luis","email":"luis@mail.com","password":"ieti123"}]));
        } 
        console.log(localStorage.getItem("users"));
        var listUsers = JSON.parse(localStorage.getItem("users"));
        console.log(listUsers);
        console.log(this.props);
        var ingreso = false;
        for (var i = 0; i < listUsers.length; i++){
            if (listUsers[i].email == this.state.email && listUsers[i].password == this.state.password ){
                localStorage.setItem("username",listUsers[i].username);
                localStorage.setItem("email",listUsers[i].email);
                localStorage.setItem("IsLoggedIn",true);
                ingreso = true;
            }
        }
        if (!ingreso){
            alert("Credenciales Invalidas :(");
        }else {
            //alert("Cambie el hpta path porfaaaaaaaaaaaaaaaa");
            window.location.href = "/todo";
            this.props.history.push("/todo");
        }
    }
}