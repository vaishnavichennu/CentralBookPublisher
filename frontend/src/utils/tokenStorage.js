
const TOKEN_KEY = 'token'

export function getLocalToken() {
  return localStorage.getItem(TOKEN_KEY)
}

export function setLocalToken(token) {
  return localStorage.setItem(TOKEN_KEY, token)
}

export function removeLocalToken() {
  return localStorage.removeItem(TOKEN_KEY)
}
