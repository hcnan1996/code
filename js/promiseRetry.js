const promiseRetry = (fn, times, delay) => {
    return new Promise((rs, rj) => {
        const innerFn = () => {
            fn()
                .then(res => {
                    rs();
                })
                .catch(err => {
                    if (times === 0) {
                        rj();
                    } else {
                        times--;
                        setTimeout(() => {
                            innerFn();
                        }, delay);
                    }
                });
        };
    });
};

function getData() {
    return new Promise((rs, rj) => {
        rs();
    });
}

promiseRetry(getData, 5, 1000);
