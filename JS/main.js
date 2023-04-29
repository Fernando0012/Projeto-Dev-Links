function toggleMode(){
  const html = document.documentElement
  html.classList.toggle('light')

 /* 
  if(html.classList.contains('light')){
    html.classList.remove('light')
  } 
  else {
    html.classList.add('light')
  }*/


  //pegar a tag img alt
  const image = document.querySelector('#profile img')
  //substituir a imagem
  if(html.classList.contains('light')){
    //se tiver light mode, adicionar a imagem light
      image.setAttribute("src", "./assets/image.jpg")
    }
 else {
   //se tiver sem light mode, manter a imagem normal
      image.setAttribute(
        "src",
        "https://avatars.githubusercontent.com/u/64934183?s=400&u=7533b3b58a1ed562e9aae106fdd6c70ac14d0ab6&v=4"
      )
    }

}