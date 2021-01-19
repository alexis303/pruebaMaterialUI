import React, {Fragment} from 'react'
import {
    makeStyles, 
    Paper,
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardMedia,
    Button,
    Typography,
    Grid
} from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    paper1: {
        padding: theme.spacing(2),
        backgroundColor: "#777",
        textAlign: "center",   
    },

    root: {
        maxWidth: 345,
        margin:20,
        backgroundColor: "#222",
        color:"#0099ff"
    },

    media: {
        height: 140,
    },

    espacio: {
        padding: theme.spacing(2),
    },
    colorSubTit:{
        color:"#009900",
        fontStyle:"italic",
        fontWeight:900
    }
}))


const items = [
    {
        src: 'https://res.cloudinary.com/practicaldev/image/fetch/s--RsPdOQIX--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/i/eaapvdl269tttbzvsn3i.jpeg',
        altText: 'Slide 1',
        caption: 'Slide 1',
        id:1
    },
    {
        src: 'http://cssslider.com/sliders/demo-8/data1/images/dirt_bike_motorcycle_jump_autumn.jpg',
        altText: 'Slide 2',
        caption: 'Slide 2',
        id:2
    },
    {
        src: 'https://wowslider.com/sliders/demo-80/data1/images/sheet546475_1920.jpg',
        altText: 'Slide 3',
        caption: 'Slide 3',
        id:3
    }
];


const SecPresentacion = () => {

    const classes = useStyles();
    
    const slides = items.map((item) => {
        return (
            
            
            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image={item.src}
                        title="Contemplative Reptile"
                        key={item.id}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {item.altText}
                        </Typography>
                        <Typography variant="body2" className={classes.colorSubTit} component="p">
                            {item.caption}
                        </Typography>
                    </CardContent>
                </CardActionArea>

                <CardActions>
                    <Button size="small" color="primary">
                        Share
                    </Button>
                    <Button size="small" color="secondary">
                        Learn More
                    </Button>
                    <Button size="small" className={classes.colorSubTit} >
                        {item.id}
                    </Button>
                </CardActions>
            </Card>
        );
    });


    return (
        <Fragment>
            <Paper className={classes.paper1}>
             
                <div>
                    <h3>Aca ira la presentacion</h3> 
                </div>

                <div className={classes.espacio}>
                    <Grid container
                        direction="row"
                        justify="center"
                        alignItems="center"
                        
                        >
                        {slides}
                    </Grid>
                </div>
            </Paper>
        </Fragment>
    )
}

export default SecPresentacion
