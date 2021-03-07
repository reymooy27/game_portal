import React from 'react'
import './Navbar.css'
import {NotificationsNone, ChatBubbleOutline} from '@material-ui/icons/';
import Avatar from '@material-ui/core/Avatar';
import img from '../image/Untitled-1.png'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import {useMediaQuery} from '@material-ui/core';
import { useHistory } from 'react-router';
import { useDispatch } from 'react-redux';
import { menu } from '../redux/reducers/appSlice';

function Navbar({noBack}) {

  const dispatch = useDispatch()

  const matches = useMediaQuery('(max-width:1024px)');

  const history = useHistory()

  const useStyles = makeStyles(() => ({
  root: {
    display: matches ? 'none' : 'block'
  },
  show:{
    display: matches ? 'block' : 'none' ,
    color: 'white'
  }
}));

  const classes = useStyles();

  return (
    <div className='navbar'>
      <div className='navbar--left'>
        {!noBack && <IconButton onClick={()=> history.goBack()} className={classes.show}>
          <ArrowBackIosIcon/>
        </IconButton>}
        <div className='navbar--search'>
          <input type='text' placeholder='Search...'/>
        </div>
        <div className='navbar--info'>
          <NotificationsNone/>
          <ChatBubbleOutline/>
        </div>
      </div>
      <div className='navbar--right'>
        <IconButton onClick={()=> dispatch(menu())} className={classes.show}>
          <MenuIcon/>
        </IconButton>
        <div className='navbar--right--menu'>
          <span>Dota 2</span>
          <span>LineAge2</span>
          <Avatar className={classes.root} alt="Remy Sharp" src={img} />
        </div>
      </div>  
    </div>
  )
}

export default Navbar
