class SearchUserController {
  constructor() {
    throw "Não é possível instanciar esta classe. Use o método SearchUserController.getUser('user')"
  }
  static getJSON(urlAPI) {
    console.log(urlAPI)
    const req = new XMLHttpRequest();
    req.open("GET", urlAPI, false);
    req.send();
    const data = JSON.parse(req.responseText);
    return data
  }
  static getUser(username) {
    //Requisição do usuário completo
    const data = SearchUserController.getJSON(`https://api.github.com/users/${username}`)

    //Instanciando o modelo
    this._user = new User(data);

    //Fazendo as requisições extras
    const userURLs = this._user.returnURLs()

    //Criando as views
    let view = new UserView();

    //Criando as requisições extras
    const reposJSON = SearchUserController.getJSON(userURLs.repos_url)

    //Próximas Features
    const followersJSON = SearchUserController.getJSON(userURLs.followers_url)
    const followingJSON = SearchUserController.getJSON(userURLs.following_url)

    // const starredJSON = SearchUserController.getJSON(userURLs.starred_url)
    //Array completo
    // let array = [view.renderUser(this._user.returnUser()), view.renderRepositories(reposJSON), view.renderFollowers(followersJSON), view.renderFollowing(followingJSON), view.renderStarred(starredJSON)]
    let array = [view.renderUser(this._user.returnUser()), view.renderRepositories(reposJSON), FollowController.getFollowersList(followersJSON), FollowController.getFollowingList(followingJSON)]
    return array
  }
}