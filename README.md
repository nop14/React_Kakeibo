# 家計簿Webアプリ
家計簿をスプシで管理するようにしたが、微妙にレスポンスが遅いので勉強もかねてWebアプリを作る事にした。
今後React案件が回ってきそうな感じがあるので、久しぶりにReactのSPAを作ってみる。
SPAなのでとりあえずはcreate-react-appで作る
[Tutorialページを参照](https://ja.reactjs.org/docs/create-a-new-react-app.html#nextjs)
> Next.jsに以降するかも
できればVue.js+Nuxt.js版も作って教材みたいな感じにできたらいいなあ

# 設計
外観はこんな感じ

![外観](./readme_img/outline.png)

## ポイント
- 左側がグラフ、右側が表の2カラムレイアウト
- 円グラフは収支の種類を表し、チャートは貯金額の遷移を表す
  - 円グラフは収支/収入で選択する
- 表の表示は
  - 総計/銀行/手元を選べる
  - 収支/収入が選べる
  - 期間を選べる
- 表の各列の列名をクリックするとその順でソートできる
- +ボタンでモーダルを表示して表にデータを挿入
- -ボタンで削除
- ダウンロードボタンで表示されている表をCSVでダウンロード
  
## MVCについて
- Model
  - PostgresqlをNode.jsから叩く
- View
  - Create-React-appで作る
- Controller
  - Node.js

## 開発環境
とりあえずDockerでNode.js用コンテナとReact用コンテナとPostgresql用コンテナを立てて行う

(Reactコンテナのpackage.jsonのproxy設定がdockerじゃない場所で動かしたときにも動くようになんか場合わけできないかな)
### 使い方
docker-compose build
docker-compose up -d

これでlocalhost:3000でサーバーが開かれるはず
# Postgresqlのコンテナ
[ここ](https://qiita.com/honda28/items/fcfb7ce2786d72d98e46)を参考にして作る


# Model設計
# View設計
## HTMLレイアウト
~~全体のレイアウトは基本的にHTMLでひな型を作っておく~~
src以下にFrame.jsというファイルを作りコンポーネントとして管理する

今回は**2カラムレイアウト**に左カラムは上下に分ける構成

カラム内にReactをレンダリングする#graph1/#graph2/#tableタグを用意してあるので、これらに適したコンポーネントをReactで作って埋めていく感じ

## Reactコンポーネント
コンポーネントは3つ配置するが、**種類としてはGraphとTableの二つ**
各コンポーネントは**header/contents/footer**を持つ
### Graph
- 引数
  - graph_id: 表示するグラフを選択するID
  - data: 表示するデータ配列
- header
  - 空
- contents 
  - [Recharts](https://recharts.org/en-US/)を使って書こうと思っている
- footer
  - 空
### Table
- 引数
  - 無し
- header
  - 表示する財源/収支の種類/期間を書き込むフィールド
    - selectはreact-selectを使って実装
- contents
  - headerに応じてDBからデータをとってきて表を表示する
  - 最後の行はその期間の収支を書き込む
  - 表データをダウンロードできるボタンをつける
- footer
  - その期間始まった時の元金/現在金額/差額を表示する

## Controller設計
まだよく決めてない
[ここ](https://dev.to/loujaybee/using-create-react-app-with-express)を見る限り、

というかcreate-react-appはバックエンド処理を見えなくしてしまっているので、

expressを別途インストールしてサーバー処理を自前で用意し

create-react-appで見えなくなったサーバー処理と挿げ替える必要がある...のかな?
[ここ](https://qiita.com/fe_js_engineer/items/b052918f64b2df554d0f)を参考にして

backend以下にexpressのジェネレーターでmy_kakeibo_backendを構築してこっちにバックエンド処理を投げる

サーバーはnodemonで起動する、またmy_kakeibo側も一緒に起動するためconcurrentlyもインストールする

my_kakeibo側の接続設定はpackage.jsonのproxy設定で、my_kakeibo_backend側の設定はpackage.jsonのscripts設定で

参考にしたページではstartコマンド時にPORTオプションを指定していたが、.envファイルを作って設定しないと動かなかった

## 本番環境
https://qiita.com/naohikowatanabe/items/71a8bf477216ef56a5b7