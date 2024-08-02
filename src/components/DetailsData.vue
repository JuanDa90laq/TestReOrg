<template>
  <div class="py-10" v-if="store.data">
    <div class="max-w-sm rounded overflow-hidden shadow-lg">
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">Data Details</div>
        <p class="text-gray-700 text-base">
          {{ store.data['issuer_name'] }}
        </p>
      </div>
      <div class="px-6 pt-4 pb-2">
        <span
          class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
          >{{ store.data['industry'] }}</span
        >
        <span
          class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
          >{{ store.data['status'] }}</span
        >
        <span
          class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
          >{{ store.data['total'] }}</span
        >
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useDataStore } from '@/stores/data'

const store = useDataStore()
</script>

<style lang="scss" scoped></style>
