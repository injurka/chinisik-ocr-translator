<script setup lang="ts">
import type { ProviderField } from '../lib/provider-definitions'
import { Eye, EyeOff } from 'lucide-vue-next'
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { Button } from '~/app/components/ui/button'
import { Input } from '~/app/components/ui/input'
import { Label } from '~/app/components/ui/label'

defineProps<{
  providerId: string
  fields: ProviderField[]
}>()

const model = defineModel<any>({ required: true })
const { t } = useI18n()
const showKey = ref(false)
</script>

<template>
  <div class="space-y-4">
    <div v-for="field in fields" :key="field.key" class="grid w-full items-center gap-1.5">
      <Label :for="`${providerId}-${field.key}`" class="ml-4 w-full max-w-sm text-sm font-medium text-gray-700 dark:text-gray-200">
        {{ field.label }}
        <span v-if="field.isOptional" class="text-xs text-muted-foreground">
          ({{ t('popup.optionalLabel') }})
        </span>
      </Label>

      <div v-if="field.type === 'password'" class="relative">
        <Input
          :id="`${providerId}-${field.key}`"
          v-model="model[field.key]"
          :type="showKey ? 'text' : 'password'"
          :placeholder="field.placeholder"
          class="pr-10"
        />

        <Button
          type="button"
          variant="ghost"
          size="icon"
          class="absolute top-0 right-0 h-full px-3 py-2 hover:bg-transparent"
          :title="showKey ? t('popup.tooltips.hideKey') : t('popup.tooltips.showKey')"
          @click="showKey = !showKey"
        >
          <Eye v-if="showKey" class="h-4 w-4" />
          <EyeOff v-else class="h-4 w-4" />
          <span class="sr-only">Toggle password visibility</span>
        </Button>
      </div>

      <Input
        v-else
        :id="`${providerId}-${field.key}`"
        v-model="model[field.key]"
        :type="field.type"
        :placeholder="field.placeholder"
      />
    </div>
  </div>
</template>
