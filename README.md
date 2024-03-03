## やりたいこと

openapi-fetch が Next.js v13 の以下機能に対応しているか検証したい。

- Automatic fetch()
- `fetch()` の cache オプション

## 方法

1. Next.js v14 アプリケーションに、以下機能を実装
   1. 呼び出し毎にレスポンスが変わる API エンドポイントを作成
   2. openapi-fetch による fetch 処理を実装
      - [src/lib/fetchData.ts](./src/lib/fetchData.ts) を参照。
   3. fetch response を画面に表示
      - 参考：[Next.js 13 の cache 周りを理解する - Automatic fetch() Request Deduping](https://zenn.dev/cybozu_frontend/articles/next-caching-dedupe)
2. アプリケーションを起動、リロードし、fetch cache の有無により画面表示が変わるかを確認

## 結果

openapi-fetch 利用時も、特に問題なく Automatic fetch() Request Deduping できた。

- `fetch()` の cache オプションに対応していた。型エラーも発生しなかった。
- [src/lib/fetchData.ts](./src/lib/fetchData.ts) を参照。

## 考察

[openapi-fetch の内部実装](https://github.com/drwpow/openapi-typescript/blob/main/packages/openapi-fetch/src/index.js)を見ると、`createClient`では、

1. fetch() の arg の作成
2. native fetch() の呼び出し

をしているだけ。なので考えてみれば当たり前だった。
