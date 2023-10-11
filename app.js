const nmrRandom =()=>{
    return Math.floor(Math.random()*6+1);
}

const lanzarDosDados = ()=>{
    let dados = [nmrRandom(),nmrRandom()];
    return dados;
}

const contarRepeticiones = (lista)=>{
    return lista.reduce((c,e)=>{
        c[e] = (c[e] || 0)+1;
        return c
    },{})
}

const lanzarDados = (cantidad)=>{
    const objeto = {
        suma: [],
        lazamientos:[],
        apariciones:[]
    }

    for(let i=0;i<cantidad;i++){
        let dados = lanzarDosDados()
        objeto.suma.push(dados[0]+dados[1])
        objeto.lazamientos.push(dados)
    }

    objeto.apariciones = contarRepeticiones(objeto.suma)
    return objeto
}

const generarTabla = (cantidad)=>{
    const objeto = lanzarDados(cantidad)
    console.table(objeto)
}

let nmr = parseInt(prompt('Ingrese la cantidad de lanzamientos'))

generarTabla(4)

