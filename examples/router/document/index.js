const Document = r => require.ensure([], () => r(require('@/components/document.vue')), 'document')
const Button = r => require.ensure([], () => r(require('@/docs/button.md')), 'document.button')
const Guide = r => require.ensure([], () => r(require('@/docs/guide.md')), 'document.guide')
const Install = r => require.ensure([], () => r(require('@/docs/install.md')), 'document.install')
const Start = r => require.ensure([], () => r(require('@/docs/start.md')), 'document.start')
const Logs = r => require.ensure([], () => r(require('@/docs/logs.md')), 'document.logs')

export const children = [
  {
    path: '',
    name: 'mr-ui'
  },
  {
    path: '',
    name: '开发指南'
  },
  {
    path: 'guide',
    name: '指南',
    component: Guide
  },
  {
    path: 'install',
    name: '安装',
    component: Install
  },
  {
    path: 'start',
    name: '快速开始',
    component: Start
  },
  {
    path: 'logs',
    name: '更新日志',
    component: Logs
  },
  {
    path: '',
    name: '基础组件'
  },
  {
    path: 'button',
    name: 'button',
    component: Button
  }
]

export default [
  {
    path: '/document',
    component: Document,
    children
  },
  {
    path: '/',
    redirect: '/document/guide'
  }
]
