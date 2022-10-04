import {useState} from "react";

export const useInputs = (initialData) => {
    const [inputs, setInputs] = useState(initialData);

    const onChange = (name, text) => {
        setInputs({...inputs, [name]: text})
    }

    return [inputs, onChange];
}