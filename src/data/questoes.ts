export interface Questao {
  id: number;
  pergunta: string;
  tema: string;
  opcoes: string[];
  correta: string;
  comentario: string;
  estrategica: boolean;
}

export interface ErroSessao {
  questao: string;
  correta: string;
  justificativa: string;
}

const temas = [
  "Ética Profissional",
  "Direito Constitucional",
  "Direito Civil",
  "Direito Penal",
  "Processo Civil",
  "Processo Penal",
  "Direito do Trabalho",
  "Direito Administrativo",
  "Direito Tributário",
  "Direito Empresarial",
  "Direitos Humanos",
  "Direito do Consumidor",
  "ECA",
  "Direito Ambiental",
];

const perguntas: Questao[] = [
  {
    id: 1,
    pergunta: "João, advogado, recebeu convite para atuar como árbitro em processo arbitral envolvendo sociedade da qual já foi consultor há dois anos. De acordo com o Código de Ética e Disciplina da OAB, João:",
    tema: "Ética Profissional",
    opcoes: ["A) Pode aceitar, pois a relação anterior não gera impedimento", "B) Deve recusar, pois há conflito de interesses evidente", "C) Pode aceitar desde que informe às partes sobre a relação anterior", "D) Deve consultar a OAB antes de aceitar o encargo"],
    correta: "B)",
    comentario: "Conforme o art. 25 do Código de Ética e Disciplina da OAB, o advogado deve guardar sigilo e não pode atuar em situações que configurem conflito de interesses, mesmo que a relação anterior tenha cessado. A atuação como árbitro em processo envolvendo ex-cliente viola o dever de lealdade.",
    estrategica: true,
  },
  {
    id: 2,
    pergunta: "Maria foi aprovada no exame da OAB e inscrita na seccional de São Paulo. Após mudar-se para Minas Gerais, deseja exercer a advocacia naquele estado. Sobre a transferência de inscrição, é correto afirmar que:",
    tema: "Ética Profissional",
    opcoes: ["A) Deve requerer nova inscrição em Minas Gerais", "B) Pode advogar em MG sem qualquer providência adicional", "C) Deve requerer transferência, mantendo-se inscrita em SP durante o processamento", "D) A transferência é automática após comunicação ao Conselho Federal"],
    correta: "C)",
    comentario: "De acordo com o Estatuto da Advocacia (Lei 8.906/94), a transferência de inscrição deve ser requerida pelo advogado quando mudar de domicílio profissional, mantendo a inscrição original até o deferimento.",
    estrategica: true,
  },
  {
    id: 3,
    pergunta: "Considerando o controle de constitucionalidade, assinale a alternativa correta sobre a Ação Direta de Inconstitucionalidade (ADI) perante o STF:",
    tema: "Direito Constitucional",
    opcoes: ["A) Qualquer cidadão pode propor ADI perante o STF", "B) O Presidente da República é legitimado ativo para propor ADI", "C) A ADI somente pode ter como objeto leis federais", "D) O efeito da decisão em ADI é sempre inter partes"],
    correta: "B)",
    comentario: "O art. 103 da CF/88 elenca os legitimados para propositura de ADI, incluindo o Presidente da República. A ADI pode ter como objeto leis e atos normativos federais e estaduais, e seus efeitos são erga omnes e vinculantes.",
    estrategica: true,
  },
  {
    id: 4,
    pergunta: "Sobre os direitos e garantias fundamentais previstos na Constituição Federal de 1988, é INCORRETO afirmar que:",
    tema: "Direito Constitucional",
    opcoes: ["A) A casa é asilo inviolável do indivíduo, ninguém nela podendo penetrar sem consentimento do morador", "B) É livre a expressão da atividade intelectual, artística, científica e de comunicação, independentemente de censura ou licença", "C) É garantido o direito de propriedade, que deverá atender à sua função social", "D) A lei penal retroagirá em qualquer hipótese para beneficiar ou prejudicar o réu"],
    correta: "D)",
    comentario: "A CF/88 estabelece no art. 5º, XL, que a lei penal não retroagirá, SALVO para beneficiar o réu. Portanto, a retroação só ocorre quando favorável ao réu, nunca para prejudicá-lo.",
    estrategica: true,
  },
  {
    id: 5,
    pergunta: "No que se refere à capacidade civil, de acordo com o Código Civil de 2002, assinale a alternativa correta:",
    tema: "Direito Civil",
    opcoes: ["A) São absolutamente incapazes os menores de 18 anos", "B) São absolutamente incapazes apenas os menores de 16 anos", "C) Os ébrios habituais são absolutamente incapazes", "D) A incapacidade relativa cessa aos 21 anos de idade"],
    correta: "B)",
    comentario: "Após a Lei 13.146/2015 (Estatuto da Pessoa com Deficiência), o art. 3º do CC passou a considerar absolutamente incapazes apenas os menores de 16 anos. As demais hipóteses foram realocadas para a incapacidade relativa ou removidas.",
    estrategica: true,
  },
  {
    id: 6,
    pergunta: "Carlos celebrou contrato de compra e venda de imóvel com Diana, mediante escritura pública. Antes do registro, Carlos vendeu o mesmo imóvel a Eduardo, que registrou primeiro. Nesse caso:",
    tema: "Direito Civil",
    opcoes: ["A) Diana é a proprietária, pois seu contrato é anterior", "B) Eduardo é o proprietário, pois registrou primeiro no Cartório de Registro de Imóveis", "C) Ambos são proprietários em condomínio", "D) Nenhum dos dois é proprietário até decisão judicial"],
    correta: "B)",
    comentario: "No direito brasileiro, a propriedade imobiliária se transfere pelo registro (art. 1.245 do CC). Enquanto não registrado, o contrato gera apenas direitos obrigacionais. Eduardo, ao registrar primeiro, tornou-se proprietário.",
    estrategica: true,
  },
  {
    id: 7,
    pergunta: "Sobre o crime de furto, previsto no art. 155 do Código Penal, é correto afirmar:",
    tema: "Direito Penal",
    opcoes: ["A) O furto de coisa de pequeno valor sempre será considerado furto privilegiado", "B) O repouso noturno é causa de aumento de pena aplicável ao furto qualificado", "C) A pena do furto qualificado é de reclusão de 2 a 8 anos", "D) O furto mediante fraude se confunde com o estelionato"],
    correta: "C)",
    comentario: "O art. 155, §4º do CP prevê pena de reclusão de 2 a 8 anos para o furto qualificado. O furto privilegiado exige, cumulativamente, primariedade do agente E pequeno valor da coisa. A causa de aumento por repouso noturno, conforme jurisprudência recente do STJ, pode ser aplicada ao furto qualificado.",
    estrategica: true,
  },
  {
    id: 8,
    pergunta: "Pedro, em estado de necessidade, subtraiu alimentos de um supermercado para alimentar seus filhos que estavam em situação de extrema fome. Neste caso, Pedro:",
    tema: "Direito Penal",
    opcoes: ["A) Responde por furto, mas com atenuante de pena", "B) Não praticou crime, pois agiu em estado de necessidade", "C) Responde por furto privilegiado", "D) Responde por exercício arbitrário das próprias razões"],
    correta: "B)",
    comentario: "O estado de necessidade (art. 24 do CP) é causa excludente de ilicitude. Quando o agente pratica o fato para salvar de perigo atual, que não provocou por sua vontade, direito próprio ou alheio, cujo sacrifício não era razoável exigir-se, não há crime.",
    estrategica: false,
  },
  {
    id: 9,
    pergunta: "No Processo Civil, sobre a tutela provisória de urgência antecipada, é correto afirmar:",
    tema: "Processo Civil",
    opcoes: ["A) Pode ser concedida de ofício pelo juiz em qualquer caso", "B) Exige probabilidade do direito e perigo de dano ou risco ao resultado útil do processo", "C) Não pode ser concedida em caráter antecedente", "D) É irrecorrível a decisão que a concede"],
    correta: "B)",
    comentario: "O art. 300 do CPC/2015 exige dois requisitos cumulativos para a tutela de urgência: probabilidade do direito (fumus boni iuris) e perigo de dano ou risco ao resultado útil do processo (periculum in mora). Pode ser requerida em caráter antecedente ou incidental.",
    estrategica: true,
  },
  {
    id: 10,
    pergunta: "Sobre os recursos no Processo Civil, assinale a alternativa INCORRETA:",
    tema: "Processo Civil",
    opcoes: ["A) O agravo de instrumento é cabível contra decisões interlocutórias que versem sobre tutelas provisórias", "B) A apelação tem efeito suspensivo como regra", "C) Os embargos de declaração interrompem o prazo para outros recursos", "D) O recurso especial é cabível quando a decisão violar tratado internacional"],
    correta: "D)",
    comentario: "O recurso especial (art. 105, III, CF) é cabível por contrariedade a lei federal ou tratado, mas a alternativa D descreve uma hipótese de recurso extraordinário (violação à CF) de forma equivocada.",
    estrategica: true,
  },
  {
    id: 11,
    pergunta: "No Processo Penal, o inquérito policial pode ser definido como:",
    tema: "Processo Penal",
    opcoes: ["A) Procedimento judicial de investigação", "B) Procedimento administrativo de natureza inquisitória", "C) Fase obrigatória para toda ação penal", "D) Procedimento conduzido exclusivamente pelo Ministério Público"],
    correta: "B)",
    comentario: "O inquérito policial é um procedimento administrativo, de natureza inquisitória, conduzido pela autoridade policial (delegado). Não é fase obrigatória da ação penal, servindo para colher elementos informativos sobre a autoria e materialidade do delito.",
    estrategica: true,
  },
  {
    id: 12,
    pergunta: "Sobre a prisão preventiva, de acordo com o CPP e a jurisprudência dos Tribunais Superiores, é correto afirmar:",
    tema: "Processo Penal",
    opcoes: ["A) Pode ser decretada de ofício pelo juiz durante o inquérito policial", "B) Exige prova da materialidade e indícios suficientes de autoria", "C) É cabível para qualquer tipo de infração penal", "D) Não pode ser revogada após ser decretada"],
    correta: "B)",
    comentario: "A prisão preventiva exige prova da materialidade e indícios suficientes de autoria (art. 312 do CPP). Após o Pacote Anticrime (Lei 13.964/2019), o juiz não pode mais decretá-la de ofício. Não é cabível para contravenções penais.",
    estrategica: true,
  },
  {
    id: 13,
    pergunta: "No Direito do Trabalho, sobre a jornada de trabalho, é correto afirmar que:",
    tema: "Direito do Trabalho",
    opcoes: ["A) A jornada normal máxima é de 44 horas semanais e 8 horas diárias", "B) As horas extras são limitadas a 4 horas diárias", "C) O intervalo intrajornada pode ser livremente suprimido por acordo individual", "D) O trabalho noturno urbano compreende o período entre 21h e 5h"],
    correta: "A)",
    comentario: "O art. 7º, XIII da CF/88 estabelece jornada máxima de 8 horas diárias e 44 horas semanais. O trabalho noturno urbano é entre 22h e 5h (art. 73 da CLT). O intervalo intrajornada mínimo é de 1 hora para jornadas acima de 6 horas.",
    estrategica: true,
  },
  {
    id: 14,
    pergunta: "Sobre o ato administrativo, é correto afirmar que a anulação:",
    tema: "Direito Administrativo",
    opcoes: ["A) Somente pode ser realizada pelo Poder Judiciário", "B) Pode ser feita pela própria Administração Pública, de ofício", "C) Atinge apenas atos discricionários", "D) Produz efeitos apenas prospectivos (ex nunc)"],
    correta: "B)",
    comentario: "Conforme a Súmula 473 do STF, a Administração pode anular seus próprios atos quando eivados de vícios que os tornem ilegais, com efeitos retroativos (ex tunc). A autotutela é princípio fundamental do Direito Administrativo.",
    estrategica: true,
  },
  {
    id: 15,
    pergunta: "No Direito Tributário, sobre o princípio da anterioridade, é correto afirmar:",
    tema: "Direito Tributário",
    opcoes: ["A) Todos os tributos estão sujeitos à anterioridade nonagesimal e de exercício", "B) O IPI está sujeito apenas à anterioridade nonagesimal", "C) O Imposto de Renda está sujeito apenas à anterioridade de exercício", "D) As contribuições sociais não se submetem a qualquer anterioridade"],
    correta: "C)",
    comentario: "O Imposto de Renda está sujeito apenas à anterioridade de exercício (art. 150, III, 'b' da CF), mas é exceção à anterioridade nonagesimal (art. 150, §1º). Já o IPI é exceção à anterioridade de exercício, mas se submete à noventena.",
    estrategica: true,
  },
  {
    id: 16,
    pergunta: "Sobre os títulos de crédito no Direito Empresarial, assinale a alternativa correta:",
    tema: "Direito Empresarial",
    opcoes: ["A) O cheque é ordem de pagamento à vista, não admitindo aceite", "B) A nota promissória é ordem de pagamento emitida pelo credor", "C) A duplicata pode ser emitida sem lastro em operação mercantil", "D) A letra de câmbio dispensa a figura do sacado"],
    correta: "A)",
    comentario: "O cheque, regulado pela Lei 7.357/85, é ordem de pagamento à vista e não admite aceite (art. 6º). A nota promissória é promessa de pagamento (não ordem). A duplicata deve ter lastro em compra e venda mercantil ou prestação de serviços.",
    estrategica: true,
  },
  {
    id: 17,
    pergunta: "No âmbito dos Direitos Humanos, sobre o Sistema Interamericano de Proteção, é correto afirmar que:",
    tema: "Direitos Humanos",
    opcoes: ["A) A Corte Interamericana pode receber petições individuais diretamente", "B) A Comissão Interamericana tem função consultiva e contenciosa", "C) O Brasil reconheceu a jurisdição obrigatória da Corte Interamericana em 1998", "D) Apenas Estados podem ser responsabilizados perante a Corte Interamericana"],
    correta: "D)",
    comentario: "No Sistema Interamericano, apenas Estados podem figurar como parte ré perante a Corte. Indivíduos não podem ser demandados. O Brasil reconheceu a jurisdição da Corte em 1998. A Comissão tem função de análise de petições e a Corte tem função contenciosa e consultiva.",
    estrategica: false,
  },
  {
    id: 18,
    pergunta: "No Direito do Consumidor, sobre a responsabilidade pelo fato do produto, é correto afirmar:",
    tema: "Direito do Consumidor",
    opcoes: ["A) A responsabilidade do fornecedor é subjetiva", "B) O comerciante responde solidariamente com o fabricante em todos os casos", "C) O fabricante responde objetivamente pelos danos causados por defeitos do produto", "D) O consumidor deve provar a culpa do fornecedor para obter indenização"],
    correta: "C)",
    comentario: "O CDC (art. 12) estabelece responsabilidade objetiva do fabricante, produtor, construtor e importador pelos danos causados por defeitos dos produtos. O comerciante tem responsabilidade subsidiária (art. 13), salvo exceções.",
    estrategica: true,
  },
  {
    id: 19,
    pergunta: "Sobre o Estatuto da Criança e do Adolescente (ECA), as medidas socioeducativas aplicáveis ao adolescente infrator incluem:",
    tema: "ECA",
    opcoes: ["A) Pena privativa de liberdade de até 5 anos", "B) Internação por prazo indeterminado, sem limite máximo", "C) Prestação de serviços à comunidade por período não excedente a 6 meses", "D) Multa e prisão em regime semiaberto"],
    correta: "C)",
    comentario: "O ECA (art. 112 e 117) prevê medidas socioeducativas, entre elas a prestação de serviços à comunidade por prazo não superior a 6 meses. A internação tem prazo máximo de 3 anos (art. 121, §3º). Não se aplicam penas do Código Penal a adolescentes.",
    estrategica: false,
  },
  {
    id: 20,
    pergunta: "No Direito Ambiental, sobre a responsabilidade civil por dano ambiental, é correto afirmar:",
    tema: "Direito Ambiental",
    opcoes: ["A) A responsabilidade é subjetiva, exigindo prova de culpa", "B) A responsabilidade é objetiva, baseada na teoria do risco integral", "C) O poluidor indireto não pode ser responsabilizado", "D) A reparação do dano ambiental é limitada ao valor do bem degradado"],
    correta: "B)",
    comentario: "A responsabilidade civil por dano ambiental é objetiva, fundada na teoria do risco integral (art. 14, §1º da Lei 6.938/81 e art. 225, §3º da CF). Não admite excludentes de responsabilidade. O poluidor direto e indireto podem ser responsabilizados solidariamente.",
    estrategica: false,
  },
];

