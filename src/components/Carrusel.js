import React from 'react'
import { Carousel } from 'react-bootstrap';

export const Carrusel = () => {
    return (
        <>
            <Carousel fade indicators={false}>
                <Carousel.Item interval={3000} className="text-center">

                    <h1>Reparacion de TV/LCD</h1>
                    <h4>Nos esforzamos por satisfacer las necesidades de nuestros clientes <br /> y brindar un servicio rápido y oportuno.</h4>

                </Carousel.Item>
                <Carousel.Item interval={3000} className="text-center">

                    <h1>Servicio de reparación rápido y accesible</h1>
                    <h4>Nos esforzamos por satisfacer las necesidades de nuestros clientes <br /> y brindar un servicio rápido y oportuno.</h4>

                </Carousel.Item>

            </Carousel>

        </>
    );
}
