class UserView {
  constructor() {
    // throw "Não é possível instanciar esta classe."
  }
  renderUser(user) {
    const { login, avatar_url, html_url, bio, location, blog, followers, following, created_at } = user;
    return `
      <div class="card flex column">
      <a href="${html_url}"><h1>${login}</h1></a>
        <img class="user-picture" src="${avatar_url}"/>
        <span>${location}</span>
        <span>${bio}</span>
        <a href="${blog}"><span>${blog}</span></a>
        <span>Seguidores: ${followers}</span>
        <span>Seguindo: ${following}</span>
        <span>Membro desde ${created_at}</span>
      </div>
    `;
  }
  renderRepositories(json) {
    let repositories = document.createElement('div')
    repositories.className = "flex wrap repositories"
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
  renderStarred(json) {
    const { name, full_name } = json
  }
  renderFollowers(json) {
    const { login, avatar_url, html_url } = json
  }
  renderFollowing(json) {
    const { login, avatar_url, html_url } = json
  }
}

// created_at: this._created_at,
// public_repos: this._public_repos,
// created_at: this._created_at,
// followers_url: this.followers_url,
// following_url: this.following_url,
// starred_url: this.starred_url,
// repos_url: this.repos_url

