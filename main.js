let fetchedData = "";

const getData = async () => {
  try {
    let req = await fetch("http://localhost:3000/").then(async (res) => {
      fetchedData = await res.json();

      console.log(fetchedData);
    });
  } catch (error) {
    console.log(error);
  }
};

getData();
