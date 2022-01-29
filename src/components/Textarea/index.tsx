import { useState } from "react"

export function Textarea() {

    const [state, setState] = useState<string>('')

    return (
        <div>
            <textarea className="form-control" id="1" cols="30" rows="10"></textarea>
        </div>
    )
}