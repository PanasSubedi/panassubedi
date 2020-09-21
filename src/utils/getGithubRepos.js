const getGithubRepos = () => {
  const url = 'https://api.github.com/users/PanasSubedi/repos'

  return fetch(url)
      .then(response => response.json())
      .then(data => {
        return data
      })
      .catch(error => console.log(error));
}

export default getGithubRepos;
