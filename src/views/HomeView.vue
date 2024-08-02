<script setup lang="ts">
import DynamicTable from '@/components/DynamicTable.vue'
import SearchInput from '@/components/SearchInput.vue'
import DetailsData from '@/components/DetailsData.vue'

import { ref } from 'vue'

const searchTerm = ref('')
const rowsSelect = ref([])
const columns = ref([
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

const jsonData = ref([
  {
    id: 1,
    issuer_name: 'Company A',
    deal_name: 'Deal A',
    bloomber_id: 'BID123',
    total: 1000.5,
    industry: 'Finance',
    status: 'Active',
    analysts: ['Analyst 1', 'Analyst 2'],
    doc_count: 10,
    custom_deal_identifiers: ['ID1', 'ID2']
  },
  {
    id: 2,
    issuer_name: 'Company B',
    deal_name: 'Deal B',
    bloomber_id: 'BID456',
    total: 2000.75,
    industry: 'Tech',
    status: 'Closed',
    analysts: ['Analyst 3'],
    doc_count: 5,
    custom_deal_identifiers: ['ID3', 'ID4']
  }
])

const changeSelection = (data: any) => {
  rowsSelect.value = data
}
</script>

<template>
  <main class="h-full w-full flex flex-col">
    <h1 class="font-bold text-6xl p-6 text-white w-full text-center bg-title">Case Study JDC</h1>
    <div class="p-10">
      <SearchInput v-model:searchTerm="searchTerm" class="mb-5" />
      <div>
        <DynamicTable
          :columns="columns"
          :data="jsonData"
          :searchTerm="searchTerm"
          @changeSelection="changeSelection"
        />

        <DetailsData />
      </div>
    </div>
  </main>
</template>
