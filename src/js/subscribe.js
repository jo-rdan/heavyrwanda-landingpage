// console.log(document.querySelector("#btn"), "Imana");
document.querySelector("#btn").addEventListener("click", async () => {
  const text = (document.querySelector("#text").style.display = "none");
  document.querySelector("#spin").style.display = "block";
  const email = document.querySelector("#input").value;
  fetch(
    `https://wakenbake.herokuapp.com/api/v1/users/user/subscribe?email=${email}`,
    {
      method: "post",
    }
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      const text = (document.querySelector("#text").style.display = "block");
      document.querySelector("#spin").style.display = "none";
    });
});
// document.querySelector('#btn-sub')
