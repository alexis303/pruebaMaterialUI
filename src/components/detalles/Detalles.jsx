import React from 'react'

import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';




const tileData  = [
    {
        img: 'https://res.cloudinary.com/practicaldev/image/fetch/s--RsPdOQIX--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/i/eaapvdl269tttbzvsn3i.jpeg',
        title: 'Slide 1',
        author: 'Slide 1',
        featured: true
    },
    {
        img: 'http://cssslider.com/sliders/demo-8/data1/images/dirt_bike_motorcycle_jump_autumn.jpg',
        title: 'Slide 2',
        author: 'Slide 2',
        featured: false
    },
    {
        img: 'https://wowslider.com/sliders/demo-80/data1/images/sheet546475_1920.jpg',
        title: 'Slide 3',
        author: 'Slide 3',
        featured: false
    },
    {
        img: 'https://res.cloudinary.com/practicaldev/image/fetch/s--RsPdOQIX--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/i/eaapvdl269tttbzvsn3i.jpeg',
        title: 'Slide 1',
        author: 'Slide 1',
        featured: true
    },
    {
        img: 'http://cssslider.com/sliders/demo-8/data1/images/dirt_bike_motorcycle_jump_autumn.jpg',
        title: 'Slide 2',
        author: 'Slide 2',
        featured: false
    },
    {
        img: 'https://wowslider.com/sliders/demo-80/data1/images/sheet546475_1920.jpg',
        title: 'Slide 3',
        author: 'Slide 3',
        featured: false
    }
];


const useStyles = makeStyles((theme) => ({
    root: {
        height: '100%',
        marginTop: 100,
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: '#333',
    },
    gridList: {
        marginTop: 100,
      width: 1300,
      height: 850,
      // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
      transform: 'translateZ(0)',
    },
    titleBar: {
      background:
        'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
        'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
    },
    icon: {
      color: 'white',
    },
  }));


const Detalles = () => {

    const classes = useStyles();

    return (
        <div className={classes.root}>
        <GridList cellHeight={200} spacing={2} className={classes.gridList}>
            {tileData.map((tile) => (
                <GridListTile key={tile.img} cols={tile.featured ? 2 : 1} rows={tile.featured ? 3 : 1.5}>
                    <img src={tile.img} alt={tile.title} />
                    <GridListTileBar
                    title={tile.title}
                    titlePosition="top"
                    actionIcon={
                        <IconButton aria-label={`star ${tile.title}`} className={classes.icon}>
                        <StarBorderIcon />
                        </IconButton>
                    }
                    actionPosition="left"
                    className={classes.titleBar}
                    />
                </GridListTile>
            ))}
        </GridList>
    </div>
    )
}

export default Detalles