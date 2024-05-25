const _setInterver = (fn, delay) => {
    let timer = null;
    const task = setTimeout(() => {
        if (timer) {
            fn(this, arguments);
            task();
        }
    }, delay);

    return () => {
        clearTimeout(timer);
        timer = null;
    };
};
