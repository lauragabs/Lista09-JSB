window.addEventListener("DOMContentLoaded", function(){

    //data de nascimento
    // Formatos permitidos: dd/mm/aaaa ou dd/mm/aa
    let nascimento = document.getElementById("nascimento");
    document.getElementById("btnValidarNascimento").addEventListener("click", function(){
        let padrao = /^(0[I1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/(\d{2}|\d{4})$/;
        (padrao.test(nascimento.value))?alert("Valido"):alert("Invalido");
    })

    //cpf
    // Formato: xxx.xxx.xxx-xx
    let cpf = document.getElementById("cpf");
    document.getElementById("btnValidarCpf").addEventListener("click", function () {
        let padrao = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
        (padrao.test(cpf.value)) ? alert("Válido") : alert("Inválido");
    });

    //matricula
    // Formato: IFTM-xxx/xxx-yy (x dígito, y alfanumérico), case-insensitive
    let matricula = document.getElementById("matricula");
    document.getElementById("btnValidarMatricula").addEventListener("click", function () {
        let padrao = /^iftm-\d{3}\/\d{3}-[a-zA-Z0-9]{2}$/i;
        (padrao.test(matricula.value)) ? alert("Válido") : alert("Inválido");
    });

    //disciplina 1
    // Formato: MT-xx.xxx-IFTM (todas letras podem ser maiúsc/minúsc)
    let disciplina = document.getElementById("desciplina");
    document.getElementById("btnValidarDisciplina").addEventListener("click", function () {
        let padrao = /^(M|m)(T|t)-\d{2}\.\d{3}-(I|i)(F|f)(T|t)(M|m)$/;
        (padrao.test(disciplina.value)) ? alert("Válido") : alert("Inválido");
    });

    //disciplina 2
    // Formato: MT-xx.xxx-IFTM
    // "MT" deve ser MAIÚSCULO, "IFTM" pode ser qualquer case
    let disciplina2 = document.getElementById("desciplina2");
    document.getElementById("btnValidarDisciplina2").addEventListener("click", function () {
        let padrao = /^MT-\d{2}\.\d{3}-(I|i)(F|f)(T|t)(M|m)$/;
        (padrao.test(disciplina2.value)) ? alert("Válido") : alert("Inválido");
    });

    //disciplina 3
    // Letras podem ter espaços entre si, máximo 1 espaço
    // Ex: "M T -12.345 - I F T M"
    let disciplina3 = document.getElementById("desciplina3");
    document.getElementById("btnValidarDisciplina3").addEventListener("click", function () {
        let padrao = /^[Mm] ?[Tt]-\d{2}\.\d{3}-[Ii] ?[Ff] ?[Tt] ?[Mm]$/i;
        (padrao.test(disciplina3.value)) ? alert("Válido") : alert("Inválido");
    });

    //disciplina 4 
    // MT-xx.xxx-IFTM Y
    // Y = "Uberlândia" ou "Uberlândia Centro"
    let disciplina4 = document.getElementById("desciplina4");
    document.getElementById("btnValidarDisciplina4").addEventListener("click", function () {
        let padrao = /^MT-\d{2}\.\d{3}-IFTM Uberlândia( Centro)?$/;
        (padrao.test(disciplina4.value)) ? alert("Válido") : alert("Inválido");
    });

    //nome campus
    // "IFTM campus Uberlândia" ou "IFTM campus Uberlândia Centro"
    let campus = document.getElementById("campus");
    document.getElementById("btnValidaCampus").addEventListener("click", function () {
        let padrao = /^IFTM campus Uberlândia( Centro)?$/;
        (padrao.test(campus.value)) ? alert("Válido") : alert("Inválido");
    });

    //telefone 1
    // Formato +yy(xx)xxxxx-xxxx
    let telefone = document.getElementById("telefone");
    document.getElementById("btnValidarTelefone").addEventListener("click", function () {
        let padrao = /^\+\d{2}\(\d{2}\)\d{5}-\d{4}$/;
        (padrao.test(telefone.value)) ? alert("Válido") : alert("Inválido");
    });

    //telefone 2
    // Formato: (xx)xxxxx-xxxx ou (xxx)xxxxx-xxxx
    let telefone2 = document.getElementById("telefone2");
    document.getElementById("btnValidarTelefone2").addEventListener("click", function () {
        let padrao = /^\(\d{2,3}\)\d{5}-\d{4}$/;
        (padrao.test(telefone2.value)) ? alert("Válido") : alert("Inválido");
    });

    //altura
    // Formatos: x,xz ou x.xz  (z opcional)
    // intervalo permitido: [1.3, 2.5]
    let altura = document.getElementById("altura");
    document.getElementById("btnValidarAltura").addEventListener("click", function () {
        let padrao = /^(\d)([,.])(\d{1,2})$/;
    
        if (!padrao.test(altura.value)) {
            alert("Inválido");
            return;
        }
    
        let valor = parseFloat(altura.value.replace(",", "."));
        (valor >= 1.3 && valor <= 2.5) ? alert("Válido") : alert("Inválido");
    });

    //Faturamento
    // Formato: R$X,XX até R$999.999.999.999,99
    let faturamento = document.getElementById("faturamento");
    document.getElementById("btnValidarFaturamento").addEventListener("click", function () {
        let padrao = /^R\$((\d{1,3})(\.\d{3}){0,3}|0),\d{2}$/;
        (padrao.test(faturamento.value)) ? alert("Válido") : alert("Inválido");
    });
    

    //Cronometro
    // HH:MM:SS:CC com limites
    let cronometro = document.getElementById("cronometro");
    document.getElementById("btnValidarCronometro").addEventListener("click", function () {
        let padrao = /^(\d{2}):(\d{2}):(\d{2}):(\d{2})$/;
        let match = cronometro.value.match(padrao);
    
        if (!match) return alert("Inválido");
    
        let hh = Number(match[1]);
        let mm = Number(match[2]);
        let ss = Number(match[3]);
        let cc = Number(match[4]);
    
        (hh <= 23 && mm <= 59 && ss <= 59 && cc <= 99)
            ? alert("Válido")
            : alert("Inválido");
    });
    

    //Senha
    // Formatos: X&W.Y.Z-U,V.T   ou   X&W.Y-U,V.T
    let senha = document.getElementById("senha");
    document.getElementById("btnValidarSenha").addEventListener("click", function () {
        let padrao = /^[A-Za-z0-9._-]{5,}&[a-pA-P]+\.[aeiou]+(?:\.[A-Za-z0-5]+)?-[^0-9]+,[^A-Za-z0-9]{2}\.[^ab01]+$/;
        (padrao.test(senha.value)) ? alert("Válido") : alert("Inválido");

        console.log(padrao.test("abc12.&ppp.aeiou-xyz,@#.Z"));      // true (corrigido)
        console.log(padrao.test("12345.&a.ae-hello,$%.KLM"));        // true
        console.log(padrao.test("user_name.&pP.aei.I5-abc,!@.xyz")); // true

    });

});