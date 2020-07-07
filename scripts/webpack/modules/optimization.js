// Core
import ImageminPlugin from 'imagemin-webpack'
import mozjpeg from 'imagemin-mozjpeg'
import pngquant from 'imagemin-pngquant'
import svgo from 'imagemin-svgo'
import TerserPlugin from 'terser-webpack-plugin'
import { ContextReplacementPlugin } from 'webpack'

/*
* production: оптимизация включена только в mode production
* development: оптимизация включена только в mode development
* ✔: оптимизация включена только в mode development и production
*/
export const optimizeBuild = () => ({
  optimization: {
    nodeEnv: 'production',

    // production: минификация JavaScript
    minimize: true,
    minimizer: [new TerserPlugin()],

    // production: останавливает эмит сборки при возникновении ошибки во время компиляции
    noEmitOnErrors: true,

    // ✔: Не добавляет в сборку пустые чанки - это уменьшает нагрузку на систему, что ускоряет ребилд
    removeEmptyChunks: true,
    // ✔: Объединяет эквивалентные чанки
    mergeDuplicateChunks: true,
    // ✔: Удаляет модуль из чанка, если этот модуль уже присутствует в родительском чанке
    removeAvailableModules: true,

    // production: Находит наиболее часто исопользуемые модули и дает им наименьший индефикатор
    // таким образом наиболее часто используемые модули будут будут загружены в сборку быстрее.
    // Эта настройка помогает более эффективно компресовать финальную сборку
    // TODO: webpack 5 remove optimization.occurrenceOrder
    occurrenceOrder: true,
    // production: анализирут module graph и пытается найти модули которые можно смержить в один
    // ? зависит от provideExports и usedExports
    concatenateModules: true,

    // ✔: Определяет экспортируемые сущности для каждого модуля
    // Эта настройка помогает остальным оптимизациям
    providedExports: true,
    // production: Определяет используемые экспортируемые сущности для каждого модуля
    // Эта настройка помогает остальным оптимизациям
    // ? Зависит от provideExports
    usedExports: true,
    // production: собирает зависимости более эффективно, если в package.json завсимости sideEffects: true
    // ? Зависит от provideExports и usedExports
    sideEffects: true,

    // development: Вместо номеров дает модулям понятные имена
    // TODO: webpack 5 add 'moduleIds: "named"' для development
    // TODO: webpack 5 add 'moduleIds: "size"' для production
    // TODO: webpack 5 remove optimization.namedModules
    namedModules: false,
    // Опеределяет механизм генерирования индефикатора для модуля
    moduleIds: false,

    // development: Вместо номеров дает модулям понятные имена
    // TODO: webpack 5 add 'chunkIds: "named"' для development
    // TODO: webpack 5 add 'chunkIds: "size"' для production
    // TODO: webpack 5 remove optimization.namedChunks
    namedChunks: false,
    // Опеределяет механизм генерирования индефикатора для чанка
    chunkIds: false,

    // Initial chunk (vendors - react, vue
    // Async chunk (on demond)

    // Эта опция включена всегда. Конфигурируется в SplitChunksPlugin
    splitChunks: {
      // Режим разделения кода. По умолачнию async. initial, all (initial + async)
      chunks: 'async',
      // Минимальный размер нового чанка для отделения
      minSize: 3000,
      // Максимальный размер нового чанка для отделения
      maxSize: 0,
      // Минимальное количество чанков, которые зависят от модуля
      // перед отправлением в отдельный чанк
      minChunks: 1,
      // Максимальное количество одновременных паралельных запросов чанков для асинхроннного SplitPoint
      // Всегда предпочитаются чанки большего размера
      maxAsyncRequests: 5,
      // Максимальное количество одновременных паралельных запросов чанков на один EntryPoint
      // Всегда предпочитаются чанки большего размера
      maxInitialRequests: 3,
      // Символ разделитель имени сплит-чанка (например vendor~main)
      // automaticNameDelimiter: '~',
      // Определяет имя нового чанка
      name: true,
      // По умолчанию  cacheGroups наследует от основных опций splitChunks
      // Уникальные для cacheGroups только test, priority, reuseExistingChunk
      // Ключ каждой cacheGroups определяет её имя.
      // По умолчанию webpack устанавливает две cacheGroups
      cacheGroups: {
        vendors: {
          // Перезаписанная группа
          chunks: 'initial',
          // Выбирает модули входящие в cacheGroups
          test: /[\\/]node_modules[\\/]/,
          priority: -10
        },
        default: {
          // Выносит любой модуль-зависимость в отдельный чанк default
          // при условии дублирования модуля-зависимости => 2
          minChunks: 2,
          // Если  модуль попадает сразу в несклько cacheGroups выбирается
          // c > priority
          // У дефолтных cacheGroups отрицательный приоритет
          // поэтому кстромные кэш-группы приоритетнее (по умолчанию их priority 0)
          priority: -20,
          // Если чанк уже содержит уже существующий отдельный чанк то используется
          // вместо создания нового
          reuseExistingChunk: true
        }
      }
    }
  }
})

export const optimizeImages = () => ({
  plugins: [
    new ImageminPlugin({
      imageminOptions: {
        plugins: [
          ['mozjpeg', {
            progressive: true,
            quality: 60,
          },],
          ['pngquant', {
            quality: [0.6, 0.7],
          }],
          [
            'svgo', {
            plugins: [
              {
                removeViewBox: false
              }
            ]
          }
          ]
        ],
      },
    }),
  ],
})

export const filterMomentLocales = () => ({
  plugins: [
    new ContextReplacementPlugin(/moment[/\\]locale$/, /en-gb|ru/)
  ],
})
