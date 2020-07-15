class SearchHelper {
  constructor() {
    throw "Você não pode instanciar esta classe. Tente métodos estáticos."
  }

  static error() {
    usuario.innerHTML = ""
    errorDiv.classList.add('flex')
    errorDiv.classList.add('center')
    errorDiv.innerHTML = UserView.renderError()
    octocat.style.display = "flex"
  }
}