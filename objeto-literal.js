const user = {
    nome: "Leonardo",
    email: "l@l.com",
    nascimento: "27/03/03",
    role: "estudante",
    ativo: true,
    exibirInfos: function () {
        console.log(this.nome, this.email);
    },
};
user.exibirInfos();

const exibir = function () {
    console.log(this.nome, this.email);
};

const exibirNomeEmail = exibir.bind(user);
exibirNomeEmail();
