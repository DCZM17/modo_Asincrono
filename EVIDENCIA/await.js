const http = require('xmlhttprequest').XMLHttpRequest

const axios = require('axios')

const url = "https://rickandmortyapi.com/api/character"

//configuracion de request
let config = {
    url: url,
    method: 'get'
}

const f = async () => {
    try{
        let response = await axios (config)
        //recorrer el arreglo de tipos
        const tipos = response.data.results
        tipos.forEach((element)=>{
            console.log(element.name)
            console.log('***********')
        })
    }catch (error){
        console.log(Error(error))
    }
}

f()