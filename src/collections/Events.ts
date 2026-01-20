import type { CollectionConfig } from 'payload'

export const Events: CollectionConfig = {
  slug: 'events',
  labels: {
    singular: 'Evento',
    plural: 'Eventos',
  },
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'startDate', 'type', 'featured'],
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      label: 'Título del evento',
      required: true,
      admin: {
        placeholder: 'Ej: Bienal de Montevideo',
      },
    },
    {
      name: 'type',
      type: 'select',
      label: 'Tipo de evento',
      options: [
        { label: 'Charla', value: 'talk' },
        { label: 'Workshop', value: 'workshop' },
        { label: 'Exposición', value: 'expo' },
        { label: 'Festival', value: 'festival' },
      ],
      required: true,
    },
    {
      name: 'startDate',
      type: 'date',
      label: 'Fecha de inicio',
      required: true,
      admin: {
        date: {
          pickerAppearance: 'dayOnly',
        },
      },
    },
    {
      name: 'endDate',
      type: 'date',
      label: 'Fecha de fin',
      admin: {
        date: {
          pickerAppearance: 'dayOnly',
        },
      },
    },
    {
      name: 'location',
      type: 'text',
      label: 'Ubicación',
      admin: {
        placeholder: 'Ciudad / País',
      },
    },
    {
      name: 'isOnline',
      type: 'checkbox',
      label: 'Evento online',
    },
    {
      name: 'url',
      type: 'text',
      label: 'Sitio web oficial',
      admin: {
        placeholder: 'https://...',
      },
    },
    {
      name: 'description',
      type: 'textarea',
      label: 'Descripción',
    },
    {
      name: 'tags',
      type: 'array',
      label: 'Etiquetas',
      admin: {
        description: 'Ej: diseño gráfico, UX, motion',
      },
      fields: [
        {
          name: 'tag',
          type: 'text',
          label: 'Etiqueta',
        },
      ],
    },
    {
      name: 'featured',
      type: 'checkbox',
      label: 'Evento destacado',
      defaultValue: false,
    },
    {
      name: 'color',
      type: 'text',
      label: 'Color del evento',
      admin: {
        description: 'Color para el calendario (hex). Ej: #E6C98A',
        placeholder: '#E6C98A',
      },
    },
  ],
}
