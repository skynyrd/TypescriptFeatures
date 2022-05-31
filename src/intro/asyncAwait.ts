const boring = () => {
    setTimeout(() => {
        console.log('0');
        setTimeout(() => {
            console.log('0');
        }, 1000)
    }, 1000)
}

const defer = (ms: number) => new Promise(res => setTimeout(res, ms));

const notBoring = async () => {
    console.log('0');
    await defer(1000);
    console.log('1');
    await defer(1000);
    console.log('2');
}