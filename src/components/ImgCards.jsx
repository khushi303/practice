import React from 'react'
import { Container, Row } from 'react-bootstrap'

const ImgCards = () => {
    const ImgData = [
        {
            img: './src/assets/images/png/img1.png',
            Heading: 'Flower',
            Para: 'lily lily lily lily rose rose rose rose'
        },
        {
            img: './src/assets/images/png/img2.png',
            Heading: 'Flower',
            Para: 'lily lily lily lily rose rose rose rose'
        },
        {
            img: './src/assets/images/png/img3.png',
            Heading: 'Flower',
            Para: 'lily lily lily lily rose rose rose rose'
        }
    ]
    return (
        <div className=' bg-info-subtle min-vh-100 d-flex align-items-center justify-content-center'>
            <Container>
                <Row>
                    {ImgData.map((k) => {
                        return (
                            <div className='col-3'>
                                <div className='p-3 bg-white'>
                                    <img src={k.img} alt="img" />
                                    <h2></h2>
                                </div>
                            </div>
                        )
                    })}
                </Row>
            </Container>
        </div>
    )
}

export default ImgCards