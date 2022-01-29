import { useState } from "react"

type InputProps = {
    text: string,
    type: string,
    name: string,
    value: any,
    onChange: any
}

export function Input(props: InputProps) {

    return (
        <>
            <label className="sr-only">
                {props.text}
            </label>
            <input
                name={props.name}
                className="form-control"
                type={props.type}
                style={{
                    marginBottom: '1rem',
                    width: '80%',
                    alignItems: 'center',
                    marginLeft: '50px'
                }}
                value={props.value}
                onChange={props.onChange}
            >
            </input>
        </>

    )
}