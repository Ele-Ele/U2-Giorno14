const book = async function () {
  try {
    let res = await fetch("https://striveschool-api.herokuapp.com/books");
    console.log(res);
    if (res.ok) {
      let data = await res.json();
      console.log("data", data);

      let rowReference = document.getElementById("insert-card");
      data.forEach((libro) => {
        rowReference.innerHTML =
          rowReference.innerHTML +
          `
          <div class="col">
        <div class="card" style="width: 18rem;">
        <img src="${libro.img}" class="card-img-top" >
        <div class="card-body">
          <h5 class="card-title">${libro.title}</h5>
          <p class="card-text">${libro.price}</p>
          <a href="#" class="btn btn-primary" >Go somewhere</a>
        </div>
      </div>
      </div>
      `;
      });
    } else {
      console.log("NOOOOO");
    }
  } catch (error) {
    console.log(error);
  }
};

book();
