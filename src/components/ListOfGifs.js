import React from "react"
import Gif from "./Gif"
import getGifs from "../services/getGifs"
import { useEffect, useState } from "react"

export default function ListOfGifs({params}){
    const {keyword} =params
    const[loading, setLoading] = useState(false)

    const [gifs, setGifts] = useState([])

    useEffect(function(){
        setLoading(true)
     getGifs({ keyword })
     .then(gifs => {
        setGifts(gifs)
        setLoading(false)
     })
         
    },[keyword])
    

    return <div>
    {
    gifs.map(({id, title, url}) => 
      <Gif
          key={id}
          id={id}
           title={title}
           url={url} />
    )}
    </div>

    }