export default {
  name: 'fileAsset',
  type: 'document',
  title: 'Fichiers',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Titre',
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description',
      description: 'Ajoutez une courte description du fichier',
    },
    {
      name: 'file',
      type: 'file',
      title: 'Fichier',
    },
  ],
  preview: {
    select: {
      title: 'title',
      media: 'file',
    },
  },
}
