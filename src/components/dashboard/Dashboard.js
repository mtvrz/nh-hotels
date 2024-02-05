import classes from "./Dashboard.module.css";
import logo from "../../store/logo_nh-collection.svg"
import {
    Avatar,
    Button,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Chip,
    Divider,
    IconButton,
    Typography
} from "@mui/material";
import LogoutIcon from '@mui/icons-material/Logout';
import Media from "./Media";
import AddMedia from "./AddMedia";
const Dashboard = () =>{
    return <div className={classes.flexContainer}>
        <div className={classes.header}>
            <img src={logo} alt={"NH hotels logo"}/>
            <div>
                <Button variant="text">Média</Button>
                <Button variant="text">Uživatelé/Stanice</Button>

            </div>
            <div className={classes.user}>
                UserName
                <Divider orientation="vertical" variant="middle" flexItem />
                <IconButton aria-label="fingerprint">
                    <LogoutIcon />
                </IconButton>
            </div>
        </div>
        <div className={classes.body}>
            <Media/>
            <Media/> <Media/> <Media/> <Media/>


            <AddMedia/>
        </div>
        <div className={classes.footer}><p>Copyright &#169; 2024 Computer System Group a.s.</p></div>
    </div>
}

export default Dashboard