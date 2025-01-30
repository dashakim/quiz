export const exerciseTypes = {
  multipleChoice: {
    A1: [
      {
        sentence: 'Tu [verb] café todas as manhãs',
        correctAnswer: 'bebes',
        options: ['bebes', 'bebe', 'bebo', 'beber'],
        rule: 'Second person singular present tense (tu form)',
      },
      {
        sentence: 'Ela [verb] na universidade',
        correctAnswer: 'estuda',
        options: ['estuda', 'estudo', 'estudar', 'estudam'],
        rule: 'Third person singular present tense',
      },
      {
        sentence: 'Nós [verb] português',
        correctAnswer: 'falamos',
        options: ['falamos', 'falam', 'falo', 'fala'],
        rule: 'First person plural present tense',
      },
      {
        sentence: 'Os miúdos [verb] no parque',
        correctAnswer: 'correm',
        options: ['correm', 'corre', 'corro', 'correr'],
        rule: 'Third person plural present tense',
      },
      {
        sentence: 'O senhor [verb] muito bem!',
        correctAnswer: 'cozinha',
        options: ['cozinha', 'cozinho', 'cozinhar', 'cozinham'],
        rule: 'Formal address with o senhor',
      },
    ],
    A2: [
      {
        sentence: 'Se eu [verb] mais, aprendo melhor',
        correctAnswer: 'praticar',
        options: ['praticar', 'pratico', 'praticando', 'pratique'],
        rule: "Infinitive after 'se' in conditional sentences",
      },
      {
        sentence: 'Quando ele [verb], vamos sair',
        correctAnswer: 'chegar',
        options: ['chegar', 'chega', 'chegando', 'chegou'],
        rule: 'Future reference with quando + infinitive',
      },
      {
        sentence: 'Ela está a [verb] para Portugal',
        correctAnswer: 'viajar',
        options: ['viajar', 'viaja', 'viajando', 'viajou'],
        rule: 'Present continuous with estar a + infinitive',
      },
      {
        sentence: 'Os senhores precisam de [verb] o trabalho',
        correctAnswer: 'terminar',
        options: ['terminar', 'terminam', 'terminando', 'termine'],
        rule: 'Infinitive after precisar de',
      },
    ],
  },

  wordCompletion: {
    A1: [
      {
        sentence: 'Tu trab_____ no escritório',
        correctAnswer: 'trabalhas',
        hint: 'trab_____ (to work)',
        rule: 'Second person singular present tense (tu form)',
      },
      {
        sentence: 'Eles mor_____ em Lisboa',
        correctAnswer: 'moram',
        hint: 'mor_____ (to live)',
        rule: 'Third person plural present tense',
      },
      {
        sentence: 'O autocarro est_____ atrasado',
        correctAnswer: 'está',
        hint: 'est_____ (to be)',
        rule: 'Third person singular of estar',
      },
      {
        sentence: 'Nós com_____ no restaurante',
        correctAnswer: 'comemos',
        hint: 'com_____ (to eat)',
        rule: 'First person plural present tense',
      },
    ],
    A2: [
      {
        sentence: 'Nós estamos a est_____ português',
        correctAnswer: 'estudar',
        hint: 'est_____ (to study)',
        rule: 'Present continuous with estar a + infinitive',
      },
      {
        sentence: 'Ele vai volt_____ amanhã',
        correctAnswer: 'voltar',
        hint: 'volt_____ (to return)',
        rule: 'Infinitive after ir (future)',
      },
      {
        sentence: 'As senhoras estão a danç_____ na festa',
        correctAnswer: 'dançar',
        hint: 'danç_____ (to dance)',
        rule: 'Present continuous with estar a + infinitive',
      },
    ],
  },

  articles: {
    A1: [
      {
        sentence: '_____ rapariga gosta de chocolate',
        correctAnswer: 'A',
        rule: 'Feminine definite article',
      },
      {
        sentence: 'Tenho _____ carro novo',
        correctAnswer: 'um',
        rule: 'Masculine indefinite article',
      },
      {
        sentence: '_____ livros são interessantes',
        correctAnswer: 'Os',
        rule: 'Masculine plural definite article',
      },
      {
        sentence: 'Ela comprou _____ bicicleta',
        correctAnswer: 'uma',
        rule: 'Feminine indefinite article',
      },
    ],
    A2: [
      {
        sentence: 'O senhor trabalha _____ hospital',
        correctAnswer: 'no',
        rule: 'Contraction of em + o',
      },
      {
        sentence: 'Vou _____ praia no domingo',
        correctAnswer: 'à',
        rule: 'Contraction of a + a',
      },
      {
        sentence: 'O livro está _____ mesa',
        correctAnswer: 'na',
        rule: 'Contraction of em + a',
      },
      {
        sentence: 'Ela veio _____ Estados Unidos',
        correctAnswer: 'dos',
        rule: 'Contraction of de + os',
      },
    ],
  },

  prepositions: {
    A1: [
      {
        sentence: 'O livro está _____ mesa',
        correctAnswer: 'em',
        options: ['em', 'de', 'para', 'com'],
        rule: "Location preposition 'em'",
      },
      {
        sentence: 'Vou _____ escola todos os dias',
        correctAnswer: 'à',
        options: ['à', 'em', 'de', 'por'],
        rule: "Direction with contracted preposition 'a + a = à'",
      },
    ],
    A2: [
      {
        sentence: 'Venho _____ Portugal',
        correctAnswer: 'de',
        options: ['de', 'em', 'para', 'por'],
        rule: "Origin preposition 'de'",
      },
      {
        sentence: 'Passei _____ tua casa ontem',
        correctAnswer: 'pela',
        options: ['pela', 'em', 'de', 'para'],
        rule: "Movement through with contraction 'por + a'",
      },
    ],
  },

  verbConjugation: {
    A1: [
      {
        sentence: 'Tu (ser) _____ português',
        correctAnswer: 'és',
        rule: 'Present tense of ser',
        hint: 'Second person singular (tu form)',
      },
      {
        sentence: 'Os senhores (estar) _____ em casa?',
        correctAnswer: 'estão',
        rule: 'Present tense of estar',
        hint: 'Formal address plural',
      },
    ],
    A2: [
      {
        sentence: 'Ontem (ir) _____ ao cinema',
        correctAnswer: 'fui',
        rule: 'Past tense of ir',
        hint: 'First person singular preterite',
      },
      {
        sentence: 'Amanhã nós (fazer) _____ o exame',
        correctAnswer: 'faremos',
        rule: 'Future tense of fazer',
        hint: 'First person plural future',
      },
    ],
  },

  timeExpressions: {
    A1: [
      {
        sentence: '_____ vou ao supermercado',
        options: ['Amanhã', 'Ontem', 'Agora', 'Depois'],
        correctAnswer: 'Amanhã',
        rule: 'Future time expressions',
      },
      {
        sentence: 'Ela chegou _____ de Paris',
        options: ['ontem', 'amanhã', 'depois', 'agora'],
        correctAnswer: 'ontem',
        rule: 'Past time expressions',
      },
    ],
    A2: [
      {
        sentence: '_____ uma semana estarei em Lisboa',
        options: ['Daqui a', 'Há', 'Desde', 'Até'],
        correctAnswer: 'Daqui a',
        rule: 'Future time reference',
      },
      {
        sentence: 'Moro aqui _____ dois anos',
        options: ['há', 'daqui a', 'até', 'desde'],
        correctAnswer: 'há',
        rule: 'Duration in the past',
      },
    ],
  },
};

export const grammarRules = {
  articles: {
    basic: 'Portuguese has definite articles (o, a, os, as) and indefinite articles (um, uma, uns, umas)',
    contractions: 'Articles often combine with prepositions: em + o = no, em + a = na, de + o = do, de + a = da',
  },
  prepositions: {
    basic: 'Common prepositions include: em (in/on), de (from/of), para (to/for), com (with)',
    usage: 'Prepositions can indicate location, direction, origin, or purpose',
    contractions: 'Prepositions often contract with articles: por + a = pela, por + o = pelo',
  },
  verbs: {
    present: 'Regular verbs end in -ar, -er, or -ir and follow specific conjugation patterns',
    past: 'The preterite tense is used for completed actions in the past',
    future: 'Future can be expressed with ir + infinitive or the future tense',
    continuous: 'Present continuous is formed with estar a + infinitive',
    formal: 'Formal address uses o senhor/a senhora with third person singular conjugation',
  },
};
