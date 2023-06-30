import React, {useState, useEffect} from "react";
import './BottomBar.css';

export default function BottomBar() {
    const [currentTime, setCurrentTime] = useState("");
    const [customText] = useState("This website is developed using React, JavaScript, and a lot of love <3.");

    useEffect( () => {
        const interval = setInterval( () => {
            const now = new Date();
            setCurrentTime(now.toLocaleTimeString());
        }, 1000);

        return () => {
            clearInterval(interval);
        };
    }, []);

    return (
        <div className="bottom-bar">
            <div className="bottom-bar-left">
                <div className="current-time">{currentTime}</div>
            </div>
            {/* <div className="bottom-bar-middle">
                <div className='custom-text'>{customText}</div>
            </div> */}
            <div className="bottom-bar-right">
                <div className="current-date">{new Date().toLocaleDateString()}</div>
            </div>
        </div>
    );
}