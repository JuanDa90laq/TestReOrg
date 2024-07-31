<script setup lang="ts">
import { ref } from 'vue'

import DynamicTable from '@/components/DynamicTable.vue'
import SearchInput from '@/components/SearchInput.vue'

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
    <h1 class="font-bold text-6xl p-6 text-white w-full text-center bg-title">Case Study JD</h1>
    <div class="mx-auto pt-10">
      <SearchInput v-model:searchTerm="searchTerm" class="mb-5" />
      <DynamicTable
        :columns="columns"
        :data="jsonData"
        :searchTerm="searchTerm"
        @changeSelection="changeSelection"
      />
      <section v-if="rowsSelect.length === 1">
        <h3>details</h3>
        <div>
          <div><span>Id</span> {{ rowsSelect[0]?.id }}</div>
          <div><span>Issuer</span> {{ rowsSelect[0]?.issuer_name }}</div>
          <div><span>Deal</span> {{ rowsSelect[0]?.deal_name }}</div>
          <div><span>Bloomberg ID</span> {{ rowsSelect[0].bloomber_id }}</div>
          <div><span>Total</span> {{ rowsSelect[0].total }}</div>
          <div><span>Industry</span> {{ rowsSelect[0].industry }}</div>
          <div><span>Status</span> {{ rowsSelect[0].status }}</div>
          <div><span>Analysts</span> {{ rowsSelect[0].analysts.join(', ') }}</div>
          <div><span>Docs</span> {{ rowsSelect[0].doc_count }}</div>
          <div><span>Identifiers</span> {{ rowsSelect[0].custom_deal_identifiers.join(', ') }}</div>
        </div>
      </section>
    </div>
  </main>
</template>
