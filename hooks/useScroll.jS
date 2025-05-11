/*
 * @Description:
 * @Author: hechengnan
 * @Date: 2024-10-09 21:16:05
 * @LastEditTime: 2024-10-10 20:56:28
 * @LastEditors: hechengnan
 */
import { useState, useEffect } from 'react';

const useScroll = scrollRef => {
    const [pos, setPos] = useState([0, 0]);

    useEffect(() => {
        function handleScroll(e) {
            setPos([scrollRef.current.scrollLeft, scrollRef.current.scrollTop]);
        }
        scrollRef.current.addEventListener('scroll', handleScroll, false);
        return () => {
            scrollRef.current.removeEventListener('scroll', handleScroll, false);
        };
    }, []);

    return pos;
};

export default useScroll;

const useScroll2 = Ref => {
    const [pos, setPos] = useState([0, 0]);
    useEffect(() => {
        function handleScroll(e) {
            setPos([Ref.current.scrollLeft, Ref.current.scrollLeft]);
        }
        Ref.current.addEventListener('scroll', handleScroll, false);
        return () => {
            Ref.current.removeEventListener('scroll', handleScroll, false);
        };
    }, []);
};
