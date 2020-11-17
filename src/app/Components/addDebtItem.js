import React, { useEffect, useState } from 'react'
import HttpService from '../../services/http-service'

const http = new HttpService()

function AddDebtItem(id) {

    useEffect(()=>{
        setquantity(1)
    }, [])

    const postDebt = (e)=>{
        e.preventDefault()
        console.log(name)
        console.log(price)
        console.log(quantity)
        console.log(id.id)
        http.addItem(id.id, name, price, quantity).then(res =>{console.log(res)})
    }

    const setVal = (e)=>{
        const i = e.target.id
        if(i === "0"){
            setname(e.target.value)
        }else if(i === "1"){
            setprice(e.target.value)
        }else if(i === "2"){
            setquantity(e.target.value)
        }
    }

    const [name, setname] = useState("")
    const [price, setprice] = useState(0)
    const [quantity, setquantity] = useState(1)
    
    return(<div>
        <h2>Add Item to list</h2>
        <div className="row nm-row">
            <label>Name: </label>
            <input id="0" onChange={setVal} placeholder="Item Name" className="form-control"></input>
        </div>

        <div className="row">
            <div className="col">
                <label>Price</label>
                <input id="1" onChange={setVal} placeholder="Item Price" className="form-control"></input>
            </div>
            <div className="col">
                <label>Quantity</label>
                <input id="2" onChange={setVal} placeholder="Quantity" className="form-control"></input>
            </div>
        </div>
        <button onClick={postDebt} style={{marginTop:"20px"}} className="btn btn-primary">Add</button>
    </div>)
}

export default AddDebtItem;