<template>
  <div>
    <table>
      <thead>
        <tr>
          <th>Select Rows</th>
          <th v-for="column in columns" :key="column.key" @click="sortData(column.key)">
            {{ column.label }}
            <span v-if="sortKey === column.key">
              {{ sortOrder === 'asc' ? '↑' : '↓' }}
            </span>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in sortedData" :key="item.id">
          <td>
            <input type="checkbox" :value="item" v-model="selectedRows" />
          </td>
          <td v-for="column in columns" :key="column.key">
            {{ formatValue(item[column.key], column.type) }}
          </td>
        </tr>
      </tbody>
    </table>
    <button @click="exportCSV">Export to CSV</button>
  </div>
</template>

<script setup>
import { defineProps, computed, ref, watch, defineEmits } from 'vue'

const sortKey = ref('')
const sortOrder = ref('asc')
const selectedRows = ref([])

const props = defineProps({
  columns: Array,
  data: {
    type: Array,
    default: []
  },
  searchTerm: {
    type: String,
    default: '',
    required: false
  }
})

const emit = defineEmits(['changeSelection'])

const filterdData = computed(() => {
  if (props.searchTerm === ' ') return props.data
  const query = props.searchTerm?.toLowerCase()
  return props.data.filter((item) =>
    Object.values(item).some((value) =>
      Array.isArray(value)
        ? value.join(', ').toLocaleLowerCase().includes(query)
        : String(value).toLocaleLowerCase().includes(query)
    )
  )
})

const sortedData = computed(() => {
  return [...filterdData.value].sort((a, b) => {
    let result = 0
    if (a[sortKey.value] < b[sortKey.value]) {
      result = -1
    } else if (a[sortKey.value] > b[sortKey.value]) {
      result = 1
    }
    return sortOrder.value === 'asc' ? result : -result
  })
})

watch(selectedRows, (newSelected) => {
  emit('changeSelection', newSelected)
})

const formatValue = (value, type) => {
  if (Array.isArray(value)) {
    return value.join(', ')
  }

  if (type === 'decimal') {
    return parseFloat(value).toFixed(2)
  }

  return value
}

const sortData = (key) => {
  if (sortKey.value === key) {
    sortOrder.value = sortOrder.value === 'asc' ? 'desc' : 'asc'
  } else {
    sortKey.value = key
    sortOrder.value = 'asc'
  }
}

const exportCSV = () => {
  const csvData = sortedData.value.map((item) => {
    return props.columns.map((column) => item[column.key]).join(',')
  })
  const csvContent = [props.columns.map((column) => column.label).join(','), ...csvData].join('\n')

  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' })
  const link = document.createElement('a')
  const url = URL.createObjectURL(blob)

  link.setAttribute('href', url)
  link.setAttribute('download', 'data.csv')
  link.style.visibility = 'hidden'

  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}
</script>
