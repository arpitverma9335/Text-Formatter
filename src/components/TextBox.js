import { useState } from "react";

import { formatText } from './../utils/Text-Utils';

function TextBox(){
    const [text, setText] = useState('Write your thoughts here...')
    const setNewText = (event) => {
        setText(event.target.value);
    }

    const formatTextByAction = ((action) => {
        let newText = formatText(text, action)
        setText(newText)
    });

    return (
        <>
            <div>
                <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your message</label>
                <textarea id="message" value={text} onChange={setNewText} rows="15" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></textarea>
            </div>
            <div className="flex place-content-around pt-5">
                <button onClick={() => formatTextByAction('upperCase')} className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded w-80">
                    Convert to UPPERCASE
                </button>
                <button onClick={() => formatTextByAction('lowerCase')} className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded w-80">
                    Convert to lowercase
                </button>
                <button onClick={() => formatTextByAction('trimAllWhitespaces')} className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded w-80">
                    Remove white spaces
                </button>
            </div>
        </>
    )
}

export default TextBox;