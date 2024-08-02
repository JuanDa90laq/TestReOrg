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
    issuer_name: 'Tesla',
    deal_name: 'Batteries',
    bloomber_id: '1',
    total: 10.5,
    industry: 'Car',
    status: 'Active',
    analysts: ['Test'],
    doc_count: 101,
    custom_deal_identifiers: ['1', '2']
  },
  {
    id: 2,
    issuer_name: 'Microsoft',
    deal_name: 'Chips',
    bloomber_id: '2',
    total: 2230.75,
    industry: 'Tech',
    status: 'Closed',
    analysts: ['test 2'],
    doc_count: 50,
    custom_deal_identifiers: ['2', '3']
  },
  {
    id: 3,
    issuer_name: 'Microsoft',
    deal_name: 'Chips',
    bloomber_id: '2',
    total: 2230.75,
    industry: 'Tech',
    status: 'Closed',
    analysts: ['test 2'],
    doc_count: 50,
    custom_deal_identifiers: ['2', '3']
  },
  {
    id: 4,
    issuer_name: 'Microsoft',
    deal_name: 'Chips',
    bloomber_id: '2',
    total: 2230.75,
    industry: 'Tech',
    status: 'Closed',
    analysts: ['test 2'],
    doc_count: 50,
    custom_deal_identifiers: ['2', '3']
  },
  {
    id: 5,
    issuer_name: 'Microsoft',
    deal_name: 'Chips',
    bloomber_id: '2',
    total: 2230.75,
    industry: 'Tech',
    status: 'Closed',
    analysts: ['test 2'],
    doc_count: 50,
    custom_deal_identifiers: ['2', '3']
  },
  {
    id: 6,
    issuer_name: 'Microsoft',
    deal_name: 'Chips',
    bloomber_id: '2',
    total: 2230.75,
    industry: 'Tech',
    status: 'Closed',
    analysts: ['test 2'],
    doc_count: 50,
    custom_deal_identifiers: ['2', '3']
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
