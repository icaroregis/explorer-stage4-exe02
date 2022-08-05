/*
  Nesse desafio você irá criar uma lista de **estudantes** e, cada estudante dentro dessa lista, deverá conter os seguintes dados:

  - nome;
  - nota da primeira prova;
  - nota da segunda prova.

  Depois de criada a lista:

  - [ ]  Crie uma **função** que irá calcular a média das notas de cada aluno;
  - [ ]  Supondo que a média, para esse concurso é **7**, verifique **se** cada aluno obteve sucesso ou não em entrar no concurso e mostre uma mensagem na tela.
*/
const alunos = [
  {
    nome: "Ícaro Almeida",
    primeiraProva: 10,
    segundaProva: 6
  },
  {
    nome: "Renato Silva",
    primeiraProva: 4,
    segundaProva: 4
  },
  {
    nome: "Cristiane Pinto",
    primeiraProva: 10,
    segundaProva: 9
  },
  {
    nome: "Márcio Buzzelin",
    primeiraProva: 10,
    segundaProva: 2
  },
  {
    nome: "Cassandra Lima",
    primeiraProva: 7,
    segundaProva: 7
  }
]

function media(nota1, nota2, nomeDoAluno) {
  const media = ((nota1 + nota2) / 2).toFixed(2);
  const result = (nota1 + nota2) / 2 >= 7;
  if (result) {
    return `A média do aluno(a) ${nomeDoAluno} é: ${media}.\n Parabéns ${nomeDoAluno}!!! Você foi aprovado no concurso!!!`
  }

  return `A média do aluno(a) ${nomeDoAluno} é: ${media}.\n Nõo foi dessa vez ${nomeDoAluno}!!! Tente novamente!!!`
}

alunos.map((aluno) => {
  alert(media(aluno.primeiraProva, aluno.segundaProva, aluno.nome));
});

