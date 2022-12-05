function pintar(ele) {
  ele.style.backgroundColor = 'yellow'
}

ele = document.getElementById('ele1')
ele.addEventListener('click', function () {
  pintar(ele)
})
