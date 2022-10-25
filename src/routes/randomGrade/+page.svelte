<script>
	const grades = ['A', 'B', 'C', 'D'];
	let generateGrade = grades[0];
	let currentIndex = 0;
	let checked = false;

	function stopOrContinueGradeGeneration() {
		checked = !checked;
		generateGrade = grades[0];
		currentIndex = 0;
		if (checked) {
			clearInterval(generateGradeInterval);
		} else {
			generateGradeInterval = setInterval(changeGrade, 1000);
		}
	}

	function changeGrade() {
		console.log(currentIndex);
		console.log(grades.length);
		if (currentIndex !== grades.length - 1) currentIndex += 1;
		else currentIndex = 0;
		generateGrade = grades[currentIndex];
	}

	let generateGradeInterval = setInterval(changeGrade, 1000);
</script>

<svelte:head>
	<title>Random Grade Generator</title>
</svelte:head>

<div class="text-column grade_generator">
	<h1>Generate generator:</h1>
	<h1 id="grade">{generateGrade}</h1>
	<label
		>Pause: <input id="pause" type="checkbox" on:change={stopOrContinueGradeGeneration} /></label
	>
</div>

<style>
	.grade_generator {
		font-family: sans-serif;
		text-align: center;
	}
</style>
