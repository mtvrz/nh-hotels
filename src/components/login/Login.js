import classes from "./Login.module.css";
import {Button, TextField} from "@mui/material";
import logo from "../../store/logo_nh-collection.svg"

const Login = () =>{
    return <div className={classes.flex}>
        <div className={classes.container}>
            <div>
                <img src={logo} alt={"NH hotels logo"}/>
            </div>
            <div className={classes.inputs}> <TextField id="standard-basic" fullWidth label="Username" variant="standard" />
                <TextField id="standard-basic" fullWidth label="Password" variant="standard" type="password" />
            </div>
                <Button sx={{minWidth:120}} variant="contained"  size="large">Log In</Button>
        </div>
    </div>
}

export default Login