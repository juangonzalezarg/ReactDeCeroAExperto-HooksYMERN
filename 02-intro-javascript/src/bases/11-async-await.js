
//const getImagenPromesa = () => new Promise(resolve=> resolve('http://prueba.com'))    

const getImagen = async () =>{
    
    const apiKey = 'FtCZP4WqCA6dNw5xcJz2IlbMYUmiZQMI';

    const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);

    const {data} = await resp.json();

    //console.log(data)    

    const {url}= data.images.original;
    
    const img = document.createElement('img');
    img.src = url;
    document.body.append(img);
}

getImagen();