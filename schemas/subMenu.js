export default {
  name: 'subMenu',
  title: 'SubMenu',
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
          ],
          options: {
            filter:
              '_type in ["bourse", "bourse-nationalite", "bourse-ressource", "bourse-complementaire", "bourse-recours", "bourse-revision"]',
          },
        },
      ],
    },
  ],
}
