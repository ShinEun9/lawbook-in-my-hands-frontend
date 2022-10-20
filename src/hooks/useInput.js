import {useEffect, useState} from "react";

export const useInput = (initialData) => {
    const [input, setInput] = useState(initialData);

    // useEffect(() => {
    //     console.log(input)
    // }, [input])

    const onChange = (text) => {
        setInput(text);
    }

    return [input, onChange];
}