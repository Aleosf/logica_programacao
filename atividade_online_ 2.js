/*
SITUAÇÃO-PROBLEMA - Atividade online 2
Desenvolvimento de um sistema de cadastro para eventos.
Esse sistema terá que atender os seguintes requisitos:
• Se a data do evento for posterior à data atual, permitir o evento; senão, alertar que o cadastro não será permitido por data inválida.
• Se o participante for maior de 18 anos, permitir o cadastro; senão, alertar que o cadastro não é permitido pela idade.
• Listar participantes e palestrantes por evento.
• Enquanto a quantidade de participantes for inferior a 100, permitir cadastro; senão, alertar que o cadastro não será permitido por ter excedido o limite.
*/

let dtEvento = "08/04/2022";
let dtAtual = "06/04/2022";
const lmteParticipantes = 100;
let idadeMinParticipante = 18;
let lstPalestrantes = ["Eduardo Costa", " Leonardo", " Gustavo Lima"];
let lstParticipantes = "Participante ";

parseInt(dtEvento);
parseInt(dtAtual);

            if (dtEvento <= dtAtual)
            {
                console.log("Data inválida. Verifique a data para que seja possível cadastrar um novo evento.");
            }
            else if (idadeMinParticipante < 18)
            {
                console.log("Atenção! Candidato a participante é menor de idade, NÃO PODE PARTICIPAR.");
            }
            else
            {
                for (let i = 0; i <= lmteParticipantes; i++)
                {
                    if (lstParticipantes > lmteParticipantes)
                    {{console.log("Atenção! Novo participante não pode ser cadastrado. Limite máximo de 100 atingido.")}
                    }
                            else
                            {
                                console.log("Relação de Participantes: " + lstParticipantes + i + " | " + "Palestrantes: "+ lstPalestrantes)
                            }
                }
            }