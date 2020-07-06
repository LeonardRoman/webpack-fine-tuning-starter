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
