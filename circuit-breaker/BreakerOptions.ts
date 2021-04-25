export class BreakerOptions { 
    constructor(
        public breakerName: string,
        public failureThreshold: number,
        public successThreshold: number,
        public timeout: number
    ){}
}