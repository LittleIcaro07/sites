

const menuBotao = document.getElementById("menuBotao");
const menu = document.getElementById("menu");

menuBotao.addEventListener("click", function () {
    menu.classList.toggle("ativo");

    if (menu.classList.contains("ativo")) {
        menuBotao.textContent = "✕";
        menuBotao.setAttribute("aria-label", "Fechar menu");
    } else {
        menuBotao.textContent = "☰";
        menuBotao.setAttribute("aria-label", "Abrir menu");
    }
});



const linksMenu = document.querySelectorAll("#menu a");

linksMenu.forEach(function (link) {
    link.addEventListener("click", function () {
        menu.classList.remove("ativo");
        menuBotao.textContent = "☰";
        menuBotao.setAttribute("aria-label", "Abrir menu");
    });
});




const botoesPlano = document.querySelectorAll("[data-plano]");
const campoPlano = document.getElementById("plano");

botoesPlano.forEach(function (botao) {
    botao.addEventListener("click", function () {
        const planoEscolhido = botao.getAttribute("data-plano");

        for (let i = 0; i < campoPlano.options.length; i++) {
            if (campoPlano.options[i].value === planoEscolhido) {
                campoPlano.selectedIndex = i;
                break;
            }
        }
    });
});



document.getElementById("ano").textContent =
    new Date().getFullYear();