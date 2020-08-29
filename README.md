# Amato Music
音楽で人と人をつなぐサービス

SpotifyAPIを用いて音楽を再生
フォローフォロワー機能
socketを使ったリアルタイムチャット

## サーバーなどのコンテナの起動方法
はじめに/frontend/app直下で`npm install`

(初回時: `docker-compose build`)  
```docker-compose up -d```

[http://localhost:8080/](http://localhost:8080/) で確認できます．

## コンテナの終了方法
```docker-compose stop``` 
