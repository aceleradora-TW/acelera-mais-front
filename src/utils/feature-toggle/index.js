
const getValueByParams = (name) => {
  return localStorage.getItem(name)
}

const showFeature = () => {
  return getValueByParams('featureToggle') === 'show'
}

export default showFeature
