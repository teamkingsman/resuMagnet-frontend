"use client";
import { useState } from "react";
import axios from "axios";

const Interview = () => {
    const [inputValue, setInputValue] = useState('');
    const [chatLog, setChatLog] = useState([]);
    const [isLoading, setIsLoading] = useState(false);


    const handleGenerate = (e) => {
        e.preventDefault();
        setChatLog((prevChatLog) => [...prevChatLog, { type: 'user', message: inputValue }])
        console.log(`${process.env.local.NEXT_PUBLIC_CHAT_API_KEY}`);
        // SendMessage(inputValue);
        
        setInputValue('');
    }

    const SendMessage = (message) => {
        const url = 'https://api.openai.com/v1/chat/completions'

        const headers = {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${process.env.NEXT_PUBLIC_CHAT_API_KEY}`

        }

        const data = {
            model: 'gpt-3.5-turbo-0301',
            message: [{ "role": "user", "content": message }]
        }

        setIsLoading(true)

        axios.post(url, data, { headers: headers })
            .then((response) => { console.log(response) })
            .catch((error) => {
                console.log(error);
            })

    }
    return (
        <div>
            <h1>Search</h1>
            <div>
                <h1>vhvh</h1>
                {
                    chatLog.map((message, index) => {
                        <div key="index" className="text-center text-5xl">
                            <h1>sms</h1>
                            {message.message} </div>
                    })
                }
            </div>
            <form onSubmit={handleGenerate}>
                <input type="text" placeholder="type here" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
                <button className="btn" type="submit">Generate</button>
            </form>

        </div>
    );
};

export default Interview;