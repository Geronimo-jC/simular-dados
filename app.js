const nmrRandom =()=>{
    return Math.floor(Math.random()*6+1);
}

const lanzarDosDados = ()=>{
    let dados = [nmrRandom(),nmrRandom()];
    let suma = dados[1]+dados[0]
    return suma
}

const objeto = {
    suma:0,
    aparicion:0
}

const array = new Array(11).fill(null).map((_,i)=>{
    return Object.assign({}, objeto,{suma: i+2})
})

let nmr = parseInt(prompt('Ingrese la cantidad de lanzamientos'))

const tiradas = new Array(nmr).fill(null).map(lanzarDosDados)

const main=()=>{
    tiradas.forEach(t=>{
        const resultados = array.find(e=> e.suma === t)
        if(resultados){
            resultados.aparicion++
        }
    })
    console.table(array)
}

main()

