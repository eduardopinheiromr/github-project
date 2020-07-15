class UserView {
  constructor() {
    // throw "Não é possível instanciar esta classe."
  }
  renderUser(user) {
    const { name, login, avatar_url, html_url, bio, location, blog, followers, following, created_at } = user;
    return `
      <div class="card flex column fade">
      <img class="user-picture" src="${avatar_url}"/>
      <h2><b>${name}</b></h2>
      <a href="${html_url}"><span>@${login}</span></a>
        <div class="flex center">
        <img src="./src/assets/images/location.svg" class="location"><span>${location}</span>
        </div>
        <span>${bio}</span>
        <a href="${blog}"><span>${blog}</span></a>
        <span>Seguidores: <strong id="followersBtn">${followers}</strong></span>
        <span>Seguindo: <strong id="followingBtn">${following}</strong></span>
        <span>Membro desde ${created_at}</span>
      </div>
    `;
  }
  renderRepositories(json) {
    let repositories = document.createElement('div')
    repositories.className = "flex wrap repositories fade"
    json.map((element) => {
      let repositoryBody = document.createElement('div')
      repositoryBody.className = "flex column repository"
      let repoName = document.createElement('span')
      repoName.innerText = element.name;
      let repoLink = document.createElement('a')
      repoLink.href = `http://github.com/${element.full_name}`;
      repoLink.innerText = "Acesso ao repositório"

      repositoryBody.appendChild(repoName)
      repositoryBody.appendChild(repoLink)
      repositories.appendChild(repositoryBody)
    })
    return repositories
  }

  static renderError() {
    return `
      <div><span>Usuário não encontrado</span></>
      `
  }

  // renderStarred(json) {
  //   const { name, full_name } = json
  // }
  // renderFollowers(json) {
  //   let followersList = document.createElement('div')
  //   followersList.className = "flex wrap followers"
  //   console.log(json);
  //   json.map((element) => {
  //     let followersBody = document.createElement('div')
  //     followersBody.className = "flex column repository"

  //     let login = document.createElement('span')
  //     login.innerText = element.login;

  //     let avatar = document.createElement('img')
  //     avatar.src = element.avatar_url;

  //     let htmlUrl = document.createElement('a')
  //     htmlUrl.href = element.html_url;
  //     htmlUrl.innerText = "Visitar perfil"

  //     followersBody.appendChild(login)
  //     followersBody.appendChild(avatar)
  //     followersBody.appendChild(htmlUrl)
  //     followersList.appendChild(followersBody)
  //   })
  //   return followersList
  // }
  // renderFollowing(json) {
  //   const { login, avatar_url, html_url } = json
  // }
}

