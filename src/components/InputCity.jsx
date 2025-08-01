import { useState } from 'react';
import Form from 'react-bootstrap/Form';

const InputCity = (props) => {
    const [inputValue, setInputValue] = useState('');

    const formSub = (e) => {
        e.preventDefault();
        props.setCity(inputValue);
        setInputValue("")
    };

    return (
        <>
            <Form onSubmit={formSub}>
                <Form.Group controlId="form" className='text-center'>
                    <Form.Label className='text fs-3'>Hark, seeker of wisdom. Which city should I observe?</Form.Label>
                    <Form.Control className='w-50 mx-auto fs-4 fw-bold text-center title-no-color'
                        type="text"
                        placeholder=""
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                    />
                </Form.Group>
            </Form>
        </>
    );
};
export default InputCity;