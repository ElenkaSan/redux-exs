import React from "react";
import PropTypes from "prop-types";
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import Grid from '@mui/material/Grid';

function Meme({ deleteMeme, urlLink, topText, bottomText, id }) {
    function handleDelete() {
        deleteMeme(id);
    }

    return (
        <Grid container justifyContent="center" >
            <Card sx={{ maxWidth: 400 }} className="card">
              <span className="top">{topText}</span> 
              <CardMedia
               component="img"
               height="400"
               width="400"
               src={urlLink}
               alt="meme"
              />
             <span className="bottom">{bottomText}</span>
             <CardActions color="primary">
               <Button variant="outlined" color="error" size="large" onClick={handleDelete}>Delete me</Button>
             </CardActions>
            </Card>
        </Grid>
    )
}

Meme.propTypes = {
    topText: PropTypes.string.isRequired,
    urlLink: PropTypes.string.isRequired,
    bottomText: PropTypes.string.isRequired
};

export default Meme;