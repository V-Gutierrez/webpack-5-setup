import '../styles/index.scss'

const progressBar = document.querySelector('progress')

setInterval(() => {
  progressBar.value = progressBar.value + Math.random() * 10

  if (progressBar.value >= 100) {
    progressBar.value = 0
  }
}, 2000)
