"use client";
import { useState } from "react";
import axios from "axios";

const Interview = () => {
    const [inputValue, setInputValue] = useState('');
    const [chatLog, setChatLog] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const handleGenerate = async (e) => {
        e.preventDefault();
        setChatLog((prevChatLog) => [...prevChatLog, { type: 'user', message: `Act like a interviewer and generate Question and Answer for the job ${inputValue}` }]);
        await SendMessage(`Act like a interviewer and generate Question and Answer for the job ${inputValue}`);
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
            <form onSubmit={handleGenerate} className="w-full mx-auto flex gap-3 items-center justify-center">
                <label className="form-control w-full max-w-xs">
                    <div className="label">
                        <span className="label-text text-main">Generate Interview Questions</span>
                    </div>
                    <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
                    <div className="label">
                        <span className="label-text-alt">Type your Job Sector</span>
                        <span className="label-text-alt">Type For Questions & Answers</span>
                    </div>
                </label>
                <button className="btn text-main" type="submit">Generate</button>
            </form>
            <div>
                {chatLog.map((message, index) => (
                    <div key={index} className="">
                        {message.type === 'user' && (
                            <div>
                                <h1 className="text-2xl md:text-3xl font-extrabold text-sub_color px-4 py-2 mt-4">Resu-Magnet</h1>
                                <hr className="py-2" />
                                <div className="w-full md:w-4/5 px-4 font-semibold text-lg md:text-xl mb-6">
                                    {message.message}
                                </div>
                            </div>
                        )}
                        {
                            isLoading ? 
                            <span className="loading loading-dots loading-lg"></span> 
                         :
                           message.type === 'bot' && (

                            <div className="w-full md:w-4/5 px-4 font-semibold text-lg md:text-xl mb-6">
                                {(
                                    message.message.split('?').map((part, i) => (
                                        <p key={i}> {part.trim()}</p>
                                    ))
                                )}
                            </div>
                        )}
                        
                        {/* {message.type === 'bot' && (

                            <div className="w-full md:w-4/5 px-4 font-semibold text-lg md:text-xl mb-6">
                                { (
                                    message.message
                                )}
                            </div>
                        )} */}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Interview;
