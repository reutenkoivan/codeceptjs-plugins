const dropdownBuilder = (links) => {
  const { basePlugin, otherPlugins } = links.reduce((acc, { route, location, label }) => {
    if (location.includes('base')) {
      acc.basePlugin = {
        to: route,
        label,
      }
    } else {
      acc.otherPlugins.push({
        to: route,
        label,
      })
    }

    return acc
  }, { basePlugin: null, otherPlugins: [] })

  const basePackageLink = {
    label: '@pw-codeceptjs/base',
    to: basePlugin.to,
  }

  const pluginsDropdown = {
    type: 'dropdown',
    label: 'Plugins',
    items: otherPlugins.sort((a, b) => a.label.length - b.label.length),
  }

  return [
    basePackageLink,
    pluginsDropdown,
  ]
}

exports.dropdownBuilder = dropdownBuilder
