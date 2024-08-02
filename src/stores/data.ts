import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useDataStore = defineStore('data', () => {
  const data = ref(null)
  const getData = computed(() => data.value)

  function setDetails(dataDetails: string | any[]) {
    if (dataDetails.length === 1) {
      data.value = dataDetails[0]
    } else {
      data.value = null
    }
  }

  return { data, getData, setDetails }
})
