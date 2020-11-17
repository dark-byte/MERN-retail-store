import 'whatwg-fetch'

class HttpService {
    getAccounts = async() =>{
       return await fetch('http://192.168.43.180:8000/retail-api/')
       .then(res => {return res.json()})
    }   

    getAcc = async(id) =>{
        const url = `http://localhost:8000/retail-api/${id}`
        return  await fetch(url).then(res =>{return res.json()})
    }

    deleteAcc = async(id) =>{
        return await fetch('http://localhost:8000/retail-api/remove-acc/', {
            method: 'DELETE', 
            headers:{'Content-Type': 'application/json'},
            body: JSON.stringify({id: id})
        }).then(res => {return res.json()})
    }

    postAccount = async (name, ph_nos) => {
        let i = await fetch('http://localhost:8000/retail-api/acc-cnt').then(cnt => {return cnt.json()})
        const id = (i.cnt + 1)
        var promise = await fetch('http://localhost:8000/retail-api/add-acc/', {
            method: 'POST',
            headers:{'Content-Type': 'application/json'},
            body: JSON.stringify({
                name: name,
                ph_nos: ph_nos,
                id: id
            })
        }).then(res =>{return res.json()})
        return promise
    }
    
    addItem = async (id, name, price, quantity) =>{
        return await fetch('http://localhost:8000/retail-api/add-item/', {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                id: id,
                name: name,
                price: price,
                quantity: quantity
            })
        })
    }

    getDebt = async (id) =>{
        const url = 'http://localhost:8000/retail-api/get-debt/' + id
        return await fetch(url).then(debt =>{return debt.json()})
    }

    clearDebt = async (id) =>{
        return await fetch('http://localhost:8000/retail-api/clear-debt',{
        method: 'PUT',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify({
            id: id
        })
    })
    }

}

export default HttpService