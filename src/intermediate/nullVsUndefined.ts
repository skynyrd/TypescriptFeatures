console.log(null == undefined); // true

function decorate(value: string | null | undefined) {
    if (value == null) { // this statement also covers the undefined
        return value;
    }
    return `${value.trim()}`
}