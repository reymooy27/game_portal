import React, { useEffect, useState } from 'react'
import './League.css'
import axios from '../axios'
import {
  Link,
  useParams
} from "react-router-dom";

function League() {
let { id,game } = useParams();

  const API_KEY = 'ZwTfMpV9PIrXFK8pa2cInTeOs9d__50AlZbvpftdB4-GOp-VLJ8'

  const [tournamentData, settournamentData ] = useState([])
  
  useEffect(() => {
    axios.get(`/${game}/leagues?token=${API_KEY}&filter[id]=${id}`)
    .then(res=> settournamentData(res.data))
    .catch(err=> console.log(err))
  }, [id,game])

  return (
    <div className='single--tournament'>
        <div className='league'>
          <div className='league--image'>
            <img src={tournamentData[0]?.image_url} alt={tournamentData[0]?.name}/>
          </div>
          <h1>{tournamentData[0]?.name}</h1>
        </div>
        <div className='league--series'>
          <h1>Series List</h1>
          <div className='league--series--list'>
            {tournamentData[0]?.series?.length < 1 ? <h1>Tidak ada series</h1> : tournamentData[0]?.series?.map(s=>(
              <Link key={s?.id} to={`/series/${game}/${s.id}`}>{s?.full_name}</Link>
            ))}
          </div>
        </div>
    </div>
  )
}

export default League
