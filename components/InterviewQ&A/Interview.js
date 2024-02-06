"use client";
import { useState } from "react";
import axios from "axios";

const Interview = () => {
    const [inputValue, setInputValue] = useState('');
    const [chatLog, setChatLog] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const handleGenerate = async (e) => {
        e.preventDefault();
        setChatLog((prevChatLog) => [...prevChatLog, { type: 'user', message: inputValue }]);
        await SendMessage(inputValue);
        setInputValue('');
    };

    const SendMessage = async (message) => {
        const url = 'https://api.openai.com/v1/chat/completions';
        const headers = {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${process.env.NEXT_PUBLIC_CHAT_API_KEY}`
        };
        const data = {
            model: 'gpt-3.5-turbo-16k-0613',
            messages: [{ role: 'user', content: message }]
        };
        setIsLoading(true);
        try {
            const response = await axios.post(url, data, { headers: headers });
            setChatLog((prevChatLog) => [...prevChatLog, { type: 'bot', message: response.data.choices[0].message.content }]);
        } catch (error) {
            console.log(error);
        }
        setIsLoading(false);
    };

    return (
        <div>
            <h1>Search</h1>
            <div>
                {chatLog.map((message, index) => (
                    <div key={index} className="text-center text-5xl">
                        <h1>sms</h1>
                        {message.message}
                    </div>
                ))}
            </div>
            <form onSubmit={handleGenerate}>
                <input type="text" placeholder="type here" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
                <button className="btn" type="submit">Generate</button>
            </form>
        </div>
    );
};

export default Interview;
