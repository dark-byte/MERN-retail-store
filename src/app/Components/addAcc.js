import React, { useEffect, useState} from 'react';
import HttpService from '../../services/http-service'
import './addAcc.css'

const http = new HttpService()

function AddAcc() {

    useEffect(()=>{
        setPh_nos([""])
    }, [])

    const postAcc = (e) =>{
        e.preventDefault()
        var nm = name
        var phNos = ph_nos
        http.postAccount(nm, phNos).then(res => {console.log(res)}, err => {console.log(err)})
        console.log(name + "\n" + phNos)
    }

    const setValue = (e) =>{
        if(e.target.placeholder === "Name"){
            setName(e.target.value)}
        else{
            var text = e.target.value
            const newPhnos = ph_nos.slice()
            newPhnos[e.target.id] = text
            setPh_nos(newPhnos)
        }console.log(e.target.id)
    }

    const addInp = ()=> {
        let newPhnos = ph_nos.slice()
        newPhnos.push("")
        setPh_nos(newPhnos)
    }

    const removePh_nos = (e)=> {
        e.preventDefault()
        if(ph_nos.length > 1){
            let temp = ph_nos.slice()
            temp.splice(e.id, 1)
            setPh_nos(temp)
        }
    }

    const [name, setName] = useState("")
    const [ph_nos, setPh_nos] = useState([])


    return(
        <form>
            <div className="container">
            <input className="form-control" onChange={setValue} placeholder="Name"></input>
                {
                ph_nos.map((ph_no, i) =>
                    <div style={{display: "flex", width: "100%", alignItems: "center"}} key={i}>
                        <input id={i} className="form-control" onChange={setValue} placeholder={"Phone No. " + String(i+1)}></input>
                        <button id={i} onClick={removePh_nos} type="button" className="btn remove btn-danger">Remove</button>
                    </div>)
                }
            <button className="btn-outline-primary btn add-ph" type="button" onClick={addInp}>Add Phone No.</button>
            <button className="btn btn-primary" type="submit" onClick={postAcc}>Submit</button>
            </div>
        </form>
    )
    
}

export default AddAcc