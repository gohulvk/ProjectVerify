  import React from 'react'
  import './Header.css'
  import { NavLink } from 'react-router-dom';
  import { IconButton, Tooltip } from '@mui/material';
  import SideBar from '../SideBar/SideBar';
  import { styled, alpha } from '@mui/material/styles';
  import SearchIcon from '@mui/icons-material/Search';
  import InputBase from '@mui/material/InputBase';
  import Button from '@mui/material/Button';

  const Header = () => {
    const Search = styled('div')(({ theme }) => ({
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: alpha(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
      },
      marginRight: theme.spacing(2),
      marginLeft: 0,
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
      },
    }));
    
    const SearchIconWrapper = styled('div')(({ theme }) => ({
      padding: theme.spacing(0, 2),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }));
    const StyledInputBase = styled(InputBase)(({ theme }) => ({
      color: 'inherit',
      '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 1),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(10)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
          width: '20ch',
        },
      },
    }));
    return (
      <div class="a1">
          <div class="top">
            <SideBar/>
            <div class="name">
              DGL Banking
            </div>
            </div>
            <div class="a1">
              <center>
            <Search>
              <SearchIconWrapper>
                <SearchIcon sx={{color:'white'}} />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ 'aria-label': 'search' }}
                sx={{color:'white'}}
              />
            </Search>
            </center>

              <form>
              
                <Tooltip title="Home">
                  <IconButton>
                        <NavLink to='/' >{<Button variant="text" type="submit" sx={{backgroundColor:'transparent',color:'white'}}>Home</Button>}</NavLink>
                </IconButton>
                </Tooltip>

                <Tooltip title="Contact">
                  <IconButton>
                  <NavLink to='/contact' >{<Button variant="text" type="submit" sx={{backgroundColor:'transparent',color:'white'}}>Contact</Button>}</NavLink>
                </IconButton>
                </Tooltip>

                <Tooltip title="Login">
                  <IconButton>
                  <NavLink to='/login' >{<Button variant="text" type="submit" sx={{backgroundColor:'transparent',color:'white'}}>Login</Button>}</NavLink>
                </IconButton>
                </Tooltip>
                        
              </form>
            </div>
          
      </div>
      
    )
  }

  export default Header