// Generate more questions by varying existing ones
const generateMoreQuestions = (): Questao[] => {
  const extra: Questao[] = [];
  let id = 21;
  
  for (let i = 0; i < 60; i++) {
    const base = perguntas[i % perguntas.length];
    extra.push({
      ...base,
      id: id++,
      pergunta: `[Questão ${id - 1}] ${base.pergunta}`,
      estrategica: i < 40,
    });
  }
  return extra;
};

export const bancoCompleto: Questao[] = [...perguntas, ...generateMoreQuestions()];

export const bancoEstrategico: Questao[] = bancoCompleto.filter(q => q.estrategica);

export const getEstatisticasTema = (): Record<string, number> => {
  const stats: Record<string, number> = {};
  bancoEstrategico.forEach(q => {
    stats[q.tema] = (stats[q.tema] || 0) + 1;
  });
  return stats;
};

export const getTopTemas = (n: number = 7): [string, number][] => {
  const stats = getEstatisticasTema();
  return Object.entries(stats)
    .sort((a, b) => b[1] - a[1])
    .slice(0, n);
};

export const missoes = [
  "Realizar 15 questões de ÉTICA PROFISSIONAL focadas em Direitos do Advogado.",
  "Foco em ÉTICA: resolver 10 questões sobre Infrações e Sanções Disciplinares.",
  "Missão ÉTICA: dominar as regras de Publicidade e Honorários Advocatícios.",
  "Focar em DIREITO CIVIL: resolver 15 questões sobre Direito de Família e Sucessões.",
  "Dia de DIREITO CIVIL: revisar Contratos em Espécie e fazer 10 questões.",
  "Foco em PROCESSO CIVIL: dominar a sistemática de Recursos (Apelação e Agravos).",
  "Missão PROCESSO CIVIL: focar em Tutelas Provisórias de Urgência e Evidência.",
  "Dia de DIREITO PENAL: focar na Teoria do Crime (Dolo, Culpa e Excludentes).",
  "Dia de PROCESSO PENAL: focar em Prisões (Preventiva e Temporária) e Liberdade Provisória.",
  "Maratona DIREITO DO TRABALHO: dominar as regras de Jornada de Trabalho e Horas Extras.",
  "Direito Constitucional: focar 100% em Controle de Constitucionalidade.",
  "Dia de DIREITO ADMINISTRATIVO: dominar a Nova Lei de Licitações (Lei 14.133).",
  "Dia de DIREITO TRIBUTÁRIO: focar em Princípios e Limitações ao Poder de Tributar.",
  "Treino de Resistência: realizar 30 questões seguidas no Simulado Real.",
  "Simulado Express: fazer 10 questões rápidas e focar na justificativa dos erros.",
];
