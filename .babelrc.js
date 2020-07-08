module.exports = (api) => {
  const env = api.env()
  const plugins = ['@babel/plugin-proposal-class-properties']

  api.cache.never()
  // api.cache.using(() => env !== 'development')

  if (env === 'development') {
    /*
    * Этот плагин не обязательный для хот-релодинга React-компонентов
    * Но без этого плагина хот-релодинг может двать сбой
    * */
    plugins.push('react-hot-loader/babel')
  }

  return {
    presets: [
      ['@babel/preset-react',
        {
          debug: false, // выводит в консоль инфу по настройке
          spec: true, // specification, делаем код более медленным, но более надежным
          loose: false, // делаем код более быстрым, но отходит от стандарта
          modules: false, // webpack хорошо рабоатает только с ES2015 модулями
          useBuiltIns: 'usage'
        }
      ]
    ],
    plugins
  }
}
