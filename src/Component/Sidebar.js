import React from 'react'
import './Sidebar.css'
import {Facebook, 
  Twitter, 
  Instagram, 
  YouTube,
  PersonOutline,
  Search,
  Group,
  Chat,
  SportsEsports,
  Favorite,
  Assignment,
  Subscriptions,
  Help,
  ConfirmationNumber,
  PermDataSetting,
  AccountBalanceWallet,
  Score,
  ImageAspectRatio,
  DeveloperBoard
} from '@material-ui/icons';
import {Link} from 'react-router-dom'
import { showMenu } from '../redux/reducers/appSlice';
import { useSelector } from 'react-redux';

function Sidebar() {

  const menu = useSelector(showMenu)

  return (
    <div className={menu ? 'sidebar active' : 'sidebar'}>
      <div className='sidebar--logo'>
        <h3>Game Portal</h3>
      </div>
      <div className='sidebar--play--button'>
        <button>Play</button>
      </div>
      <div className='sidebar--menu'>
        <Link to='/'><PersonOutline/> Profile</Link>
        <Link to='/'><Search/> Search</Link>
        <Link to='/'><Group/> Friends</Link>
        <Link to='/'><Chat/> Messages</Link>
        <Link to='/'><DeveloperBoard/> Developments</Link>
        <Link to='/'><ImageAspectRatio/> Matches</Link>
        <Link to='/'><Score/> Score</Link>
        <Link to='/'><Assignment/>Tasks</Link>
        <Link to='/'><Favorite/> Favorite</Link>
        <Link to='/leagues'><SportsEsports/> League</Link>
        <Link to='/'><AccountBalanceWallet/> Balance</Link>
        <Link to='/'><Subscriptions/> Suggestions</Link>
      </div>
      <div className='sidebar--social'>
        <Twitter/>
        <Facebook/>
        <Instagram/>
        <Twitter/>
        <YouTube/>
        <Facebook/>
      </div>
      <div className='sidebar--help'>
        <a href='/'><Help/> Help</a>
        <a href='/'><ConfirmationNumber/> Conditions</a>
        <a href='/'><PermDataSetting/> Confidentialy</a>
      </div>
    </div>
  )
}

export default Sidebar
