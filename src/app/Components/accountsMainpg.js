import './accountsMainpg.css'
import React, {useState, useEffect} from 'react';
import HttpService from '../../services/http-service';
import {Link} from 'react-router-dom'

const http = new HttpService()

function AccountsMain(){
    
    useEffect(()=>{
        getAcc()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    
    function searchChange(e){
        e.preventDefault()
        let currlist = []
        let newlist = []
        
        if(e.target.value !==""){
            currlist = accounts
            newlist = currlist.filter(item =>{
                const lc = item.name.toLowerCase()
                const filter = e.target.value.toLowerCase()
                return lc.includes(filter)
            })
        }
        else{
            newlist = accounts
        }
        if(newlist !== []){
            setFiltered(newlist)}
            else{setFiltered([])}
            
        }
        
        const [accounts, setAcccount] = useState([])
        const [filtered, setFiltered] = useState([])
        
        const getAcc = async() => {
            const acc = await http.getAccounts()
            setAcccount(acc)
            setFiltered(acc)
        }

        const delAcc = async (e)=> {
            let id = e.target.id
            let res = await http.deleteAcc(id)
            console.log(res)
            getAcc()
        }

    return(
        <div className="fragment-acc-main container">
            <div className="top row">
                <input onChange={searchChange} className="input-control search col-4" placeholder="Search"></input>
                <Link className="btn btn add-acc" to="/add-acc">Add Account</Link>
            </div>
            {filtered? 
            <div className="list-group">
                {filtered.map(i =>
                    <div key={i.id} style={{display:"flex"}}>
                    <Link style={{padding: "10px 25px"}} to={`/${i.id}`} key={i.name} className="list-group-item">
                        <label>{i.name}</label>
                        <label style={{float: "right"}}>{i.id}</label><b>
                        <label style={{float:"right", fontWeight:"lighter"}}>{"Acc Id: \u00a0\u00a0"}</label></b>
                    </Link>
                        <button id={i.id} onClick={delAcc} className="del-acc">Delete</button>
                    </div> )
                    } 
            </div>: <h2>Account Not Found!</h2>}
        </div>
    )
}

export default AccountsMain 