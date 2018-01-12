const componenets = []

const install = Vue => {
  if (install.installed) return
  componenets.map(component => Vue.component(component.name, component))
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  install
}
