/*
 * @Description:
 * @Author: hechengnan
 * @Date: 2024-10-09 21:14:56
 * @LastEditTime: 2024-10-10 20:48:12
 * @LastEditors: hechengnan
 */
import { useEffect, useRef } from 'react';

const useDebounce = (fn, ms = 30, deps = []) => {
    let timeout = useRef();
    useEffect(() => {
        if (timeout.current) clearTimeout(timeout.current);
        timeout.current = setTimeout(() => {
            fn();
        }, ms);
    }, deps);

    const cancel = () => {
        clearTimeout(timeout.current);
        timeout = null;
    };

    return [cancel];
};

export default useDebounce;

const useDebounce2 = (fn, ms, deps = []) => {
    let timer = ref();
    useEffect(() => {
        if (timer.current) clearTimeout(timer.current);
        timer.current = setTimeout(() => {
            fn();
        }, ms);
    }, deps);
    const cancel = () => {
        clearTimeout(timer.current);
        timer = null;
    };
    return [cancel];
};
