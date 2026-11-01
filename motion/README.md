# public/motion

フィギュアスケートのジャンプの動きのデータです。人形(`public/models/doll.glb`)の骨格を動かします。

## 出典

- データセット: FS-Jump3D <https://github.com/ryota-skating/FS-Jump3D>
- 作成者: Ryota Tanaka, Tomohiro Suzuki, Keisuke Fujii
- 論文: "3D Pose-Based Temporal Action Segmentation for Figure Skating: A Fine-Grained and Jump Procedure-Aware Annotation Approach", MMSports '24(7th ACM International Workshop on Multimedia Content Analysis in Sports)
- ライセンス: CC BY-NC-SA 4.0 <https://creativecommons.org/licenses/by-nc-sa/4.0/deed.ja>。このフォルダの中身も同じ条件で公開します(`LICENSE.txt`)

## ファイル

| ファイル | 元のデータ | 使った区間(元のコマ番号) |
|---|---|---|
| `axel-c-07.glb` / `.json` | `Skater_C/Axel/Axel_7.c3d` | 38〜283(246 コマ) |
| `axel-c-08.glb` / `.json` | `Skater_C/Axel/Axel_8.c3d` | 48〜246(199 コマ) |
| `axel-b-04.glb` / `.json` | `Skater_B/Axel/Axel_4.c3d` | 42〜296(255 コマ) |
| `flip-c-03.glb` / `.json` | `Skater_C/Flip/Flip_3.c3d` | 42〜218(177 コマ) |
| `flip-c-10.glb` / `.json` | `Skater_C/Flip/Flip_10.c3d` | 84〜296(213 コマ) |
| `flip-c-05.glb` / `.json` | `Skater_C/Flip/Flip_5.c3d` | 60〜227(168 コマ) |
| `flip-c-08.glb` / `.json` | `Skater_C/Flip/Flip_8.c3d` | 83〜222(140 コマ) |
| `loop-c-10.glb` / `.json` | `Skater_C/Loop/Loop_10.c3d` | 60〜296(237 コマ) |
| `loop-c-01.glb` / `.json` | `Skater_C/Loop/Loop_1.c3d` | 71〜229(159 コマ) |
| `lutz-c-03.glb` / `.json` | `Skater_C/Lutz/Lutz_3.c3d` | 63〜248(186 コマ) |
| `lutz-c-09.glb` / `.json` | `Skater_C/Lutz/Lutz_9.c3d` | 67〜203(137 コマ) |
| `lutz-c-02.glb` / `.json` | `Skater_C/Lutz/Lutz_2.c3d` | 81〜249(169 コマ) |
| `lutz-c-04.glb` / `.json` | `Skater_C/Lutz/Lutz_4.c3d` | 75〜246(172 コマ) |
| `lutz-c-05.glb` / `.json` | `Skater_C/Lutz/Lutz_5.c3d` | 86〜266(181 コマ) |
| `salchow-c-01.glb` / `.json` | `Skater_C/Salchow/Salchow_1.c3d` | 52〜237(186 コマ) |
| `salchow-c-08.glb` / `.json` | `Skater_C/Salchow/Salchow_8.c3d` | 34〜296(263 コマ) |
| `toeloop-c-03.glb` / `.json` | `Skater_C/Toeloop/Toeloop_3.c3d` | 78〜244(167 コマ) |
| `toeloop-c-08.glb` / `.json` | `Skater_C/Toeloop/Toeloop_8.c3d` | 59〜174(116 コマ) |

どれも 1 秒 60 コマ。区間は踏切の 1〜2 秒前から着氷後の滑り出しまでで、計測の欠損や追跡の乱れが無い所です。
各種類とも、推奨(先に挙げた方: `flip-c-03`・`loop-c-10`・`lutz-c-03`・`salchow-c-01`・`toeloop-c-03`)と予備を 1 本ずつ収録しています。そのほかのフリップとルッツ(`flip-c-05`・`flip-c-08`・`lutz-c-02`・`lutz-c-04`・`lutz-c-05`)は見分けテストの問題用です。選定の理由は `docs/mocap-notes.md` の 17 節。

### 選手 D のフリップとルッツ(見分けテストの候補)

