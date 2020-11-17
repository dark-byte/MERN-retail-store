import React, { useEffect, useState } from 'react'
import HttpService from '../../services/http-service'
import './debtList.css'

const http = new HttpService()

function DebtList(id) {

    useEffect(()=>{
        getDebt()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const getDebt = ()=>{
        http.getDebt(id.id).then(res => {setDebt(res)})
    }

    const [debt, setDebt] = useState([])

    return(<table className="table">
        <thead>
            <tr>
                <th scope="col">Name</th>
                <th scope="col">Price</th>
                <th scope="col">Quantity</th>
            </tr>
        </thead>
        <tbody>
            {debt.map(item =>{
                return(<tr key={(Math.random()* 100)}>
                    <td>{item.name}</td>
                    <td>{item.price}</td>
                    <td>{item.quantity}</td>
                </tr>)
            })}
        </tbody>

    </table>)
}

export default DebtList;