import {Button, Card, CardActions, CardContent, CardMedia, Typography} from "@mui/material";
import logo from "../../store/logo_nh-collection.svg";

const Media = () =>{
    return <Card sx={{ maxWidth: 220, height:300 }}>
            <CardMedia
                sx={{ height: 140,width:220 }}
                image={logo}
                title="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    1st poster
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    lorem ipsum sadasda dsadsad
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">preview</Button>
                <Button size="small">Edit</Button>
                <Button size="small">Delete</Button>
            </CardActions>
        </Card>
}
export default Media