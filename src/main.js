class Pessoa {
    constructor(nome,nota){
        this.nome = nome;
        this.nota = nota;
    }
}

const alunos = [
    new Pessoa("Ricardo",10),
    new Pessoa("Lua",3),
    new Pessoa("Vanessa",5),
    new Pessoa("Mel",6),
];

const aprovados = alunos.filter(function(aluno) {
    return aluno.nota >= 6;
});

function text(){
    const nomeAprovados = aprovados.map((aluno) => `${aluno.nome} (Nota: ${aluno.nota})`).join(", ");
    console.log(`Os aprovados são: ${nomeAprovados}`);
}

text();