export default {
  name: 'cvecMenu',
  title: 'Menu de CVEC',
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
          to: {type: 'cvec'},
          options: {
            filter: '_type == "cvec"',
          },
        },
      ],
    },
  ],
}
