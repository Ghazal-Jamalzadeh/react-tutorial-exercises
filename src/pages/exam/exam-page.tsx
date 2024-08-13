import {useState} from "react";
import './styles.css'

export function ExamPage() {

    const [isLoading, setIsLoading] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const [message, setMessage] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
        setMessage('')
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(inputValue);
        setIsLoading(true)
        setTimeout(function() {
            if(inputValue == '25'){
                setMessage('جواب شما صحیح است')
            }else {
                setMessage('جواب شما اشتباه است')
            }
            setIsLoading(false)
        }, 1000);

    };

    return (
        <>
            <div>

                    <input
                        type="text"
                        value={inputValue}
                        onChange={handleInputChange}
                        placeholder="10+ 15 = ?"
                    />
                    <button disabled={isLoading} onClick={handleSubmit}>Submit</button>
                <p>{message}</p>
            </div>
        </>
    );
}