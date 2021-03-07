import React, { useEffect, useState } from 'react'
import './Match.css'
import axios from '../axios'
import {useParams } from 'react-router-dom'

function Match() {
  

  const {id, game} = useParams()
  const API_KEY = 'ZwTfMpV9PIrXFK8pa2cInTeOs9d__50AlZbvpftdB4-GOp-VLJ8'

  const [match, setTeam] = useState([])

  useEffect(() => {
    axios.get(`https://api.pandascore.co/${game}/matches?token=${API_KEY}&filter[id]=${id}`)
    .then(res=> setTeam(res.data))
    .catch(err=> console.log(err))
  }, [id,game])

  return (
    <div className='single--tournament'>
        <div className='league'>
          <div className='league--image'>
            <img src={match[0]?.league?.image_url} alt={match[0]?.name}/>
          </div>
          <h1>{match[0]?.league?.name}</h1>
        </div>
        <div className='league--series'>
          <h1>{match[0]?.name}</h1>
          <div className='league--series--list'>
            <div className='match--result'>
              <div className='match--result--team'>
                <h3>{match[0]?.opponents[0]?.opponent?.name}</h3>
                <div className="match--result--team--logo">
                  <img src={match[0]?.opponents[0]?.opponent?.image_url} alt=""/>
                </div>
                <div className="match--result--team--score">
                  <h1>{match[0]?.results[0]?.score}</h1>
                </div>
              </div>
              <div className="match--result--versus">
                <h1>VS</h1>
              </div>
              <div className='match--result--team'>
                <h3>{match[0]?.opponents[1]?.opponent?.name}</h3>
                <div className="match--result--team--logo">
                  <img src={match[0]?.opponents[1]?.opponent?.image_url} alt=""/>
                </div>
                <div className="match--result--team--score last">
                  <h1>{match[0]?.results[1]?.score}</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Match
