import { mount } from '@vue/test-utils'
import { describe, it, expect, vi } from 'vitest'
import { createTestingPinia } from '@pinia/testing'
import DynamicTable from '@/components/DynamicTable.vue'

describe('DataTableComponent', () => {
  const columns = [
    { key: 'name', label: 'Name' },
    { key: 'age', label: 'Age', type: 'decimal' }
  ]

  const data = [
    { id: 1, name: 'Alice', age: 30 },
    { id: 2, name: 'Bob', age: 25 }
  ]

  it('renders correctly with data', () => {
    const pinia = createTestingPinia({ createSpy: vi.fn })
    const wrapper = mount(DynamicTable, {
      props: {
        columns,
        data
      }
    })

    // Verifica que la tabla y los datos se renderizan
    expect(wrapper.find('table').exists()).toBe(true)
    expect(wrapper.find('tbody').findAll('tr').length).toBe(data.length)
  })

  it('shows no data message when there is no data', () => {
    const pinia = createTestingPinia({ createSpy: vi.fn })
    const wrapper = mount(DynamicTable, {
      props: {
        columns,
        data: []
      }
    })

    // Verifica que el mensaje de "no data" se muestra
    expect(wrapper.text()).toContain('Sorry we dont have data :/')
  })
})
