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

const admin = {
    nome: "Jheison",
    email: "j@j.com",
    nascimento: "27/03/03",
    role: "admin",
    ativo: true,
    criarCurso: function () {
        console.log("curso criado");
    },
};

Object.setPrototypeOf(admin, user);
admin.criarCurso();
admin.exibirInfos();
