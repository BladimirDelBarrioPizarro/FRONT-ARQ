const createButton = (txt, onclick): any => {
  const ele = document.createElement('button')
  ele.style.cssText = 'color: #fff !important;text-transform: uppercase;text-decoration: none;background: #ed3330;padding: 20px;border-radius: 5px;display: inline-block;border: none;transition: all 0.4s ease 0s;'
  ele.onclick = onclick
  ele.appendChild(document.createTextNode(txt))
  document.body.appendChild(ele)
  document.body.appendChild(document.createElement('br'))
}

export { createButton }
