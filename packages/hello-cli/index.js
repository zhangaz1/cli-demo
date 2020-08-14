console.log("hello world");
console.log(process.argv);

const readline = require('readline');

run();

async function run() {
	const rl = readline.createInterface(process.stdin, process.stdout);

	const template = await readlinePrompt('what is template-name?');
	const project = await readlinePrompt('what is project-name?');

	console.log(template, project);

	rl.close();


	function readlinePrompt(query) {
		return new Promise(function(resolve, reject) {
			rl.question(query, resolve);
		});
	}
}
