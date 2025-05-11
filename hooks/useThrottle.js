/*
 * @Description: 
 * @Author: hechengnan
 * @Date: 2024-10-09 21:15:44
 * @LastEditTime: 2024-10-10 21:01:48
 * @LastEditors: hechengnan
 */
import { useEffect, useRef, useState } from 'react';

const useThrottle = (fn, ms = 30, deps = []) => {
    let previous = useRef(0);
    let [time, setTime] = useState(ms);
    useEffect(() => {
        let now = Date.now();
        if (now - previous.current > time) {
            fn();
            previous.current = now;
        }
    }, deps);

    const cancel = () => {
        setTime(0);
    };

    return [cancel];
};

export default useThrottle;

const useThrottle2 = (fn, wait = 30, deps = []) => {
    const previous = useRef(0);
    const [timer, setTimer] = useState(wait);
    useEffect(() => {
        const now = Date.now();
        if (now - previous.current > timer) {
            fn();
            previous.current = now;
        }
        const cancel = () => {
            setTimer(0);
        };
        return [cancel];
    }, deps);
};
