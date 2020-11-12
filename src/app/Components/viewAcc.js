/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import HttpService from '../../services/http-service'

const http = new HttpService()

function ViewAcc({match}){

    useEffect(()=>{
        getAcc()
        console.log(acc)
    }, [])

    const [acc, setAcc] = useState({})

    const getAcc = async()=>{
        const data = await http.getAcc(match.params.id)
        const acc = await data.json()
        setAcc(acc[0])
    }

    return(
        <div>
            <h3>{acc.name}</h3>
            <p>{acc.ph_nos}</p>
        </div>
    )
}

export default ViewAcc