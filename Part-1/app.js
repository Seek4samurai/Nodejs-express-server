// Sending request to Server
let fetchedData = "";

const request = async () => {
  try {
    // Requesting Node.js server
    // const req = await fetch("http://127.0.0.1:3000/").then(async (res) => {
    //   console.log(await res.text());
    // });

    // Requesting Express.js server
    const req = await fetch("http://localhost:3000/").then(async (res) => {
      fetchedData = await res.json();
      console.log(fetchedData.data);
    });
  } catch (error) {
    console.log(error);
  }
};

request();
