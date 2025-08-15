<template>
  <div id="app"></div>
</template>

<script setup lang="ts">
import { UniverSheetsCorePreset } from '@univerjs/preset-sheets-core';
import UniverPresetSheetsCoreRuRU from '@univerjs/preset-sheets-core/locales/ru-RU';
import UniverPresetSheetsCoreEnUS from '@univerjs/preset-sheets-core/locales/en-US';
import { createUniver, LocaleType, mergeLocales } from '@univerjs/presets';
import '@univerjs/preset-sheets-core/lib/index.css';

const { univerAPI } = createUniver({
  locale: LocaleType.RU_RU,
  locales: {
    [LocaleType.EN_US]: mergeLocales(UniverPresetSheetsCoreEnUS),
    [LocaleType.RU_RU]: mergeLocales(UniverPresetSheetsCoreRuRU),
  },
  presets: [
    UniverSheetsCorePreset({
      container: 'app',
      ribbonType: 'simple',
    }),
  ],
});

univerAPI.createWorkbook({});
</script>
