const axios = require('axios')

const url = 'https://apisimpsons.fly.dev/api/personajes?limit=30'

const consultarSimpsons = async() =>{ 
    try{
    const response = await axios.get(url)

    let simpsons = response.data.docs
    simpsons.forEach(simpson => {
        console.log('-----------------------------------------------------------------------------------------');
        console.log('\nNombre: '+simpson.Nombre)
        console.log('Genero: '+simpson.Genero)
        console.log('Ocupacion: '+simpson.Ocupacion)
        console.log('\n-----------------------------------------------------------------------------------------');
        
        });
    }
        catch(error){
            console.log(error.code)
        }
}

consultarSimpsons()