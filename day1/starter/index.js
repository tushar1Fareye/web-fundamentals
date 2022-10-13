
 const nameFormatter = (user) => {
    return `${user.firstName} ${user.lastName}`;
 };

 let config = [
    { key: "name", label: "Name", formatter: nameFormatter },
    { key: "age", label: "Age" },
    { key: "weight", label: "Weight"},
    { key: "bloodGroup", label: "Blood Group"}
  ];



function fetchDataFromServer() {
    fetch("https://dummyjson.com/users")
      .then((response) => response.json())
      .then((json) => showData(json));
  }

  const createCard = (user) => {
    let cardDiv = document.createElement("div");
    cardDiv.className = "card";
    let img = document.createElement("img");
    img.src = user.image;
    img.className = "card-img";
    cardDiv.appendChild(img);

    config.forEach((ele) => {
        let p = document.createElement("p");
        let node;
        p.className = "details";
        if(ele.formatter == null) {
            node = document.createTextNode(`${ele.label}: ${user[ele.key]}`);
        } else {
            node = document.createTextNode(`${ele.label}: ${ele.formatter(user)}`);
        }

        p.appendChild(node);
        cardDiv.appendChild(p);

    })

    return cardDiv;
  }

function showData(data) {
    const {limit, skip, total, users} = data;
    let mainDiv = document.getElementsByClassName('main-conatiner')[0];
    users.forEach((user) => {
        mainDiv.appendChild(createCard(user));
    });

  }



  fetchDataFromServer()