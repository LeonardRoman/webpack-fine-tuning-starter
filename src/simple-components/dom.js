import moment from 'moment'

moment.lang('ru')
export default (text = 'Привет dev server cool!!! 👽' + moment().format('MMM Do YY')) => {
  const element = document.createElement('div')
  element.innerHTML = text
  return element
}
