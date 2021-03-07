import React, { useEffect, useState } from 'react'
import './Tournament.css'
import axios from '../axios'
import { Link, useParams } from 'react-router-dom'

function Tournament() {
const {id, game} = useParams()
  const API_KEY = 'ZwTfMpV9PIrXFK8pa2cInTeOs9d__50AlZbvpftdB4-GOp-VLJ8'

  const [tournament, setTournament] = useState([])

  useEffect(() => {
    axios.get(`/${game}/tournaments?token=${API_KEY}&filter[id]=${id}`)
    .then(res=> setTournament(res.data))
    .catch(err=> console.log(err))
  }, [game,id])

  return (
    <div className='single--tournament'>
      <div className='league'>
        <div className='league--image'>
          <img src={tournament[0]?.league?.image_url} alt={tournament[0]?.name}/>
        </div>
        <h1>{tournament[0]?.serie?.full_name}</h1>
        <h1>{tournament[0]?.name}</h1>
      </div>
      <div className='league--series'>
        <h1>Team List</h1>
        <div className='league--series--list team--list'>
          {tournament[0]?.teams?.length < 1 ? <h1>Tidak ada team</h1> : tournament[0]?.teams?.map(s=>(
            <Link key={s?.id} to={`/team/${game}/${s.id}`}>
              <img src={s.image_url} alt={s.name}/>
              <h3>{s.name}</h3>
              <span>{s.acronym}</span>
            </Link>
          ))}
        </div>
      </div>

      <div className='league--series'>
        <h1>Matches List</h1>
        <div className='league--series--list'>
          {tournament[0]?.matches?.length < 1 ? <h1>Tidak ada team</h1> : tournament[0]?.matches?.map(s=>(
            <Link key={s?.id} to={`/match/${game}/${s.id}`}>{s?.name}</Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Tournament
