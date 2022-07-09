// variables
const input_1 = document.getElementById("firstNum");
const input_2 = document.getElementById("secondNum");
const submit = document.getElementById("submitBtn");
const answer = document.getElementById("answer");

// functions
const getData = async (e) => {
  try {
    const res = await axios.post("http://localhost:3000/answer", {
      num1: input_1.value,
      num2: input_2.value,
    });
    answer.innerText = res.data.data;
  } catch (error) {
    console.log(error);
  }
};

// Events
submit.addEventListener("click", getData);
