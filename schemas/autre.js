export default {
  name: 'autre',
  type: 'document',
  title: 'Autre',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Titre',
    },
    {
      name: 'paragraphs',
      type: 'array',
      title: 'Paragraphes',
      of: [
        {
          name: 'paragraph',
          type: 'object',
          title: 'Paragraphe',
          fields: [
            {
              name: 'title',
              type: 'string',
              title: 'Sujet',
            },
            {
              name: 'text',
              type: 'array',
              title: 'Texte',
              of: [{type: 'block'}],
            },
          ],
        },
      ],
    },
  ],
}
