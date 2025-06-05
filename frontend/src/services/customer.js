import api from './api'

export function getProductsBySchoolLang(payload) {
  return api.post('/customer/products', payload)
}