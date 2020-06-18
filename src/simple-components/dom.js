export default (text = 'Привет dev server cool!!! 👽') => {
  const element = document.createElement('div')
  element.innerHTML = text
  return element
}
