import { useState } from 'react';
import { AddCategory, GifGrid } from './components';
;
export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Digimón']);

    const onAddCategory = ( newCategory ) => {

        if ( categories.includes( newCategory ) ) return;

        setCategories([ newCategory, ...categories ]);
        // setCategories(cat => [...cat, 'Medabots']);

    }

    return (
    <>
        {/* titulo */}
        <h1>GifExpertApp</h1>

        {/* Input */}
        <AddCategory 
            onNewCategory = { onAddCategory }
        />

        <button onClick={ onAddCategory }>
            Agregar
        </button>

        { 
            categories.map( ( category ) => (
                <GifGrid 
                    key={ category } 
                    category = { category }
                />
            ))
        }

    </>
  )
}
