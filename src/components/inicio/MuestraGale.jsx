import React, {Fragment} from 'react'
import {makeStyles, GridList, GridListTile, GridListTileBar  } from '@material-ui/core'
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';


const useStyles = makeStyles((theme) => ({
    root: {

        height:400,
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: '#777',
    },
    gridList: {
        height:400,
        flexWrap: 'nowrap',
        // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
        transform: 'translateZ(0)',
    },
    clImg: {
        height:'100%',
    },
    title: {
        color: theme.palette.primary.light,
    },
    titleBar: {
        background:'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
    },
}));



const tileData  = [
    {
        img: 'https://res.cloudinary.com/practicaldev/image/fetch/s--RsPdOQIX--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/i/eaapvdl269tttbzvsn3i.jpeg',
        title: 'Slide 1',
        author: 'Slide 1'
    },
    {
        img: 'http://cssslider.com/sliders/demo-8/data1/images/dirt_bike_motorcycle_jump_autumn.jpg',
        title: 'Slide 2',
        author: 'Slide 2'
    },
    {
        img: 'https://wowslider.com/sliders/demo-80/data1/images/sheet546475_1920.jpg',
        title: 'Slide 3',
        author: 'Slide 3'
    }
];




const MuestraGale = () => {

    const classes = useStyles();

    return (
        <Fragment>
            <div className={classes.root}>
                <GridList className={classes.gridList} >
                    {tileData.map((tile) => (
                        <GridListTile  rows={2.1} key={tile.img}>
                            <img className={classes.clImg} src={tile.img} alt={tile.title} />
                            <GridListTileBar
                            title={tile.title}
                            classes={{
                                root: classes.titleBar,
                                title: classes.title,
                            }}
                            actionIcon={
                                <IconButton aria-label={`star ${tile.title}`}>
                                <StarBorderIcon className={classes.title} />
                                </IconButton>
                            }
                            />
                        </GridListTile>
                    ))}
                </GridList>
            </div>
        </Fragment>
    )
}

export default MuestraGale
