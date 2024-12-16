import React from 'react'
import '../App.css'
import { Link } from 'react-router-dom';
import menu from '../images/menu.png'
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import { ListItemText } from "@mui/material";

export default function Navbar() {
    const [state, setState] = React.useState({
        bottom: false
      });
    
      const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
          return;
        }
    
        setState({ ...state, [anchor]: open });
      };
    
      const list = (anchor) => (
        <Box
          sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
          role="presentation"
          onClick={toggleDrawer(anchor, false)}
          onKeyDown={toggleDrawer(anchor, false)}
        >
            <List className="text-center">
                <Link to="/login" className="text-black text-lg font-semibold hover:text-gray-300" style={{ textDecoration: 'none' }}>
                    <ListItem disablePadding className="mb-2">
                        <ListItemButton className='w-full'>
                            <ListItemText className="text-xl">Login</ListItemText>
                        </ListItemButton>
                    </ListItem>
                </Link>
                <Link to='/about' className="text-black text-lg font-semibold hover:text-gray-300">
                    <ListItem disablePadding className="mb-2">
                        <ListItemButton>
                            <ListItemText className="text-xl">About</ListItemText>
                        </ListItemButton>
                    </ListItem>
                </Link>
            </List>
        </Box>
      );
  return (
    <div>
        <nav>
            <div className='flex justify-center items-center bg-gradient-to-r from-cyan-500 to-blue-500 h-28'>
                <p className='text-white font-bold text-5xl font-mono shadow-white'>Navbar</p>
            </div>
            <div className="flex justify-start -translate-y-20">
                {['left'].map((anchor) => (
                    <React.Fragment key={anchor}>
                        <Button onClick={toggleDrawer(anchor, true)} className="w-8">
                                <img className='men w-8 ' alt="menu" src={menu} />
                        </Button>
                        <Drawer
                            anchor={anchor}
                            open={state[anchor]}
                            onClose={toggleDrawer(anchor, false)}
                        >
                            {list(anchor)}
                        </Drawer>
                    </React.Fragment>
                ))}
            </div>
        </nav>
    </div>
  )
}
