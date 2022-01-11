
const getValueByParams = (name) => {
  const url = new URL(window.location.href)
  return url.searchParams.get(name)
}

const showFeature = () => {
  return getValueByParams('featureToggle') === 'show'
}

export default showFeature
