import React, { useEffect, useState } from 'react'
import './Series.css'
import axios from '../axios'
import { Link, useParams } from 'react-router-dom'

function Series() {

  const {id, game} = useParams()
  const API_KEY = 'ZwTfMpV9PIrXFK8pa2cInTeOs9d__50AlZbvpftdB4-GOp-VLJ8'

  const [series, setSeries] = useState([])

  useEffect(() => {
    axios.get(`https://api.pandascore.co/${game}/series?token=${API_KEY}&filter[id]=${id}`)
    .then(res=> setSeries(res.data))
    .catch(err=> console.log(err))
  }, [id,game])

  return (
    <div className='single--tournament'>
        <div className='league'>
          <div className='league--image'>
            <img src={series[0]?.league?.image_url} alt={series[0]?.name}/>
          </div>
          <h1>{series[0]?.league?.name}</h1>
          <h1>{series[0]?.full_name}</h1>
        </div>
        <div className='league--series'>
          <h1>Tournament List</h1>
          <div className='league--series--list'>
            {series[0]?.tournaments?.length < 1 ? <h1>Tidak ada turnamen</h1> : series[0]?.tournaments?.map(s=>(
              <Link key={s?.id} to={`/tournament/${game}/${s.id}`}>{s?.name}</Link>
            ))}
          </div>
        </div>
    </div>
  )
}

export default Series
