const user = document.querySelector(".user");
const robo = document.querySelector(".robo");
const message = document.getElementById("message");
const send = document.getElementById("send");
const cardContainer = document.querySelector(".card-body");

let queries = [
  {
    request: ["What's", "your", "name"],
    response: "My name is Jarvis",
  },
  {
    request: ["How", "are", "you", "doing"],
    response: "I am fine thank you",
  },
  {
    request: ["Michael", "Crichton"],
    response: "Jurassic World Dominion",
  },
  {
    request: ["Benedict", "Cumberbatch"],
    response: "Doctor Strange",
  },
  {
    request: ["Yash"],
    response: "K.G.F",
  },
  {
    request: ["Ajay", "Devgan"],
    response: "RRR",
  },
];

//User Responsive
function userResponse(msg) {
  let userHtml = `
  <div class="d-flex flex-row justify-content-start robo">
  <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3-bg.webp" alt="avatar 1" style="width: 45px; height: 100%">
  <div>
  <p class="small p-2 ms-3 mb-1 rounded-3" style="background-color: #f5f6f7">${msg}</p>
  </div>
  </div>
  `;

  cardContainer.insertAdjacentHTML("beforeend", userHtml);

  message.value = "";
}

//Robo Responsive
function roboResponse(res) {
  let userHtml = `
  <div class="d-flex flex-row justify-content-end mb-4 pt-1 user">
  <div>
    <p class="small p-2 me-3 mb-1 text-white rounded-3 bg-primary">
    ${res}
    </p>
  </div>
  <img
    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava4-bg.webp"
    alt="avatar 1"
    style="width: 45px; height: 100%"
  />
</div>
</div>
    `;

  cardContainer.insertAdjacentHTML("beforeend", userHtml);
}

//get input value and match
function getInputValue() {
  let typedMsg = message.value;
  alert(typedMsg);

  userResponse(typedMsg);

  //console.log(queries[1].request);

  //console.log(queries.length);

  for (let i = 0; i < queries.length; i++) {
    //console.log(queries[i].request);

    let requestData = [...queries[i].request];
    console.log(requestData);

    if (requestData.includes(typedMsg)) {
      console.log("matched");
      //console.log(queries[i].response);
      roboResponse(queries[i].response);
    } else {
      console.log("not matched");
    }
  }
}

send.addEventListener("click", getInputValue);
