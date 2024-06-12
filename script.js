const perguntas = [
    {
        enunciado: "Pergunta 1",
        alternativas: [
            "Alternativa 1",
            "Alternativa 2"
        ]
    },
    {
        enunciado: "Pergunta 2",
        alternativas: [
            "Alternativa 1",
            "Alternativa 2"
        ]
    }
];

const perguntas = [
    {
        enunciado: "Assim que saiu da escola você se depara com uma nova tecnologia, um chat que consegue responder todas as dúvidas que uma pessoa pode ter, ele também gera imagens e áudios hiper-realistas. Qual o primeiro pensamento?",
        alternativas: [
            "Isso é assustador!",
            "Isso é maravilhoso!"
        ]
    },
    let atual = 0;
    let perguntaAtual;

    function mostraPergunta() {
        perguntaAtual = perguntas[atual];
        caixaPerguntas.textContent = perguntaAtual.enunciado;
    }
    mostraPergunta()
    