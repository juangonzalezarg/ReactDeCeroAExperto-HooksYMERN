import { getHeroeById } from "./bases/08-imp-exp";


// const promesa = new Promise( (resolve, reject)=>{
    
//     setTimeout( () => {
//         //console.log('2 segundos después')
        

//         // Tarea
//         // importe el
        
//         const heroe = getHeroeById(2)
//         resolve(heroe);
//         //reject('No se pudo encontrar el héroe')
//     },2000)

// } );

// promesa.then((heroe)=>{
//     console.log('heroe', heroe)
// })
// .catch(err => console.warn(err));

const getHeroeByIdAsync = (id) =>{
    return new Promise( (resolve, reject)=>{
    
        setTimeout( () => {
            //console.log('2 segundos después')
            
    
            // Tarea
            // importe el
            
            const heroe = getHeroeById(id)
            if (heroe == undefined)
                reject('No se pudo encontrar el héroe');
            else
                resolve(heroe);

            //reject('No se pudo encontrar el héroe')
        },2000)
    
    } );
}

getHeroeByIdAsync(2)
    //.then(heroe=> console.log('Heroe', heroe))
    .then(console.log)
    //.catch(err=>console.warn(err))
    .catch(console.warn)
