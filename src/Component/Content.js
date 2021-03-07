import React from 'react'
import img from '../image/Untitled-1.png'
import './Content.css'
import Avatar from '@material-ui/core/Avatar';
import AvatarGroup from '@material-ui/lab/AvatarGroup';
import { makeStyles } from '@material-ui/core/styles';
import {Share, Facebook,
Twitter,
YouTube,AddCircleOutline} from '@material-ui/icons';
import dota from '../image/8a8b50da2bc4afa933718061fe291520.png'
import trophy1 from '../image/iconmonstr-trophy-5-240 (1).png'
import trophy2 from '../image/iconmonstr-trophy-5-240.png'
import CanvasJSReact from '../assets/canvasjs.react'
import { Link } from 'react-router-dom';
import { IconButton } from '@material-ui/core';
// const CanvasJS = CanvasJSReact.CanvasJS;
  const useStyles = makeStyles(() => ({
  root: {
    color: '#516363'
  },
}));


const CanvasJSChart = CanvasJSReact.CanvasJSChart;
const options = {
			animationEnabled: true,
      animationDuration: 2000,
			exportEnabled: true,
      backgroundColor: "#1E1E20",
      height: 150,
			axisX: {
				interval: 2,
        labelFontColor: "white",
			},
			axisY: {
        labelFontColor: "white",
			},
			data: [{
				type: "line",
				toolTipContent: "Week {x}: {y}%",
        lineColor: "#814AC9",
        markerColor: "#814AC9",
				dataPoints: [
					{ x: 1, y: 64 },
					{ x: 2, y: 17 },
					{ x: 3, y: 15 },
					{ x: 4, y: 23 },
					{ x: 5, y: 22 },
					{ x: 6, y: 25 },
					{ x: 7, y: 58 },
					{ x: 8, y: 43 },
					{ x: 9, y: 53 },
					{ x: 10, y: 54 },
					{ x: 11, y: 61 },
					{ x: 12, y: 60 },
					{ x: 13, y: 55 },
					{ x: 14, y: 60 },
					{ x: 15, y: 56 },
					{ x: 16, y: 60 },
					{ x: 17, y: 59.5 },
					{ x: 18, y: 63 },
					{ x: 19, y: 58 },
					{ x: 20, y: 54 },
					{ x: 21, y: 59 },
					{ x: 22, y: 64 },
					{ x: 23, y: 59 }
				]
			}]
		}

  
  function Content() {
  const classes = useStyles();

  return (
    <div className='content'>
      <div className='content--menu'>
        <Avatar src={img} alt='rey'/>
        <button className='content--button--stream'>Stream</button>
        <button className='content--button--donate'>To donate</button>
        <span>Search: Team</span>
        <button>i</button>
      </div>

    <div className='content--tab'>
      <div className='content--tab--link'>
        <Link className='content--tab--active' to='/'>Basic Information</Link>
        <Link to='/'>Statistic</Link>
        <Link to='/'>Team</Link>
        <Link to='/'>Achievements</Link>
        <Link to='/'>Friends</Link>
      </div>
      <div className='content--tab--icon'>
        <IconButton className={classes.root}>
          <Facebook/>
        </IconButton>
        <IconButton className={classes.root}>
          <Twitter/>
        </IconButton>
        <IconButton className={classes.root}>
          <YouTube/>
        </IconButton>
        <IconButton className={classes.root}>
          <Share/>
        </IconButton>
        <IconButton className={classes.root}>
          <AddCircleOutline/>
        </IconButton>
      </div>
    </div>

    <div className='content--card--wraper'>
      <div className='content--card card1'>
        <h3>New Reality</h3>
        <h1>New impre<span>ssions</span></h1>
        <p>Wear VR Helmet and start battle now</p>
        <button>PLAY NOW</button>
      </div>
      <div className='content--card card2'>
        <h3>PLAYERUNKNOWN'S</h3>
        <h1>Battlegro<span>unds</span></h1>
        <p>Do not miss the beginning of a new battle season </p>
        <button>PLAY NOW</button>
      </div>
    </div>

    <div className='content--statistic'>
      <div className='content--statistic--heading'> 
        <h2>Statistic</h2>
        <div className='content--statistic--avatar'>
          <AvatarGroup max={4}>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
            <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
            <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
            <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
          </AvatarGroup>
        </div>
      </div>
      <div className='content--statistic--wraper'>
        <img src={dota} alt='dota'/>
        <div className='content--statistic--data'>
          <p>Nickname <span>Dino</span></p>
          <p>Real name <span>Toim Williams</span></p>
          <p>Country <span>USA</span></p>
        </div>
        <div className='content--statistic--data'>
          <p>City <span>New York City</span></p>
          <p>Sport Rating <span>4001</span></p>
          <p>Group Rating <span>3099</span></p>
        </div>
        <div className='content--statistic--data'>
          <p>Winrate <span>49%</span></p>
          <p>Rating on the site <span>41</span></p>
          <p>Position <span>Mdiler</span></p>
        </div>
        <div className='content--statistic--data'>
          <div className='content--statistic--data--prizepool'>
            <img src={trophy1} alt='pp'/>
            <div>
              <span>Prizepool</span>
              <p>10,000</p>
            </div>
          </div>
          <div className='content--statistic--data--prizepool'>
            <img src={trophy1} alt='pp'/>
            <div>
              <span>Prizepool</span>
              <p>10,000</p>
            </div>
          </div>
        </div>
        <div className='content--statistic--data'>
          <div className='content--statistic--data--prizepool'>
            <img src={trophy2} alt='pp'/>
            <div>
              <span>Prizepool</span>
              <p>10,000</p>
            </div>
          </div>
          <div className='content--statistic--data--prizepool'>
            <img src={trophy2} alt='pp'/>
            <div>
              <span>Prizepool</span>
              <p>10,000</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className='content--victory--statistic--wraper'>
      <div className='content--victory--statistic--heading'>
        <h2>Victory statistic</h2>
        <span>Last 30 days</span>
      </div>
      <div className='content--victory--statistic'>
        <CanvasJSChart options = {options}/>
      </div>
    </div>

    <div className='content--hero--statistic--wraper'>
      <div className='content--hero--statistic--heading'>
        <h2>Hero statistic</h2>
        <span>Last 30 days</span>
      </div>
      <div className='content--hero--statistic-wrp'>
        <div className='content--hero--statistic'>
        <div className='content--hero--statistic--top'>
          <div className='content--hero--statistic--top-1'>
              <svg xmlns="http://www.w3.org/2000/svg" 
              width="30" height="30" fill='#2E353D' 
              viewBox="0 0 24 24"><path 
              d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.326 18.266l-4.326-2.314-4.326 2.313.863-4.829-3.537-3.399 4.86-.671 2.14-4.415 2.14 4.415 4.86.671-3.537 3.4.863 4.829z"/></svg>
              <h3>Cyber attack</h3>
          </div>
          <div className='content--hero--statistic--top-2'></div>
        </div>
        <div className='content--hero--statistic--bottom'>
          <div className='content--hero--statistic--bottom-1'>
            <Avatar src='s' alt='v'/>
            <div>
              <h3>Offensive</h3>
              <span>Lorem ipsum dolor</span>
            </div>
          </div>
          <div className='content--hero--statistic--bottom-2'>
            d
          </div>
        </div>
      </div>
      <div className='content--hero--statistic'>
        <div className='content--hero--statistic--top'>
          <div className='content--hero--statistic--top-1 bg2'>
              <svg xmlns="http://www.w3.org/2000/svg" 
              width="30" height="30" fill='#2E353D' 
              viewBox="0 0 24 24"><path 
              d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.326 18.266l-4.326-2.314-4.326 2.313.863-4.829-3.537-3.399 4.86-.671 2.14-4.415 2.14 4.415 4.86.671-3.537 3.4.863 4.829z"/></svg>
              <h3>Cyber attack</h3>
          </div>
          <div className='content--hero--statistic--top-2'></div>
        </div>
        <div className='content--hero--statistic--bottom'>
          <div className='content--hero--statistic--bottom-1'>
            <Avatar src='s' alt='v'/>
            <div>
              <h3>Offensive</h3>
              <span>Lorem ipsum dolor</span>
            </div>
          </div>
          <div className='content--hero--statistic--bottom-2'>
            d
          </div>
        </div>
      </div>
      <div className='content--hero--statistic'>
        <div className='content--hero--statistic--top'>
          <div className='content--hero--statistic--top-1 bg3'>
              <svg xmlns="http://www.w3.org/2000/svg" 
              width="30" height="30" fill='#2E353D' 
              viewBox="0 0 24 24"><path 
              d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.326 18.266l-4.326-2.314-4.326 2.313.863-4.829-3.537-3.399 4.86-.671 2.14-4.415 2.14 4.415 4.86.671-3.537 3.4.863 4.829z"/></svg>
              <h3>Cyber attack</h3>
          </div>
          <div className='content--hero--statistic--top-2'></div>
        </div>
        <div className='content--hero--statistic--bottom'>
          <div className='content--hero--statistic--bottom-1'>
            <Avatar src='s' alt='v'/>
            <div>
              <h3>Offensive</h3>
              <span>Lorem ipsum dolor</span>
            </div>
          </div>
          <div className='content--hero--statistic--bottom-2'>
            d
          </div>
        </div>
      </div>
      <div className='content--hero--statistic'>
        <div className='content--hero--statistic--top'>
          <div className='content--hero--statistic--top-1 bg4'>
              <svg xmlns="http://www.w3.org/2000/svg" 
              width="30" height="30" fill='#2E353D' 
              viewBox="0 0 24 24"><path 
              d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.326 18.266l-4.326-2.314-4.326 2.313.863-4.829-3.537-3.399 4.86-.671 2.14-4.415 2.14 4.415 4.86.671-3.537 3.4.863 4.829z"/></svg>
              <h3>Cyber attack</h3>
          </div>
          <div className='content--hero--statistic--top-2'></div>
        </div>
        <div className='content--hero--statistic--bottom'>
          <div className='content--hero--statistic--bottom-1'>
            <Avatar src='s' alt='v'/>
            <div>
              <h3>Offensive</h3>
              <span>Lorem ipsum dolor</span>
            </div>
          </div>
          <div className='content--hero--statistic--bottom-2'>
            d
          </div>
        </div>
      </div>
      </div>
    </div>
    </div>
  )
}

export default Content
