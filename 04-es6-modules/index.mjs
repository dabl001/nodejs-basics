import { season, temperature } from './named-exports.mjs';
import { isRaining, humidity } from './inline-exports.mjs';
import getDataFromServer from './default-export.mjs';
import server, {
    USERNAME as username,
    PASS as pass,
} from './mixed-exports.mjs';

console.log(season);
console.log(temperature);

console.log(isRaining);
console.log(humidity);

getDataFromServer('https://jsonplaceholder.typicode.com/posts/1')
    .then((post) => console.log(post))
    .catch((err) => console.log(err));

console.log(server);
console.log(username, pass);
