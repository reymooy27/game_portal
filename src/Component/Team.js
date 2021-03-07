import React, { useEffect, useState } from 'react'
import './Team.css'
import axios from '../axios'
import { Link, useParams } from 'react-router-dom'

function Team() {


  const {id, game} = useParams()
  const API_KEY = 'ZwTfMpV9PIrXFK8pa2cInTeOs9d__50AlZbvpftdB4-GOp-VLJ8'

  const [team, setTeam] = useState([])

  useEffect(() => {
    axios.get(`https://api.pandascore.co/${game}/teams?token=${API_KEY}&filter[id]=${id}`)
    .then(res=> setTeam(res.data))
    .catch(err=> console.log(err))
  }, [id,game])
  return (
    <div>
      <div className='single--tournament'>
        <div className='league'>
          <div className='league--image'>
            <img src={team[0]?.image_url} alt={team[0]?.name}/>
          </div>
          <h1>{team[0]?.name}</h1>
        </div>
        <div className='league--series'>
          <h1>Player List</h1>
          <div className='league--series--list player--list'>
            {team[0]?.players?.length < 1 ? <h1>Tidak ada pemain</h1> : team[0]?.players?.map(s=>(
              <Link key={s?.id} to={`/player/${game}/${s.id}`}>
                <img src={s?.image_url} alt={s?.name}/>
                <h1>{`${s?.first_name} ${s?.last_name}`}</h1>
                <span>{s?.name}</span>
              </Link>
            ))}
          </div>
        </div>
    </div>
    </div>
  )
}

export default Team
