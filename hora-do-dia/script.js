function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        // Bom dia 
        img.src = 'img/fotomanha.png'
        document.body.style.background = '#c5c073'
    } else if (hora >= 12 && hora < 18) {
        // Boa tarde
        img.src = 'img/fototarde.png'
        document.body.style.background = '#e4ad4f'
    } else {
        // Boa noite
        img.src = 'img/fotonoite.png'
        document.body.style.background = '#645656'
    }
}
