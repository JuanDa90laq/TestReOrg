import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import SearchInput from '@/components/SearchInput.vue'

describe('SearchComponent', () => {
  it('renders correctly', () => {
    const wrapper = mount(SearchInput)

    // Verifica que el campo de entrada y el SVG se renderizan
    expect(wrapper.find('input').exists()).toBe(true)
    expect(wrapper.find('svg').exists()).toBe(true)
  })

  it('emits update:searchTerm with correct value on input', async () => {
    const wrapper = mount(SearchInput)

    // Simula la entrada de texto en el campo de búsqueda
    const input = wrapper.find('input')
    await input.setValue('Test search term')

    // Verifica que el evento update:searchTerm se emite con el valor correcto
    expect(wrapper.emitted('update:searchTerm')).toBeTruthy()
    expect(wrapper.emitted('update:searchTerm')![0]).toEqual(['Test search term'])
  })
})
