const Document = r => require.ensure([], () => r(require('@/components/document.vue')), 'document')
const Button = r => require.ensure([], () => r(require('@/docs/button.md')), 'button.md')

export default [
  {
    path: '/document',
    component: Document,
    children: [
      {
        path: 'button',
        component: Button
      }
    ]
  },
  {
    path: '/',
    redirect: '/document'
  }
]
