module.exports = (api) => {
  /* TODO: Посмотерть новый способ кэширования в dev
    const env = api.env()
    api.cache.using(()=> env === 'development')
   */
  api.cache.never() // dev (react-hot-loader) или prod ()
  return {
    presets: [
      ['@babel/preset-env',
        {
          debug: true, // выводит в консоль инфу по настройке
          spec: true, // specification, делаем код более медленным, но более надежным
          loose: false, // делаем код более быстрым, но отходит от стандарта
          modules: false // webpack хорошо рабоатает только с ES2015 модулями
        }
      ]
    ],
    plugins: ['@babel/plugin-proposal-class-properties']
  }
}
