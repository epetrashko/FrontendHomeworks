<script lang="ts">
	const url = 'http://numbersapi.com/random/math';
	let mathFact = ' ';
	let request_random_math_fact = async function (): Promise<string> {
		const response: Response = await fetch(url);
		return response.ok ? await response.text() : 'Something went wrong';
	};

	async function handleClick() {
		mathFact = await request_random_math_fact();
	}
</script>

<svelte:head>
	<title>Math Fact Generator</title>
</svelte:head>

<div class="text-column">
	<button on:click={handleClick} class="math_button">Generate random math fact</button>
	<h3 id="random_math_fact">{mathFact}</h3>
</div>

<style>
	.math_button {
		margin-top: 20px;
		padding: 0.6em 2em;
		border: none;
		outline: none;
		color: rgb(255, 255, 255);
		background: #111;
		cursor: pointer;
		position: relative;
		z-index: 0;
		border-radius: 10px;
		user-select: none;
		-webkit-user-select: none;
		touch-action: manipulation;
	}

	.math_button:before {
		content: '';
		background: linear-gradient(
			45deg,
			#ff0000,
			#ff7300,
			#fffb00,
			#48ff00,
			#00ffd5,
			#002bff,
			#7a00ff,
			#ff00c8,
			#ff0000
		);
		position: absolute;
		top: -2px;
		left: -2px;
		background-size: 400%;
		z-index: -1;
		filter: blur(5px);
		-webkit-filter: blur(5px);
		width: calc(100% + 4px);
		height: calc(100% + 4px);
		animation: glowing-button-85 20s linear infinite;
		transition: opacity 0.3s ease-in-out;
		border-radius: 10px;
	}

	@keyframes glowing-button-85 {
		0% {
			background-position: 0 0;
		}
		50% {
			background-position: 400% 0;
		}
		100% {
			background-position: 0 0;
		}
	}

	.math_button:after {
		z-index: -1;
		content: '';
		position: absolute;
		width: 100%;
		height: 100%;
		background: #222;
		left: 0;
		top: 0;
		border-radius: 10px;
	}
</style>
