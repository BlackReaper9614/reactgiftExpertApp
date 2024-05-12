import { useState } from 'react';
import { AddCategory, GifGrid } from './components';
 
export const GiftExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch']);
    
    const onAddCategory = (newCategory) => {

        if ( categories.includes( newCategory ) ) return;

        setCategories( [newCategory, ...categories] );

    }

    return (
        <>

            <div> GiftExpertApp</div>

            <AddCategory 
                onNewCategory = { onAddCategory }
            />

                {

                    categories.map((category) => (

                            <GifGrid 
                                category={ category } 
                                key={ category } 
                            />

                        )
                    )   
                    
                }

        </>
    )

}
