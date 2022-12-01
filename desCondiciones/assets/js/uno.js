const modificarBorde = () => {
  const guitarra = document.querySelector('#guitarra')
  guitarra.style.border ? guitarra.style.border = '' : guitarra.style.border = '2px solid red'
}
