# Amato Music
楽天 二子玉川夏の陣 2020優勝作品，音楽で人と人をつなぐサービス
約2週間でチームメンバー4名で開発

* SpotifyAPIを用いて音楽再生、アーティスト検索
* ユーザー同士のフォローフォロワー機能
* socketを使ったリアルタイムチャット

私が担当したのは、
ランディングページ、チャットページ(音楽再生、リアルタイムチャット)の作成です。

![Screen Shot 2020-08-29 at 19 06 26](https://user-images.githubusercontent.com/44857986/91634354-c43bc980-ea2a-11ea-87b0-c1a18556112b.png)
![Screen Shot 2020-08-29 at 18 59 48](https://user-images.githubusercontent.com/44857986/91634319-7f179780-ea2a-11ea-836b-8baef0d3e5d2.png)
![Screen Shot 2020-08-29 at 19 00 13](https://user-images.githubusercontent.com/44857986/91634326-876fd280-ea2a-11ea-9fed-da7eb165cefe.png)
![Screen Shot 2020-08-29 at 19 00 53](https://user-images.githubusercontent.com/44857986/91634327-89d22c80-ea2a-11ea-9cdd-2a6fe591b822.png)
![Screen Shot 2020-08-28 at 19 25 33](https://user-images.githubusercontent.com/44857986/91634313-72933f00-ea2a-11ea-9206-ea2389f6e5fc.png)

## サーバーなどのコンテナの起動方法
はじめに/frontend/app直下で`npm install`

(初回時: `docker-compose build`)  
```docker-compose up -d```

[http://localhost:8080/](http://localhost:8080/) で確認できます．

## コンテナの終了方法
```docker-compose stop``` 
