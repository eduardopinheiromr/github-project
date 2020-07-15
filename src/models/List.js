class List {
  constructor() {
    throw "Não é possível instanciar esta classe, tente métodos estáticos."
  }

  static Followers(json) {
    const { login, avatar_url, html_url } = json;
    return {
      login: login,
      avatar_url: avatar_url,
      html_url: html_url
    }
  }
  static Following(json) {
    const { login, avatar_url, html_url } = json;
    return {
      login: login,
      avatar_url: avatar_url,
      html_url: html_url
    }
  }
}