module.exports = (api) => {
  // キャッシュを有効にしてビルド処理のパフォーマンスを最適化
  api.cache.using(() => process.env.NODE_ENV)

  return {
    presets: [
      /**
       * Note:
       * 指定したブラウザ環境で動作するように変換
       * ブラウザ環境は.browserslistrcで指定する
       */
      "@babel/preset-env",
      "@babel/preset-react"
    ],
  }
}
