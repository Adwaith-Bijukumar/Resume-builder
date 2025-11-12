import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { Link } from 'react-router-dom';
import { Tooltip } from '@mui/material';
function Header() {
    const projectInfo = "The Resume Builder is a web-based application designed to help users create professional resumes quickly and easily. It allows users to input personal details, education, skills, and experience, then automatically generates a well-formatted resume. Built using HTML, CSS, and JavaScript, this project focuses on clean UI design, responsive layout, and simple user interaction."
  return (
     <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static "sx={{backgroundColor:'purple'}}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <img width={'30px'} src="https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/8e/6b/1e/8e6b1ece-0f36-79b3-cffc-0b109945c08d/AppIcon-1x_U007emarketing-0-8-0-0-85-220-0.png/1200x600wa.png" alt="logo" />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link to={'/'} className='text-light text-decoration-none'>rBuilder</Link>
          </Typography>
         <Tooltip title={projectInfo}><Button color="inherit">About us</Button></Tooltip>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Header