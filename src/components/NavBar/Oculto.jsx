import React from 'react'
import { withWidth, Typography, Hidden, Button } from '@material-ui/core'

const Oculto = (props) => {
    return (
        <div>
            <Typography variant="h5" color="initial">
                Ancho:{props.width}
            </Typography>

            <Hidden>
                <Button variant="contained" color="primary">
                 xs
                </Button>
            </Hidden>
        </div>
    )
}

export default withWidth()(Oculto)
