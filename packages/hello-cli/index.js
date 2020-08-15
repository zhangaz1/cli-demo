console.log("hello world");
console.log(process.argv);

const readline = require('readline');

// run();

run2();

async function run2() {
	const readline = require('readline');
	const unloadChar = '-';
	const loadedChar = '=';
	const rl = readline.createInterface({
		input: process.stdin,
		output: process.stdout
	});

	rl.question('你想对谁说声hello？ ', answer => {
		let i = 0;
		let time = setInterval(() => {
			if (i > 10) {
				clearInterval(time);
				readline.cursorTo(process.stdout, 0, 0);
				readline.clearScreenDown(process.stdout);
				console.log(`hello ${answer}`);
				process.exit(0)
				return
			}
			readline.cursorTo(process.stdout, 0, 1);
			readline.clearScreenDown(process.stdout);
			renderProgress('saying hello', i);
			i++
		}, 200);
	});

	function renderProgress(text, step) {
		const PERCENT = Math.round(step * 10);
		const COUNT = 2;
		const unloadStr = new Array(COUNT * (10 - step)).fill(unloadChar).join('');
		const loadedStr = new Array(COUNT * (step)).fill(loadedChar).join('');
		process.stdout.write(`${text}:【${loadedStr}${unloadStr}|${PERCENT}%】`)
	}
}

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
