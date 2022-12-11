# Deno on Apollo Server

Deno で Apollo + Pothos + Prisma構成を作りたい

## TODO

- pothos入れたい
- prisma入れたい

## deno version

```sh
⚡ ❯ deno --version
deno 1.28.3 (release, aarch64-apple-darwin)
v8 10.9.194.5
typescript 4.8.3
```

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
