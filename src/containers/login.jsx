import React from 'react';
import { Card, Form, Button, Alert } from 'react-bootstrap'

const Login = () => {
    const [form, setForm] = React.useState({ name: '', email: '', message: '' })
    const [send, setSend] = React.useState(false)
    const [validated, setValidated] = React.useState(false)

    const changeValue = (event) => {
        setForm({ ...form, [event.target.name]: event.target.value })
        console.log(form)
    }

    const submit = (event) => {       
            const form = event.currentTarget;
            
            if(form.checkValidity() === false){
                event.preventDefault();
                event.stopPropagation();
                setValidated(true);
                setSend(false);
            }else{
                setSend(true)
                setForm({name: "", email: "", message: ""})
                setValidated(false)
                event.preventDefault();
            }
            setTimeout(() => {
                setSend(false)
            }, 3000)
    }

    return (
        <div className='container pt-5'>
            {send && 
                <Alert variant={'success'} className="mt-4">
                    Su mensaje ha sido enviado con éxito!
                </Alert>
            }
            

            <Card className='container text-center'>
                <Card.Title className='mt-2'><p>Contáctanos</p></Card.Title>
                <Card.Body >
                    <Form noValidate validated={validated} className='row gap-2 justify-content-center' onSubmit={(e) => submit(e)}>
                        <Form.Control
                            name="name"
                            type="text"
                            placeholder="Ingrese Nombre"
                            value={form.name}
                            required
                            onChange={(e) => changeValue(e)}
                        />
                        <Form.Control
                            name="email"
                            type="email"
                            placeholder="Email"
                            value={form.email}
                            required
                            onChange={(e) => changeValue(e)}
                        />
                        <Form.Control
                            name='message'
                            as="textarea"
                            type="text"
                            placeholder="Comentario"
                            required
                            value={form.message}
                            onChange={(e) => changeValue(e)}
                        />
                        <Button 
                            type='submit'
                            variant="outline-primary" 
                            className='col-md-4'
                        >
                            Enviar
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
        </div>
    );
}

export { Login };