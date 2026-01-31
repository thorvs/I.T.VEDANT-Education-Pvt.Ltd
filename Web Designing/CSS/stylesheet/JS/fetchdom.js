async function getQuotes() {
  try {
    const response = await fetch("https://dummyjson.com/quotes");
    const data = await response.json();
    const table = document.getElementById("quotes");
    console.log(data.quotes);

    data.quotes.forEach((q) => {
      console.log(q);

      const tr = document.createElement("tr");

      for (let i in q) {
        console.log(i);
        const td = document.createElement("td");
        tr.appendChild(td);
      }

      table.appendChild(tr);
    });
  } catch (error) {}
}

getQuotes();
