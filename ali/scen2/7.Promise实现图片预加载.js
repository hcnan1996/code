const images = ['./src/imss.jpg', './src/imss.jpg', './src/imss.jpg'];

const loader = url => {
    return new Promise((resolve, reject) => {
        const image = new Image();
        image.onload = () => {
            console.log('@success');
            resolve();
        };
        image.onerror = () => {
            console.log('@failed');
            reject();
        };
        image.src = url;
    });
};

const preLoad = () => {
    const preLoaderArray = [];
    imgs.forEach(url => {
        preLoaderArray.push(loader(url));
    });
    return Promise.allSettled(preLoaderArray);
};

const imageLoad = url => {
    const promise = new Promise((rs, rj) => {
        const image = new Image(url);
        image.onload = () => {
            rs();
        };
        image.onerror = () => {
            rj();
        };
        image.url = url;
    });
};
