const form      = document.querySelector('form')
const alertInfo = document.querySelector('.alert.alert-info')
const alertErr  = document.querySelector('.alert.alert-danger')

form.addEventListener('submit', submitSearch)

function getUser(username) {
  return fetch('/github-justsml.json')
  .then(res => res.json())
}

const showError = (err) => alertErr.innerHTML = err
const showInfo  = (info) => alertInfo.innerHTML = info

function submitSearch(event) {
  const data = new FormData(form)
  if (!data.get('query')) {
    return showError('ERROR: Search Query Required')
  }
  getUser(data.get('query'))
  .then(user => {
    if (user) {
      showError('')
      showInfo(`Found User: <img src='${user.avatar_url}' />`)
    } else {
      showInfo('')
      showError('Try again later. No user found.')
    }
  })
}


