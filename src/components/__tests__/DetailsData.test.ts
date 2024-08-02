import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import DetailsData from '@/components/DetailsData.vue'
import { createTestingPinia } from '@pinia/testing'
import { vi } from 'vitest'

describe('MyComponent', () => {
  it('renders correctly when store data is available', () => {
    const wrapper = mount(DetailsData, {
      global: {
        plugins: [
          createTestingPinia({
            createSpy: vi.fn,
            initialState: {
              data: {
                data: {
                  issuer_name: 'Issuer Name',
                  industry: 'Industry',
                  status: 'Status',
                  total: 'Total'
                }
              }
            }
          })
        ]
      }
    })

    expect(wrapper.find('.font-bold.text-xl.mb-2').text()).toBe('Data Details')
    expect(wrapper.find('.text-gray-700.text-base').text()).toBe('Issuer Name')
    const spans = wrapper.findAll(
      '.inline-block.bg-gray-200.rounded-full.px-3.py-1.text-sm.font-semibold.text-gray-700'
    )
    expect(spans.at(0)?.text()).toBe('Industry')
    expect(spans.at(1)?.text()).toBe('Status')
    expect(spans.at(2)?.text()).toBe('Total')
  })
})
