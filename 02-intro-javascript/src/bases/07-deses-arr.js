
const personajes = ['Goku', 'Vegeta', 'Trunks'];

const [ , , p3] = personajes;

console.log(p3);


const retornaArreglo = () => {
    return ['ABC', 123]
}

const [letras,numeros]= retornaArreglo();

console.log(letras,numeros)

//Tarea
//1. el primer valor del arr se llamarĂ¡ nombre
//2. se llamarĂ¡ setNombre
const useState = ( valor )=> {
    return [valor, () => { console.log('Hola Mundo') } ];
}

const arr = useState('Goku');
console.log(arr);

arr[1]();

const [nombre,setNombre] = useState('Goku');
console.log(nombre);
setNombre();