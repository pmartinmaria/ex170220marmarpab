import React, { Component } from "react";
import Img from 'react-image';
class Pruebasmarmarpab extends Component {
    render() {
        return (
            <div className='contenedorPruebasmarmarpab'>
                <div>
                    <Img className='contenedorPruebasmarmarpab__img' src={require('./Recursos/img1.PNG')} />
                </div>
                <div>
                    <Img className='contenedorPruebasmarmarpab__img' src={require('./Recursos/img2.PNG')} />
                </div>
                <div>
                    <Img className='contenedorPruebasmarmarpab__img' src={require('./Recursos/img3.PNG')} />
                </div>
                <div>
                    <Img className='contenedorPruebasmarmarpab__img' src={require('./Recursos/img4.PNG')} />
                </div>
            </div>
        )
    }
}
export default Pruebasmarmarpab;