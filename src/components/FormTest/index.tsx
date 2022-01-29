import { useState } from "react";
import { Button } from "../Button";
import { Input } from "../input";
import { Textarea } from "../Textarea";

type FormProps = {
    name: string,
    description: string,
}

export function FormTest(props: FormProps) {

    const [value, setValue] = useState('');
    const [textValue, setTextValue] = useState('');

    const handleChange = (e: any) => {
        setValue(e.target.value)
    }
    const handleTextareaChange = (e:any) => {
        setTextValue(e.target.value)
    }

    function handleSubmit(event: any) {
        console.log(value, textValue)
        event.preventDefault()
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <h1>Form</h1>
                <Input type='text' text='Nome' name="nome" value={value} onChange={handleChange} />
                <Textarea text='Descrição' name="description" value={textValue} onChange={handleTextareaChange} />
                <input type="submit" value="enviar"/>
            </form>

        </>
    )
}