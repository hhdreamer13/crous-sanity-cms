export default {
  name: 'bourseMenu',
  title: 'Menu de Bourse',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Titre',
      type: 'string',
    },
    {
      name: 'items',
      title: 'Éléments de menu',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: {type: 'bourse'},
          options: {
            filter: '_type == "bourse"',
          },
        },
      ],
    },
  ],
}
