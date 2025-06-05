
const TOKEN_KEY = 'token'

export function getLocalToken() {
  return localStorage.getItem(TOKEN_KEY)
}

export function setLocalToken(token) {
  localStorage.setItem(TOKEN_KEY, token)
}

export function removeLocalToken() {
  localStorage.removeItem(TOKEN_KEY)
}
