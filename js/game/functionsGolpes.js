// FUNÇÕES DO JOGADOR 1

// função caso escolha o golpe 1

function golpear1(x, y) {
    if (x <= 2) {
        if (y == 1) {
            if (verificaPer == true) {
                message.innerHTML = falas.mrMartino.desviou;
            }
            else {
                message.innerHTML = falas.magnusDraco.desviou;
            }
            btn1.setAttribute("disabled", "disabled");
            classEdit();
        }
        else {
            if (verificaPer == true) {
                message.innerHTML = falas.magnusDraco.desviou;
            }
            else {
                message.innerHTML = falas.mrMartino.desviou;
            }
            classEdit();
        }
    }

    else if (x >= 3 && x <= 8) {
        if (y == 1) {
            if (verificaPer == true) {
                message.innerHTML = falas.magnusDraco.golpes1.fala1;
            }
            else {
                message.innerHTML = falas.mrMartino.golpes1.fala1;
            }
            btn1.setAttribute("disabled", "disabled");
            classEdit();
            vida2 -= dano1;
            filtra2();
            ultimate(dano1, 1);
            filtrarUlt(0);
            atualizarVida();
            atualizarPower()
        }
        else {
            if (verificaPer == true) {
                message.innerHTML = falas.mrMartino.golpes1.fala1;
            }
            else {
                message.innerHTML = falas.magnusDraco.golpes1.fala1;
            }
            classEdit();
            vida1 -= dano1_2;
            ultimate(dano1_2, 0);
            filtrarUlt(1);
            filtra1();
            atualizarVida();
            atualizarPower()
        }

    }
    else {
        if (y == 1) {
            if (verificaPer == true) {
                message.innerHTML = falas.magnusDraco.golpes1.fala2;
            }
            else {
                message.innerHTML = falas.mrMartino.golpes1.fala2;
            }
            btn1.setAttribute("disabled", "disabled");
            classEdit();
            vida2 -= danoCritico(dano1);
            filtra2();
            ultimate(dano1, 1);
            filtrarUlt(0);
            atualizarVida();
            atualizarPower()
        }
        else {
            if (verificaPer == true) {
                message.innerHTML = falas.mrMartino.golpes1.fala2;
            }
            else {
                message.innerHTML = falas.magnusDraco.golpes1.fala2;
            }
            classEdit();
            vida1 -= danoCritico(dano1_2);
            ultimate(dano1_2, 0);
            filtrarUlt(1);
            filtra1();
            atualizarVida();
            atualizarPower()
        }

    }
}

// função caso escolha o golpe 2

function golpear2(x, y) {
    if (x <= 2) {
        if (y == 1) {
            if (verificaPer == true) {
                message.innerHTML = falas.mrMartino.desviou;
            }
            else {
                message.innerHTML = falas.magnusDraco.desviou;
            }
            btn1.setAttribute("disabled", "disabled");
            classEdit();
        }
        else {
            if (verificaPer == true) {
                message.innerHTML = falas.magnusDraco.desviou;
            }
            else {
                message.innerHTML = falas.mrMartino.desviou;
            }
            classEdit();
        }

    }

    else if (x >= 3 && x <= 8) {
        if (y == 1) {
            if (verificaPer == true) {
                message.innerHTML = falas.magnusDraco.golpes2.fala1;
            }
            else {
                message.innerHTML = falas.mrMartino.golpes2.fala1;
            }
            btn1.setAttribute("disabled", "disabled");
            classEdit();
            vida2 -= dano2;
            filtra2();
            ultimate(dano2, 1);
            filtrarUlt(0);
            atualizarVida();
            atualizarPower()
        }
        else {
            if (verificaPer == true) {
                message.innerHTML = falas.mrMartino.golpes2.fala1;
            }
            else {
                message.innerHTML = falas.magnusDraco.golpes2.fala1;
            }
            classEdit();
            vida1 -= dano2_2;
            ultimate(dano2_2, 0);
            filtrarUlt(1);
            filtra1();
            atualizarVida();
            atualizarPower();
        }

    }
    else {
        if (y == 1) {
            if (verificaPer == true) {
                message.innerHTML = falas.magnusDraco.golpes2.fala2;
            }
            else {
                message.innerHTML = falas.mrMartino.golpes2.fala2;
            }
            btn1.setAttribute("disabled", "disabled");
            classEdit();
            vida2 -= danoCritico(dano2)
            ultimate(dano2, 1);
            filtrarUlt(0);
            filtra2();
            atualizarVida();
            atualizarPower()
        }
        else {
            if (verificaPer == true) {
                message.innerHTML = falas.mrMartino.golpes2.fala2;
            }
            else {
                message.innerHTML = falas.magnusDraco.golpes2.fala2;
            }
            classEdit();
            vida1 -= danoCritico(dano2_2)
            ultimate(dano2_2, 0);
            filtrarUlt(1);
            filtra1();
            atualizarVida();
            atualizarPower()
        }

    }
}


// função caso escolha o golpe 3

