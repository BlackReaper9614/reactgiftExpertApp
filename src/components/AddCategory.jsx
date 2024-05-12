import { useState } from 'react';

export const AddCategory = ( { onNewCategory } ) => {
  
    const [inputValue, setInputValue] = useState('');

    const onInutChange = (event) => {
        
        setInputValue(event.target.value);

    }

    const onSubmit = (event) => {
        
        event.preventDefault();

        if(inputValue.trim().length < 1)
        {
            return;
        }

        onNewCategory( inputValue.trim() );

        setInputValue('');
        
    }

    return (
        <>
            <form onSubmit={ onSubmit }>

                <input
                    id="inputCategory" 
                    onChange={ onInutChange }
                    placeholder="Bucar gifs" 
                    type="text"  
                    value={ inputValue}
                />

            </form>

        </>

    )

}
