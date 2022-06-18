type RandomConfig = {
    baseUrl?: string,
    port?: string
    connUrl?: string
}

class ApiService {
    private config: Required<RandomConfig>;

    constructor(config: RandomConfig) {
        this.config = {
            baseUrl: 'http://a.com',
            port: '80',
            connUrl: '192.168.2.1:111/connect'
        }
    }

    printConfig() {
        // null check is not needed.
        console.log(this.config.baseUrl);
        console.log(this.config.port);
        console.log(this.config.connUrl);
    }
}