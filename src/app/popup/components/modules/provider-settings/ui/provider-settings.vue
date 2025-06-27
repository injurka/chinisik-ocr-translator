<script setup lang="ts">
import type { Language } from '~/shared/types'
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { Alert, AlertDescription } from '~/app/components/ui/alert'
import { Label } from '~/app/components/ui/label'
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '~/app/components/ui/select'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '~/app/components/ui/tabs'
import { useProviderSettings } from '../composables/provider-settings'
import { getProviderDefinitions } from '../lib/provider-definitions'
import Instructions from './instructions.vue'
import SettingsForm from './settings-form.vue'

const { t } = useI18n()
const {
  isLoading,
  selectedProvider,
  providerSettingsForm,
  selectedLanguage,
} = useProviderSettings()

const providerDefinitions = computed(() => getProviderDefinitions(t))
const languages: { code: Language, name: string }[] = [
  { code: 'ru', name: 'Русский' },
  { code: 'en', name: 'English' },
]
</script>

<template>
  <div class="p-4 flex-grow">
    <div v-if="isLoading" class="flex justify-center items-center text-center p-8 text-muted-foreground">
      <p>{{ t('popup.loadingText') }}</p>
    </div>

    <div v-else class="space-y-6">
      <Tabs v-model="selectedProvider" class="w-full">
        <TabsList class="grid w-full grid-cols-3">
          <TabsTrigger v-for="providerDef in providerDefinitions" :key="providerDef.id" :value="providerDef.id">
            {{ providerDef.name }}
          </TabsTrigger>
        </TabsList>

        <TabsContent
          v-for="providerDef in providerDefinitions"
          :key="`${providerDef.id}-content`"
          :value="providerDef.id"
          class="mt-4"
        >
          <Alert v-if="providerDef.inDevelopment" variant="default" class="border-dashed">
            <AlertDescription class="text-center font-medium text-muted-foreground">
              {{ t('popup.inDevelopment') }}
            </AlertDescription>
          </Alert>

          <div v-else class="space-y-4">
            <h4 class="font-semibold text-lg text-foreground">
              {{ providerDef.name }}
            </h4>
            <SettingsForm
              v-model="providerSettingsForm[providerDef.id]"
              :provider-id="providerDef.id"
              :fields="providerDef.fields"
            />
            <Alert v-if="providerDef.helpText">
              <AlertDescription class="text-sm">
                {{ providerDef.helpText }}
              </AlertDescription>
            </Alert>
          </div>
        </TabsContent>
      </Tabs>

      <div class="flex items-center gap-4 p-3 bg-muted rounded-md">
        <Label for="language-select" class="font-medium">
          {{ t('popup.languageLabel') }}
        </Label>
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Select a fruit" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Fruits</SelectLabel>
              <SelectItem value="apple">
                Apple
              </SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

      <Instructions />
    </div>
  </div>
</template>
