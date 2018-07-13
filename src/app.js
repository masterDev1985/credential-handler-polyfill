import {load} from "./index";

console.log('test');
load().then((value) => {
	console.log(`Got polyfill: ${JSON.stringify(value)}`)
}, (error) => {
	console.error(`Promise rejected with error: ${error}`);
});