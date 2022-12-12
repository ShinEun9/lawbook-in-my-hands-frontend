import {useEffect, useState} from "react";

export const useInputs = (initialData) => {
    const [inputs, setInputs] = useState(initialData);

    // useEffect(() => {
    //     console.log(inputs);
    // }, [inputs])

    const onChange = (name, text) => {
        setInputs({...inputs, [name]: text})
    }

    return [inputs, onChange, setInputs];
}