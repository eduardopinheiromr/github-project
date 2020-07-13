class User {
  constructor(userData) {
    const { name, login, avatar_url, html_url, bio, location, blog, followers, following, created_at, public_repos, followers_url, following_url, starred_url, repos_url } = userData;
    this._name = name;
    this._login = login;
    this._avatar_url = avatar_url;
    this._html_url = html_url;
    this._bio = bio;
    this._location = location;
    this._blog = blog;
    this._followers = followers;
    this._following = following;
    this._created_at = created_at;
    this._public_repos = public_repos;
    this._created_at = new Date(`${created_at}`).toLocaleDateString();
    this._followers_url = followers_url;
    this._following_url = following_url;
    this._starred_url = starred_url;
    this._repos_url = repos_url;
  }
  returnUser() {
    return {
      name: this._name,
      login: this._login,
      avatar_url: this._avatar_url,
      html_url: this._html_url,
      bio: this._bio,
      location: this._location,
      blog: this._blog,
      followers: this._followers,
      following: this._following,
      created_at: this._created_at,
    };
  }
  returnURLs() {
    return {
      repos_url: this._repos_url,
      followers_url: this._followers_url,
      following_url: this._following_url.replace("{/other_user}", ""),
      starred_url: this._starred_url.replace("{/owner}{/repo}", ""),
    }
  }
}
