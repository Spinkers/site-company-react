import React from 'react'
import Testemunhos from './testemunhos'
import Itens from './itens'

const Portifolio = props => {
    return (
        <>
            <div id='portfolio' className='container-fluid text-center bg-grey'>
                <Itens />
                <Testemunhos />
            </div>
        </>
    )
}
export default Portifolio;

