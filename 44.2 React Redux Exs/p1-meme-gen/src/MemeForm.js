import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import "./MemeForm";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

const DEFAULT_FORM = {
    topText: "",
    urlLink: "",
    bottomText: ""
};

function MemeForm({addingMeme}) {
    const [form, setForm] = useState(DEFAULT_FORM);

    function handleSubmit(e) {
        e.preventDefault();
        addingMeme({...form, id: uuidv4() });
        setForm(DEFAULT_FORM);
    }

    function handleChange(e) {
        const {name,value} = e.target;
        setForm(f => ({ ...f, [name]:value}));
    }

    return (
      <Grid container justifyContent="center">
        <Grid item xs={12} >
          <h2>Generate your Meme</h2>
          <Button variant="contained" color="secondary" size="large">
            <a color="success" href="https://giphy.com/reactions">
            </a> 
            Check here to find giphy image
          </Button>
          <Box
           component="form"
           onSubmit={handleSubmit}
           sx={{
             '& > :not(style)': { m: 5 },
            }}
            noValidate
            // spacing={2}
          >
          <div>
            <label htmlFor="urlLink">Image URL {' '}</label>
            <TextField 
             id="outlined-basic" 
             label="Image URL" 
             variant="outlined" 
             name="urlLink"
             onChange={handleChange}
             value={form.urlLink}
             type="text"
           /> {' '}
           <label htmlFor="topText">Top Text {' '}</label>
           <TextField 
             id="outlined-basic" 
             label="Top Text " 
             variant="outlined" 
             name="topText"
             onChange={handleChange}
             value={form.topText}
             type="text"
            /> {' '}
           <label htmlFor="bottomText">Bottom Text {' '}</label>
           <TextField 
             id="outlined-basic" 
             label="Bottom Text " 
             variant="outlined" 
             name="bottomText"
             onChange={handleChange}
             value={form.bottomText}
             type="text"
           /> {' '}
           </div>
           <div className="card">
         <Button variant="contained" color="secondary" size="large" type="submit" id="form_submit">
           Check your Meme!
         </Button>
       </div>
      </Box>
     </Grid>
    </Grid>
  )
}

export default MemeForm;