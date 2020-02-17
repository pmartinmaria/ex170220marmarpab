import React, { Component } from "react";
import { Router, Link } from "@reach/router";
import Distribucion1marmarpab from './Distribucion1marmarpab'
import Distribucion2marmarpab from './Distribucion2marmarpab'
import Distribucion3marmarpab from './Distribucion3marmarpab'
import Pruebasmarmarpab from './Pruebasmarmarpab'
class Aplicacionmarmarpab extends Component {
    render() {
        return (
            <div className='mainmarmarpab'>
                <div className='mainmarmarpab__fila1'>
                    <div className='mainmarmarpab__fila1__enlace'>
                        <Link to='Distribucion1marmarpab'>Distribucion 1</Link>
                    </div>
                    <div className='mainmarmarpab__fila1__enlace'>
                        <Link to='Distribucion2marmarpab'>Distribucion 2</Link>
                    </div>
                    <div className='mainmarmarpab__fila1__enlace'>
                        <Link to='Distribucion3marmarpab'>Distribucion 3</Link>
                    </div>
                    <div className='mainmarmarpab__fila1__enlace'>
                        <Link to='Pruebasmarmarpab'>Pruebas</Link>
                    </div>
                </div>
                <div className='mainmarmarpab__fila2'>
                    <Router>
                        <Distribucion1marmarpab path='Distribucion1marmarpab' />
                        <Distribucion2marmarpab path='Distribucion2marmarpab' />
                        <Distribucion3marmarpab path='Distribucion3marmarpab' />
                        <Pruebasmarmarpab path='Pruebasmarmarpab' />
                    </Router>
                </div>
            </div>
        )
    }
}
export default Aplicacionmarmarpab;