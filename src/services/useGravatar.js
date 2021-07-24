const md5 = require('md5')

export default function useGravatar (email) {
  console.log(email)
  const base = 'https://www.gravatar.com/avatar/'
  const formatEmail = email.trim().toLowerCase()
  const hash = md5(formatEmail)
  return `${base}${hash}`
}
