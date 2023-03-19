export default {
  name: 'menu',
  title: 'Menu',
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
          to: [
            {type: 'bourse'},
            {type: 'bourse-nationalite'},
            {type: 'bourse-ressource'},
            {type: 'bourse-complementaire'},
            {type: 'bourse-recours'},
            {type: 'bourse-revision'},
            {type: 'logement'},
            {type: 'social'},
            {type: 'autre'},
            {type: 'cvec'},
          ],
          options: {
            filter:
              '_type in ["logement", "bourse", "social", "cvec", "autre", "bourse-nationalite", "bourse-ressource", "bourse-complementaire", "bourse-recours", "bourse-revision"]',
          },
        },
      ],
    },
  ],
}
