/*
 * @Description:
 * @Author: hechengnan
 * @Date: 2024-04-07 23:08:33
 * @LastEditTime: 2024-04-08 22:58:38
 * @LastEditors: hechengnan
 */
const useState = defaultValue => {
    const value = useRef(defaultValue);

    const setValue = newValue => {
        if (typeof newValue === 'function') {
            value.current = newValue(value.current);
        } else {
            value.current = newValue;
        }
    };

    //  触发组件的重新渲染
    dispatchAction();

    return [value, setValue];
};

const [xx, setXx] = useState;

setXx(newValue => {
    return;
});
