const initialState = {
  texts: [
    {
      id: 2,
      text: 'test',
      color: 'rgb(154, 21, 143)',
      colorbw: '#535355',
      type: 'header',
      markdown: true
    },
    {
      id: 1,
      text: 'test',
      color: 'rgb(154, 21, 143)',
      colorbw: '#535355',
      type: 'normal',
      markdown: true
    },

    {
      id: 3,
      text: 'test',
      color: 'rgb(154, 21, 143)',
      colorbw: '#535355',
      type: 'footer',
      markdown: false
    }
  ],
  things: [
    {
      id: 1,
      name: 'šátek',
      selected: false
    }
  ]
};

export default initialState;
