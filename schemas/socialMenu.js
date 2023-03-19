export default {
  name: 'socialMenu',
  title: 'Menu de Social',
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
          to: {type: 'social'},
          options: {
            filter: '_type == "social"',
          },
        },
      ],
    },
  ],
}
