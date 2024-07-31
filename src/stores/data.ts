import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useDataStore = defineStore('data', () => {
  const data = ref([
    { key: 'id', type: 'int', label: 'ID' },
    { key: 'issuer_name', type: 'string', label: 'Issuer' },
    { key: 'deal_name', type: 'string', label: 'Deal' },
    { key: 'bloomber_id', type: 'string', label: 'Bloomberg ID' },
    { key: 'total', type: 'decimal', label: 'Total' },
    { key: 'industry', type: 'string', label: 'Industry' },
    { key: 'status', type: 'string', label: 'Status' },
    { key: 'analysts', type: 'string[]', label: 'Analysts' },
    { key: 'doc_count', type: 'int', label: 'Docs' },
    { key: 'custom_deal_identifiers', type: 'string[]', label: 'Identifiers' }
  ])
  const searchTerm = ref('')

  const getDataByText = computed(() => {
    const term = searchTerm.value.toLowerCase().trim()
    if (term != '') {
      return data.value.filter((item) => item.label.toLowerCase().includes(term))
    } else {
      return data.value
    }
  })

  function setSearchTerm(term: string) {
    searchTerm.value = term
  }

  return { data, searchTerm, getDataByText, setSearchTerm }
})
