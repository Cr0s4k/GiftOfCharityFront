import React from 'react'
import './style.css'
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import {Button, Link} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";

class LoginFrom extends React.Component {
    render() {
        return (
            <Grid container id="loginFormGrid" justify="center">
                <Grid item sm={5} xs={7}>
                    <TextField
                        className="loginInputs"
                        id="filledName"
                        label="Email"
                        // value=""
                        // onChange={this.handleChange('name')}
                        margin="normal"
                        variant="filled"
                        style={{width: "100%"}}
                    />
                </Grid>
                <Grid item sm={12}/>
                <Grid item sm={5} xs={7}>
                    <TextField
                        id="filledPasswordInput"
                        label="Password"
                        type="password"
                        autoComplete="current-password"
                        margin="normal"
                        variant="filled"
                        style={{width: "100%"}}
                    />
                </Grid>
                <Grid item sm={12}/>
                <Grid item sm={5} xs={7}>
                    <Button variant="contained" color="primary" id="loginBtn" size="large">Login</Button>
                </Grid>
                <Grid item sm={12} />
                <Grid item sm={5} xs={7} container justify="center" id="loginFormTexts">
                    <Grid item sm={6} xs={12}>
                        <Typography variant="body1" gutterBottom align="center">
                            <Link href="/resetpassword">Forgot your password?</Link>
                        </Typography>
                    </Grid>
                    <Grid item sm={6} xs={12}>
                        <Typography variant="body1" gutterBottom align="center">
                            <Link href="/register">Don't have an account? <b>Get Started</b></Link>
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
        );
    }
}

export default LoginFrom;