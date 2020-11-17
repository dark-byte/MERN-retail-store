/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import './viewAcc.css'
import HttpService from '../../services/http-service'
import DebtList from './debtList'
import AddDebtItem from './addDebtItem'

const http = new HttpService()

function ViewAcc({match}){

    useEffect(()=>{
        getAcc()
    }, [])

    const [acc, setAcc] = useState({})
    const [phNos, setPhNos] = useState([])
    const [total, setTotal] = useState(0)

    const getAcc = async()=>{
        http.getAcc(match.params.id).then(data => {
            setAcc(data[0])
            setPhNos(data[0].ph_nos)})
    }

    const clearDebt = ()=>{
        console.log(match.params.id)
        http.clearDebt(match.params.id).then(res =>{console.log(res)})
    }

    const getTotal = async() =>{
        let ttl = 0.0
        let debt = await http.getDebt(match.params.id).then(debt =>{return debt})

        debt.forEach(item =>{
            ttl += (item.price * item.quantity)
        })
        setTotal(ttl)
        console.log(total)
    }

    return(
        <div style={{display: "block"}} className="container">
            <div className="row">
                <div className="col-lg" style={{alignItems:"center", paddingRight:"100px" ,marginBottom:"40px"}}>
                    <h2 style={{fontWeight: 400, textAlign:"start"}}><b>Name: {"\u00a0\u00a0"}</b> {acc.name}</h2>
                    <div style={{display:"flex", alignItems:"center"}}>
                        <h2 className="ph-title"><b>Phone Nos: </b></h2>
                        {phNos.map((nos, i) => 
                            <h2 style={{fontWeight: 400}} className="ph" key={nos}>{nos + ((i === (phNos.length -1)) ? "" : ",")}</h2>
                        )}
                    </div> 
                    
                    <button onClick={clearDebt} className="btn btn-danger" style={{marginTop:"20px"}}>Clear Debt</button>
                    <button onClick={getTotal} className="btn btn-outline-primary">Total</button>
                    
                    {total ? <p className="total"><b>Total: </b>{"\u00a0"} Rs. {total}</p>: <></>}
                    <DebtList id ={match.params.id}/>
                </div>
                <div className="col-sm">
                   <AddDebtItem id={match.params.id}/>
                </div>
            </div>
        </div>
    )
}

export default ViewAcc