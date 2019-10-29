const initialState = {
  texts: [
    {
      id: 2,
      text: 'Pozvánka na vánoční výpravu',
      color: 'rgb(154, 21, 143)',
      type: 'header',
      name: 'Nadpis',
      markdown: true
    },
    {
      id: 1,
      text:
        'Vánoce už jsou za dveřmi! Proto se opět vydáme na vánoční výpravu do Nové Vsi pod Horou Svatého Šebestiána, která se bude konat **16. 12.–18. 12.**. Sejdeme se **na nádraží** v pátek 16. 12. **v 18:15** (vlak odjíždí v 18:40). Děti je třeba dopravit až na nádraží. Vrátíme se v neděli kolem **13:48** tamtéž.',
      color: 'rgb(154, 21, 143)',
      type: 'normal',
      name: 'Obsah',
      markdown: true
    },

    {
      id: 3,
      text: 'Janča, Domča a Lenča, vedoucí oddílu Sedmikrásky',
      color: 'rgb(154, 21, 143)',
      type: 'footer',
      name: 'Patička',
      markdown: false
    }
  ],
  things: [
    {
      id: 1,
      name: 'přezuvky',
      selected: true
    },
    {
      id: 2,
      name: 'spacák',
      selected: false
    },
    {
      id: 3,
      name: 'ešus',
      selected: false
    },
    {
      id: 4,
      name: 'karimatku',
      selected: false
    },
    {
      id: 5,
      name: 'věci na schůzku',
      selected: false
    },
    {
      id: 6,
      name: 'zápisník a tužku',
      selected: false
    },
    {
      id: 7,
      name: 'kroj',
      selected: false
    },
    {
      id: 8,
      name: 'hygienu',
      selected: false
    },
    {
      id: 9,
      name: 'baterku',
      selected: false
    },
    {
      id: 10,
      name: 'večeři',
      selected: false
    },
    {
      id: 11,
      name: 'šátek',
      selected: false
    }
  ],
  bw: false
};

export default initialState;