| ファイル | 元のデータ | 使った区間(元のコマ番号) |
|---|---|---|
| `flip-d-01.glb` / `.json` | `Skater_D/Flip/Flip_1.c3d` | 104〜200(97 コマ) |
| `flip-d-02.glb` / `.json` | `Skater_D/Flip/Flip_2.c3d` | 56〜222(167 コマ) |
| `flip-d-03.glb` / `.json` | `Skater_D/Flip/Flip_3.c3d` | 95〜202(108 コマ) |
| `flip-d-04.glb` / `.json` | `Skater_D/Flip/Flip_4.c3d` | 72〜177(106 コマ) |
| `flip-d-05.glb` / `.json` | `Skater_D/Flip/Flip_5.c3d` | 83〜211(129 コマ) |
| `flip-d-06.glb` / `.json` | `Skater_D/Flip/Flip_6.c3d` | 59〜157(99 コマ) |
| `flip-d-07.glb` / `.json` | `Skater_D/Flip/Flip_7.c3d` | 76〜156(81 コマ) |
| `flip-d-08.glb` / `.json` | `Skater_D/Flip/Flip_8.c3d` | 35〜165(131 コマ) |
| `flip-d-09.glb` / `.json` | `Skater_D/Flip/Flip_9.c3d` | 115〜254(140 コマ) |
| `flip-d-10.glb` / `.json` | `Skater_D/Flip/Flip_10.c3d` | 68〜212(145 コマ) |
| `lutz-d-01.glb` / `.json` | `Skater_D/Lutz/Lutz_1.c3d` | 76〜192(117 コマ) |
| `lutz-d-02.glb` / `.json` | `Skater_D/Lutz/Lutz_2.c3d` | 39〜175(137 コマ) |
| `lutz-d-03.glb` / `.json` | `Skater_D/Lutz/Lutz_3.c3d` | 64〜206(143 コマ) |
| `lutz-d-04.glb` / `.json` | `Skater_D/Lutz/Lutz_4.c3d` | 67〜192(126 コマ) |
| `lutz-d-05.glb` / `.json` | `Skater_D/Lutz/Lutz_5.c3d` | 115〜231(117 コマ) |
| `lutz-d-06.glb` / `.json` | `Skater_D/Lutz/Lutz_6.c3d` | 107〜212(106 コマ) |
| `lutz-d-07.glb` / `.json` | `Skater_D/Lutz/Lutz_7.c3d` | 46〜212(167 コマ) |
| `lutz-d-08.glb` / `.json` | `Skater_D/Lutz/Lutz_8.c3d` | 108〜194(87 コマ) |
| `lutz-d-09.glb` / `.json` | `Skater_D/Lutz/Lutz_9.c3d` | 47〜221(175 コマ) |
| `lutz-d-10.glb` / `.json` | `Skater_D/Lutz/Lutz_10.c3d` | 51〜234(184 コマ) |

見分けテストの問題の候補として、選手 D のフリップ・ルッツを 10 本ずつ収録しています(どれを使うかは未定)。
入りの弧・体の傾き・使える区間の長さ・定義どおりかの一覧は `docs/mocap-notes.md` の 20 節。

## 派生の動き(回転数・回転不足)は使わなくなりました

かつて 2 章「ジャンプの判定」用に、`lutz-c-03` の空中の部分だけを作り変えた派生 6 本(`lutz-c-03--r1`・`--r3`・`--r4`・`--q`・`--under`・`--down`)を
置いていましたが、2026-10-03 にそのページをやめたため、ファイルを消しました(回転数や回転不足を計算で作った動きは使わない決め。`docs/content-plan.md` 1 節)。
作る仕組み(`tools/mocap/variants.py`)と取り決め(`docs/m2-viewer-spec.md` 4 節、`docs/assets-spec.md` 6.1 節)は記録として残してあります。

## 元のデータに加えた変更

- 体の表面や関節の位置を表す点から骨ごとの向きを計算し、人形の骨格(19 本)の回転に変換しました
- 座標を正規化しました。長さはメートル、Y が上、氷の面を水平にして y = 0、踏切の瞬間の骨盤の位置を原点、その時の進む向きを +X にしています
- 骨盤の位置を、人形と選手の脚の長さの比で拡大しました(1.06〜1.24 倍)。刃が氷に着いているコマで人形の刃の底が y = 0 に来るよう、骨盤の高さをコマごとに補正しました
- 腕のねじれを肩・肘・手首に振り分けました(骨の向きと手のひらの向きは元のままです)。足の前後の傾きは、滑っている時に刃が氷に平らになるように合わせました
- 骨盤の高さの補正は、氷に接いている足の刃を y = 0 に合わせるのを基本としつつ、もう一方の足の刃が氷の下に潜らない下限も守るようにしました(M2 で追加。トウを突く足・遊脚の入れ替わりの数コマだけ働き、アクセル 3 本は 1 本も対象にならないため出力は変わっていません。`docs/mocap-notes.md` 17 節)
- 首と頭の向きの基準を、胴を起こして滑っている時の姿勢に合わせました(2026-09-28)。計測の「首の付け根 → 耳」の線は胸の軸より 37° ほど前を向き、「耳 → 鼻根」の線は水平な視線でも 14° ほど上を向くため、そのまま当てはめると首が前へ倒れ、あごが上がって見えていました。頭のうなずきや振り向きなど、基準からの動きは元のままです。人形の首は 2 か所でしか曲がらないので、頭を大きく反らせる所では、顔の向きを変えずに首の傾きへ振り分けています(`docs/mocap-notes.md` 19 節)

## 合成の動き(着氷の後に滑り去る)

はける時の滑り用に、上の `lutz-c-03` の着氷とその後 0.85 秒の本物の滑りに、計測の本物の着氷 11 本をそろえて平均した着氷の姿勢をつなぎ、
その姿勢のまま流れ去るようにしたものです。体の動きはすべて計測データから来ているので、ライセンスは上と同じです。
仕組みは `tools/mocap/real_exit.py`、取り決めは `docs/assets-spec.md` 6.2 節。

| ファイル | 元の動き | 計測の部分(元のコマ番号) | 合成の部分 |
|---|---|---|---|
| `lutz-c-03--away.glb` / `.json` | `lutz-c-03`(`Skater_C/Lutz/Lutz_3.c3d`) | 166〜216(着氷から 0.85 秒) | 本物の着氷 11 本(C・D の 2 人)の平均の着氷姿勢へ移り、その姿勢のまま右足 1 本で流れ去る |
