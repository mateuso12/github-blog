import axios from 'axios'

export const userApi = axios.create({
  baseURL: 'https://api.github.com/users/mateuso12',
})

export const issueApi = axios.create({
  baseURL: 'https://api.github.com/repos/mateuso12/github-blog-posts/issues',
})
