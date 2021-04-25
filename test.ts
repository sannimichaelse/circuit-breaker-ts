import { CircuitBreaker } from "./circuit-breaker/CircuitBreaker";
import { BreakerOptions } from "./circuit-breaker/BreakerOptions";



const breaker1 = new CircuitBreaker({
    method: "get",
    url: "http://localhost:3000"
}, new BreakerOptions("A",3, 5, 5000 ) );


const breaker2 = new CircuitBreaker({
    method: "get",
    url: "http://localhost:3000"
}, new BreakerOptions("B", 6, 7, 1000 ) );


setInterval(() => {
    breaker1
        .exec()
        .then( console.log )
        .catch( console.error )
}, 500 );

setInterval(() => {
    breaker2
        .exec()
        .then( console.log )
        .catch( console.error )
}, 1500 );