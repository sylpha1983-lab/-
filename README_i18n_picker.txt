[patch_i18n_picker_capture]

目的:
- 管理者モード(BUILDER_DEV_MODE=true)のときだけ、UI上の任意テキストをタップして
  i18n辞書に追加するためのキー候補＋ja/enスケルトンを生成できるようにします。

適用:
1) ext_i18n_capture.js をプロジェクト直下へ配置（上書き可）
2) ext_manifest.v2.js のロードリストに ext_i18n_capture.js を追加
   目安: ext_i18n_tools.js の直前/直後どちらでもOK。

動作:
- 画面右下に [Pick] ボタンが出ます(管理者モード時のみ)
- PickをON → 取りたいUI文字をタップ → パネルに辞書スケルトンが表示
- Copyでコピーして i18n.locale.ja.js / i18n.locale.en.js に貼り付け

備考:
- 表示ラベルだけを対象にしてください（生成promptに出るトークンは翻訳しない方針のまま）
