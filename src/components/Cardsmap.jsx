import React from 'react';
import { Container, Row } from 'react-bootstrap';

const Cardsmap = () => {
    const Cards = [
        { name: "niku", age: 20 },
        { name: "khushi", age: 20 },
        { name: "tarun", age: 17 },
        { name: "alka", age: 20 },
        { name: "payal", age: 20 },
        { name: "deepti", age: 19 },
        { name: "gourav", age: 21 },
        { name: "ankita", age: 20 },
        { name: "meenal", age: 20 },
        { name: "monika", age: 20 },
        { name: "manisha", age: 20 },
        { name: "renu", age: 20 },
        { name: "sumit", age: 21 },
        { name: "Ajay", age: 20 },
        { name: "Sahil", age: 19 },
        { name: "pranav", age: 20 }
    ];
    const age = Cards.filter((e) => e.age > 16)
    console.log(age);

    return (
        <div>
            <Container>
                <Row className='justify-content-center'>
                    {Cards.map((k) => {
                        return (
                            <div className='col-lg-3 col-md-4 col-sm-6 col-12 mb-3'>
                                <div className='px-4 py-3 bg-info d-flex flex-column justify-content-center align-items-center'>
                                    <h2 className='text-uppercase fw-semibold'>{k.name}</h2>
                                    <p className='fw-medium'>{k.age}</p>
                                </div>
                            </div>)})}
                   
                </Row>
            </Container>
        </div>
    )
}

export default Cardsmap;