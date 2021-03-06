import { useState } from "react"

type TextareaProps = {
    text: string,
    name: string,
    value: any,
    onChange: any
}

export function Textarea(props: TextareaProps) {

    return (
        <>
            <label className="col-sm-2 col-form-label">
                {props.text}
            </label>
            <textarea
                className="form-control"
                name={props.name}
                id="1"
                cols="10"
                rows="2"
                style={{
                    width: '80%',
                    marginLeft: '50px'
                }}
                value={props.value}
                onChange={props.onChange}
            >

            </textarea>
        </>
    )
}