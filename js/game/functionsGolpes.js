// FUNÇÕES DO JOGADOR 1

// função caso escolha o golpe 1

function golpear1(x, y) {
    if (x <= 2) {
        if (y = 1) {
            if (verificaPer = true) {
                message.innerHTML = falas.mrMartino.desviou;
            }
            else {
                message.innerHTML = falas.magnusDraco.desviou;
            }
            classEdit();
        }

    }

    else if (x >= 3 && x <= 8) {
        if (y = 1) {
            if (verificaPer = true) {
                message.innerHTML = falas.magnusDraco.golpes1.fala1;
            }
            else {
                message.innerHTML = falas.mrMartino.golpes1.fala1;
            }
            classEdit();
            vida2 -= dano1;
            atualizarVida();
        }

    }
    else {
        if (y = 1) {
            if (verificaPer = true) {
                message.innerHTML = falas.magnusDraco.golpes1.fala2;
            }
            else {
                message.innerHTML = falas.mrMartino.golpes1.fala2;
            }
            classEdit();
            vida2 -= danoCritico(dano1)
            atualizarVida();
        }

    }
}

// função caso escolha o golpe 2

function golpear2(x, y) {
    if (x <= 2) {
        if (y = 1) {
            if (verificaPer = true) {
                message.innerHTML = falas.mrMartino.desviou;
            }
            else {
                message.innerHTML = falas.magnusDraco.desviou;
            }
            classEdit();
        }

    }

    else if (x >= 3 && x <= 8) {
        if (y = 1) {
            if (verificaPer = true) {
                message.innerHTML = falas.magnusDraco.golpes2.fala1;
            }
            else {
                message.innerHTML = falas.mrMartino.golpes2.fala1;
            }
            classEdit();
            vida2 -= dano2;
            atualizarVida();
        }

    }
    else {
        if (y = 1) {
            if (verificaPer = true) {
                message.innerHTML = falas.magnusDraco.golpes2.fala2;
            }
            else {
                message.innerHTML = falas.mrMartino.golpes2.fala2;
            }
            classEdit();
            vida2 -= danoCritico(dano2)
            atualizarVida();
        }

    }
}


// função caso escolha o golpe 3

function golpear3(x, y) {
    if (x <= 2) {
        if (y = 1) {
            if (verificaPer = true) {
                message.innerHTML = falas.mrMartino.desviou;
            }
            else {
                message.innerHTML = falas.magnusDraco.desviou;
            }
            classEdit();
        }

    }

    else if (x >= 3 && x <= 8) {
        if (y = 1) {
            if (verificaPer = true) {
                message.innerHTML = falas.magnusDraco.golpes3.fala1;
            }
            else {
                message.innerHTML = falas.mrMartino.golpes3.fala1;
            }
            classEdit();
            vida2 -= dano3;
            atualizarVida();
        }

    }
    else {
        if (y = 1) {
            if (verificaPer = true) {
                message.innerHTML = falas.magnusDraco.golpes3.fala2;
            }
            else {
                message.innerHTML = falas.mrMartino.golpes3.fala2;
            }
            classEdit();
            vida2 -= danoCritico(dano3)
            atualizarVida();
        }

    }
}


// função caso escolha o golpe 4

function golpear4(x, y) {
    if (x <= 2) {
        if (y = 1) {
            if (verificaPer = true) {
                message.innerHTML = falas.mrMartino.desviou;
            }
            else {
                message.innerHTML = falas.magnusDraco.desviou;
            }
            classEdit();
        }

    }

    else if (x >= 3 && x <= 8) {
        if (y = 1) {
            if (verificaPer = true) {
                message.innerHTML = falas.magnusDraco.golpes4.fala1;
            }
            else {
                message.innerHTML = falas.mrMartino.golpes4.fala1;
            }
            classEdit();
            vida2 -= dano4;
            atualizarVida();
        }

    }
    else {
        if (y = 1) {
            if (verificaPer = true) {
                message.innerHTML = falas.magnusDraco.golpes4.fala2;
            }
            else {
                message.innerHTML = falas.mrMartino.golpes4.fala2;
            }
            classEdit();
            vida2 -= danoCritico(dano4)
            atualizarVida();
        }

    }
}

function ult1() {
    if (verificaPer = true) {
        message.innerHTML = falas.magnusDraco.ult.fala2;
    }
    else {
        message.innerHTML = falas.mrMartino.ult.fala2
    }
    classEdit();
    vida2 -= ultDano1;
    atualizarVida();
}

// FUNÇÕES DO JOGADOR 2




