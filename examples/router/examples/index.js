const Examples = r => require.ensure([], () => r(require('@/components/examples.vue')), 'examples')
const Button = r => require.ensure([], () => r(require('@/pages/button.vue')), 'examples.button')

export default [
  {
    path: '/examples',
    component: Examples,
    children: [
      {
        path: '/button',
        name: 'Button',
        component: Button
      }
    ]
  }
]
