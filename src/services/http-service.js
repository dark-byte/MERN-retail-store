import 'whatwg-fetch'

class HttpService {
    getAccounts = async() =>{
       return await fetch('http://localhost:8000/retail-api/')
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
        return await fetch('http://localhost:8000/retail-api/add-acc/', {
            method: 'POST',
            headers:{'Content-Type': 'application/json'},
            body: JSON.stringify({
                name: name,
                ph_nos: ph_nos,
                id: Math.floor(Math.random()*100)
            })
        }).then(res =>{return res.json()})
    }
    
}

export default HttpService