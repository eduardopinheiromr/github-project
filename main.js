const inputUsername = document.getElementById("username");
const searchBtn = document.getElementById("botao-user");
const usuario = document.getElementById("usuario");
const repositories = document.getElementById("repositories");
const follow = document.getElementById("follow")
const errorDiv = document.querySelector(".error")
const octocat = document.querySelector(".octocat")

inputUsername.addEventListener('keyup', handleSearch)
searchBtn.addEventListener('click', searchUser)

function searchUser() {
  octocat.style.display = "none"
  errorDiv.innerHTML = ""
  const username = document.getElementById("username").value;
  repositories.innerHTML = ""
  usuario.innerHTML = SearchUserController.getUser(username)[0]
  repositories.appendChild(SearchUserController.getUser(username)[1])

  // const followersBtn = document.getElementById("followersBtn");
  // followersBtn.onclick = () => {
  //   repositories.style.display = "none";
  //   follow.innerHTML = SearchUserController.getUser(username)[3]
  // }
}

function handleSearch(event) {
  if (event.key === "Enter") {
    searchUser()
  }
}