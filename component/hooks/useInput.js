import {useState} from "react";

export const useInput = (initialData)=>{
    const [input, setInput] = useState(initialData);

    const onChange = (text)=>{
        setInput(text);
    }

    return [input, onChange];
}