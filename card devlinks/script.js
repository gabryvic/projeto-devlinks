function toggleMode() {
    const html = document.documentElement
    html.classList.toggle("light")

    const img = document.querySelector("#logo img")

    if(html.classList.contains("light")){
        img.setAttribute("src" , "./assets/footer2.png")

    } else{
        img.setAttribute("src" , "./assets/footer.png")

    }
 
   

     //pegar a tag img e substituir a img
    
}