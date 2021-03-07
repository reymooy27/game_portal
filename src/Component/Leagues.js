import React, { useEffect, useState,  } from 'react'
import './Leagues.css'
import axios from '../axios'
import {Link} from 'react-router-dom'

function Leagues() {
  const [pubgLeagues, setpubgLeagues] = useState([])
  const [csgoLeagues, setCsgoLeagues] = useState([])
  const [dotaLeagues, setDotaLeagues] = useState([])
  const [lolLeagues, setlolLeagues] = useState([])
  const API_KEY = 'ZwTfMpV9PIrXFK8pa2cInTeOs9d__50AlZbvpftdB4-GOp-VLJ8'

  useEffect(() => {
    axios.get(`/pubg/leagues?token=${API_KEY}&page[size]=50`)
    .then(res=> setpubgLeagues(res.data))
    .catch(err=> console.log(err))
  }, [])

  useEffect(() => {
    axios.get(`/csgo/leagues?token=${API_KEY}&page[size]=100`)
    .then(res=> setCsgoLeagues(res.data))
    .catch(err=> console.log(err))
  }, [])

  useEffect(() => {
    axios.get(`/dota2/leagues?token=${API_KEY}&page[size]=50`)
    .then(res=> setDotaLeagues(res.data))
    .catch(err=> console.log(err))
  }, [])

  useEffect(() => {
    axios.get(`/lol/leagues?token=${API_KEY}&page[size]=50`)
    .then(res=> setlolLeagues(res.data))
    .catch(err=> console.log(err))
  }, [])

  return (
    <div className='tournament'>
      <div className='tournament--heading'>
        <h1>Leagues</h1>
      </div>
      <div className='tournaments--wraper'>
        <div className='pubg--leagues'>
          <div className='pubg--leagues--heading'>
            <h2>PUBG Leagues</h2>
          </div>
          <div className='pubg--leagues--wraper'>
            {pubgLeagues.map(l=>(
              <Link key={l?.id} to={`/league/${l.videogame.slug.replace('-','')}/${l.id}`} className='pubg--league'>
                <img src={l.image_url} alt={l.name}/>
                <h4>{l.name}</h4>
              </Link>
            ))}
          </div>
        </div>

        <div className='pubg--leagues'>
          <div className='pubg--leagues--heading'>
            <h2>CS:GO Leagues</h2>
          </div>
          <div className='pubg--leagues--wraper'>
            {csgoLeagues.map(l=>(
              <Link key={l?.id} to={`/league/${l.videogame.slug.replace('-','')}/${l.id}`} className='pubg--league'>
                <img src={l.image_url} alt={l.name}/>
                <h4>{l.name}</h4>
              </Link>
            ))}
          </div>
        </div>

        <div className='pubg--leagues'>
          <div className='pubg--leagues--heading'>
            <h2>DOTA2 Leagues</h2>
          </div>
          <div className='pubg--leagues--wraper'>
            {dotaLeagues.map(l=>(
              <Link key={l?.id} to={`/league/${l.videogame.slug.replace('-','')}/${l.id}`} className='pubg--league'>
                <img src={l.image_url} alt={l.name}/>
                <h4>{l.name}</h4>
              </Link>
            ))}
          </div>
        </div>

        <div className='pubg--leagues'>
          <div className='pubg--leagues--heading'>
            <h2>League Of Legends Leagues</h2>
          </div>
          <div className='pubg--leagues--wraper'>
            {lolLeagues.map(l=>(
              <Link key={l?.id} to={`/league/lol/${l.id}`} className='pubg--league'>
                <img src={l.image_url} alt={l.name}/>
                <h4>{l.name}</h4>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Leagues
