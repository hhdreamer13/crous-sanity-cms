export default {
  name: 'logementMenu',
  title: 'Menu de Logement',
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
          to: {type: 'logement'},
          options: {
            filter: '_type == "logement"',
          },
        },
      ],
    },
  ],
}
