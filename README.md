# Music Map

## node version

v18.12.1

## 開発方法

#### backend

#### denonで実行する

変更を検知したらserver毎リスタートできるようにdenonで実行する

参考： https://zenn.dev/nabezokodaikon/articles/fd61a880b8febc

##### denonのインストール

```sh
deno install -qAf --unstable https://deno.land/x/denon/denon.ts
```

- 設定ファイル
  - scripts.config.ts