function golpear3(x, y) {
    if (x <= 2) {
        if (y == 1) {
            if (verificaPer == true) {
                message.innerHTML = falas.mrMartino.desviou;
            }
            else {
                message.innerHTML = falas.magnusDraco.desviou;
            }
            classEdit();
            btn1.setAttribute("disabled", "disabled");
        }
        else {
            if (verificaPer == true) {
                message.innerHTML = falas.magnusDraco.desviou;
            }
            else {
                message.innerHTML = falas.mrMartino.desviou;
            }
            classEdit();
        }

    }

    else if (x >= 3 && x <= 8) {
        if (y == 1) {
            if (verificaPer == true) {
                message.innerHTML = falas.magnusDraco.golpes3.fala1;
            }
            else {
                message.innerHTML = falas.mrMartino.golpes3.fala1;
            }
            btn1.setAttribute("disabled", "disabled");
            classEdit();
            vida2 -= dano3;
            ultimate(dano3, 1);
            filtrarUlt(0);
            filtra2();
            atualizarVida();
            atualizarPower()
        }
        else {
            if (verificaPer == true) {
                message.innerHTML = falas.mrMartino.golpes3.fala1;
            }
            else {
                message.innerHTML = falas.magnusDraco.golpes3.fala1;
            }
            classEdit();
            vida1 -= dano3_2;
            ultimate(dano3_2, 0);
            filtrarUlt(1);
            filtra1();
            atualizarVida();
            atualizarPower()
        }

    }
    else {
        if (y == 1) {
            if (verificaPer == true) {
                message.innerHTML = falas.magnusDraco.golpes3.fala2;
            }
            else {
                message.innerHTML = falas.mrMartino.golpes3.fala2;
            }
            btn1.setAttribute("disabled", "disabled");
            classEdit();
            vida2 -= danoCritico(dano3)
            ultimate(dano3, 1);
            filtrarUlt(0);
            filtra2();
            atualizarVida();
            atualizarPower()
        }
        else {
            if (verificaPer == true) {
                message.innerHTML = falas.mrMartino.golpes3.fala2;
            }
            else {
                message.innerHTML = falas.magnusDraco.golpes3.fala2;
            }
            classEdit();
            vida1 -= danoCritico(dano3_2)
            ultimate(dano3_2, 0);
            filtrarUlt(1);
            filtra1();
            atualizarVida();
            atualizarPower()
        }

    }
}


// função caso escolha o golpe 4

function golpear4(x, y) {
    if (x <= 2) {
        if (y == 1) {
            if (verificaPer == true) {
                message.innerHTML = falas.mrMartino.desviou;
            }
            else {
                message.innerHTML = falas.magnusDraco.desviou;
            }
            btn1.setAttribute("disabled", "disabled");
            classEdit();
        }
        else {
            if (verificaPer == true) {
                message.innerHTML = falas.magnusDraco.desviou;
            }
            else {
                message.innerHTML = falas.mrMartino.desviou;
            }
            classEdit();
        }

    }

    else if (x >= 3 && x <= 8) {
        if (y == 1) {
            if (verificaPer == true) {
                message.innerHTML = falas.magnusDraco.golpes4.fala1;
            }
            else {
                message.innerHTML = falas.mrMartino.golpes4.fala1;
            }
            btn1.setAttribute("disabled", "disabled");
            classEdit();
            vida2 -= dano4;
            ultimate(dano4, 1);
            filtrarUlt(0);
            filtra2();
            atualizarVida();
            atualizarPower()
        }
        else {
            if (verificaPer == true) {
                message.innerHTML = falas.mrMartino.golpes4.fala1;
            }
            else {
                message.innerHTML = falas.magnusDraco.golpes4.fala1;
            }
            classEdit();
            vida1 -= dano4_2;
            ultimate(dano4_2, 0);
            filtrarUlt(1);
            filtra1();
            atualizarVida();
            atualizarPower()
        }

    }
    else {
        if (y == 1) {
            if (verificaPer == true) {
                message.innerHTML = falas.magnusDraco.golpes4.fala2;
            }
            else {
                message.innerHTML = falas.mrMartino.golpes4.fala2;
            }
            btn1.setAttribute("disabled", "disabled");
            classEdit();
            vida2 -= danoCritico(dano4)
            ultimate(dano4, 1);
            filtrarUlt(0);
            filtra2();
            atualizarVida();
            atualizarPower()
        }
        else {
            if (verificaPer == true) {
                message.innerHTML = falas.mrMartino.golpes4.fala2;
            }
            else {
                message.innerHTML = falas.magnusDraco.golpes4.fala2;
            }
            classEdit();
            vida1 -= danoCritico(dano4_2)
            ultimate(dano4_2, 0);
            filtrarUlt(1);
            filtra1()
            atualizarVida();
            atualizarPower()
        }

    }
}

function ult(y) {
    if (y == 1) {
        inative();
        if (verificaPer == true) {
            message.innerHTML = falas.magnusDraco.ult.fala2;
        }
        else {
            message.innerHTML = falas.mrMartino.ult.fala2
        }
        btn1.setAttribute("disabled", "disabled");
        classEdit();
        vida2 -= ultDano1;
        somaUlt1 = 0;
        filtra2()
        atualizarVida();
        atualizarPower()
    }
    else {
        if (verificaPer == true) {
            message.innerHTML = falas.mrMartino.ult.fala2;
        }
        else {
            message.innerHTML = falas.magnusDraco.ult.fala2
        }
        classEdit();
        vida1 -= ultDano1_2;
        somaUlt2 = 0;
        filtra1();
        atualizarVida();
        atualizarPower()
    }
}

