import { render, screen } from "@testing-library/react";
import { GifItem } from "../../../src/components/GifItem";

describe('Prueba de <GifItem>', () => { 

    const title = 'Pokemon';
    const url = 'https://holamundo.com/';

    test('Debe hacer match con el snapshot', () => { 
      
        const { container } = render( <GifItem  title={ title } url={ url }/> );

        expect( container ).toMatchSnapshot();

    })

    test('Debe de mostrar la imagen con el URL y el ALT indicado', () => { 
    
        render( <GifItem  title={ title } url={ url }/> );

        //screen.debug();

        const { src, alt } = screen.getByRole('img');

        expect( src ).toBe( url );

        expect( alt ).toBe( title );

    })

    test('Debe de mostrar el titulo que se envía', () => { 
    
        render( <GifItem  title={ title } url={ url }/> );

        expect( screen.getByText( title ) ).toBeTruthy();

    })

})