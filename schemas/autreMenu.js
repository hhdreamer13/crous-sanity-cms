export default {
  name: 'autreMenu',
  title: 'Menu de Autre',
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
          to: {type: 'autre'},
          options: {
            filter: '_type == "autre"',
          },
        },
      ],
    },
  ],
}
