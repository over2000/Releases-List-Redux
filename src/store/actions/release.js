export function toggleList(module, list) {
  return {
    type: 'TOGGLE_LIST',
    module,
    list,
  }
}
