class FollowController {
  constructor() {
    throw "Não é possível instanciar esta classe. Use métodos estáticos"
  }

  static getFollowersList(json) {
    const data = List.Followers(json)
    let view = new UserView();
  }
  static getFollowingList(json) {
    const data = List.Followers(json)
    let view = new UserView();
    return view.renderFollowers(data)
  }
}