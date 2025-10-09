import QRCode from 'react-qr-code';
import { useState, useRef } from 'react';
import styles from './QR-Code-Generator.module.css'
function QRCodeGenerator() {
    const [inputValue, setInputValue] = useState('');
    const inputRef = useRef(null);

    const handleClick = () => {
        if (!inputRef.current) return;

        const typedValue = inputRef.current.value;

        if (typedValue.trim() === '') {
            alert('Please enter a valid value');
            return;
        }
        setInputValue(typedValue);
        inputRef.current.value = '';
    }

    return (
        <>
            <div className={styles['container']}>
                <p>QR Code Scanner</p>
                <div className={styles['inputGroup']}>
                    <input
                        ref={inputRef}
                        type="text"
                        placeholder='Enter your text here'
                    />
                    <span>
                        <button onClick={handleClick}>Convert</button>
                    </span>
                    <div className={styles['qrContainer']}>
                        {
                            inputValue ? (
                                <QRCode value={inputValue} />
                            ) : (
                                <p>Please enter a value to generate QR Code</p>
                            )
                        }

                    </div>
                </div>
            </div>
        </>

    )
}

export default QRCodeGenerator;