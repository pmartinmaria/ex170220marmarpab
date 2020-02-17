import React, { Component } from "react";
import Img from 'react-image';
import { Router, Link } from "@reach/router";
class Distribucion3marmarpab extends Component {
    render() {
        return (
            <div className='contenedorDistribucion3marmarpab'>
                <div>
                    <Img className='contenedorDistribucion3marmarpab__img' src={require('./Recursos/Paisaje1.jpg')} />
                    <Link to='./Recursos/Paisaje1.jpg'>Ver imagen</Link>
                </div>
                <div >
                    <Img className='contenedorDistribucion3marmarpab__img' src={require('./Recursos/Paisaje2.jpg')} />
                    <Link to='./Recursos/Paisaje2.jpg'>Ver imagen</Link>
                </div>
                <div>
                    <Img className='contenedorDistribucion3marmarpab__img' src={require('./Recursos/Paisaje3.jpg')} />
                    <Link to='./Recursos/Paisaje3.jpg'>Ver imagen</Link>
                </div>
                <div>
                    <Img className='contenedorDistribucion3marmarpab__img' src={require('./Recursos/Paisaje4.jpg')} />
                    <Link to='./Recursos/Paisaje4.jpg'>Ver imagen</Link>
                </div>
                <div>
                    <Img className='contenedorDistribucion3marmarpab__img' src={require('./Recursos/Paisaje5.jpg')} />
                    <Link to='./Recursos/Paisaje5.jpg'>Ver imagen</Link>
                </div>
                <div>
                    <Img className='contenedorDistribucion3marmarpab__img' src={require('./Recursos/Paisaje6.jpg')} />
                    <Link to='./Recursos/Paisaje6.jpg'>Ver imagen</Link>
                </div>
                <div>
                    <Img className='contenedorDistribucion3marmarpab__img' src={require('./Recursos/Paisaje7.jpg')} />
                    <Link to='./Recursos/Paisaje7.jpg'>Ver imagen</Link>
                </div>
                <div>
                    <Img className='contenedorDistribucion3marmarpab__img' src={require('./Recursos/Paisaje8.jpg')} />
                    <Link to='./Recursos/Paisaje8.jpg'>Ver imagen</Link>
                </div>
            </div>
        )
    }
}
export default Distribucion3marmarpab;