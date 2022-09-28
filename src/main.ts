const url : string = "http://numbersapi.com/random/math";

let mathText: HTMLElement | null = null;

let request_random_math_fact = async function(): Promise<string> {
    const response : Response = await fetch(url);
    return ((response.ok) ? await response.text() : "Something went wrong");
}

async function handleClick(){
    const text : string = await request_random_math_fact();
    if (mathText)
        mathText.textContent = text;
}

onload = () => {
    mathText = document.getElementById("random_math_fact");
    const button: HTMLElement | null = document.getElementById("generate_math_fact_btn");
    if (button)
        button.addEventListener('click', handleClick);
};