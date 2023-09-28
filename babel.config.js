module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  plugins: [
    ['import', {
      libraryName: 'vant',
      libraryDirectory: 'es',
      // style: true
      // 自定义主题需要引入less
      style:  (name) => `${name}/style/less`,
    }, 'vant']
  ]
}
