---
title: あなたの流れを手に入れよう!
permalink: /flow/
layout: flow
lang: ja
description: >
  このページでは、このテーマに提供されているジキル.html流れの力を紹介します。
keywords:
  - flow
  - jekyll
  - automation
  - simple
  - bootstrap 3
jumbotron:
  inner_class: dotted
  title: あなたの流れを手に入れよう!
  slider: []
  description: >
    フローレイアウトでは、Jekyll フロントマターのみを使用してカスタムページを作成できます。
  image: /assets/images/breadcrumb-image.jpg
  buttons:
    - title: ギットハブで見る
      icon: icon-github
      class: test
      url: https://github.com
flow:
  - row: container_row
    #   style: dark
    sections:
      - format: title
        style: #
        title_content:
          size: h2
          text: フローレイアウトとは何ですか？
          style: display-4
      - format: text
        style: #
        text_content:
          text: |
            フローレイアウトを使用すると、コンテンツ編集者は新しいレイアウトを追加する必要なしにカスタムページを作成できます。

            レイアウトでは、コンテンツエディタで行タイプとセクションタイプを組み合わせて、カスタムの静的ページを作成します。
      - format: buttons
        style: #
        buttons_content:
          - title: 詳細
            url: /about/
            icon: fa fa-arrow-right
            style: btn-primary
      - format: image
        style: #
        alt: Test Alt
        size: 8
        path: /assets/images/breadcrumb-image.jpg
  - row: container_row
    style: fixed text-center
    background_image: /assets/images/breadcrumb-image.jpg
    sections:
      - format: title
        title_content:
          size: h2
          text: 背景画像を含むコンテナ行
      - format: text
        style: text-center text-white
        text_content:
          text: 背景画像を含むコンテナ行
      - format: buttons
        style: text-center
        buttons_content:
          - title: 詳細
            url: /about/
            icon: fa fa-arrow-right
            style: btn-primary
  - row: container_row
    style: bg-primary
    sections:
      - format: title
        style: text-center text-white
        title_content:
          size: h2
          text: Lazy YouTube embed row
      - format: youtube
        style: #
        url: https://www.youtube.com/watch?v=mWpK-cNQmL8
        #   poster_image: /assets/images/breadcrumb-image.jpg
        title: カーネル自己テストに関するシュア・カーンのインタビュー
  - row: container_row
    style: block_row
    sections:
      - format: title
        style: text-center
        title_content:
          size: h2
          text: セクションの折りたたみ
      - format: collapse
        style: #
        panels:
          - title: テストパネルのタイトル
            content: |
              ## テストパネルのコンテンツ

              その他のテキスト

              - 弾丸 1
              - 弾丸 2
              - 弾丸 3
          - title: テストパネルのタイトル 2
            content: |
              ## テストパネルコンテンツ 2

              その他のテキスト

              - 弾丸 1
              - 弾丸 2
              - 弾丸 3
      - format: title
        style: text-center
        title_content:
          size: h2
          text: Members Section
      - format: members
        style: zoom grayscale bg-dark
        members_content:
          item_width: "4"
          items:
            - name: Linaro
              image:
                path: /assets/images/Linaro-logo-white.png
                alt: Linaro Logo
              url: https://www.linaro.org/
            - name: Linaro
              image:
                path: /assets/images/Linaro-logo-white.png
                alt: Linaro Logo
              url: https://www.linaro.org/
            - name: Linaro
              image:
                path: /assets/images/Linaro-logo-white.png
                alt: Linaro Logo
              url: https://www.linaro.org/
            - name: Linaro
              image:
                path: /assets/images/Linaro-logo-white.png
                alt: Linaro Logo
              url: https://www.linaro.org/
  - row: container_row
    style: block_row
    #   background_image: /assets/images/breadcrumb-image.jpg
    sections:
      - format: title
        style: text-center
        title_content:
          size: h2
          text: ブロック行
      - format: block
        style: text-center
        block_section_content:
          item_width: "4"
          blocks:
            - title: ブロック 1
              url: /about/
              modal_content: |
                これはいくつかのモーダル _content_です。
              image: /assets/images/breadcrumb-image.jpg
              background_image: true
              description: イベントの写真をご覧ください。
              buttons:
                - title: 詳細
                  url: /flow/
                  icon: fa fa-arrow-right
                  style: btn-primary
                - title: More
                  url: /flow/
                  icon: fa fa-arrow-right
                  style: btn-secondary
            - title: ブロック 2
              url: /about/
              image: /assets/images/Linaro-logo-white.png
              description: イベントの写真をご覧ください。
              buttons:
                - title: 詳細
                  url: /flow/
                  icon: fa fa-arrow-right
                  style: btn-primary
            - title: ブロック 3
              url: /about/
              image: /assets/images/Linaro-logo-white.png
              description: イベントの写真をご覧ください。
              buttons:
                - title: 詳細
                  url: /flow/
                  icon: fa fa-arrow-right
                  style: btn-primary
  - row: container_row
    style: block_row fixed
    background_image: /assets/images/breadcrumb-image.jpg
    sections:
      - format: block
        style: text-center text-white
        block_section_content:
          item_width: "3"
          blocks:
            - title: ブロック 1
              url: /about/
              image: /assets/images/breadcrumb-image.jpg
              background_image: true
              style: d-flex
              content_style: d-flex flex-column align-items-center justify-content-center
              description: イベントの写真をご覧ください。
              buttons:
                - title: 詳細
                  url: /flow/
                  style: btn-primary
                  icon: fa fa-arrow-right
            - title: ブロック 2
              url: /about/
              image: /assets/images/breadcrumb-image.jpg
              background_image: true
              description: イベントの写真をご覧ください。
              buttons:
                - title: 詳細
                  url: /flow/
                  icon: fa fa-arrow-right
                  style: btn-primary
            - title: ブロック 3
              url: /about/
              style: block_three_style
              image: /assets/images/breadcrumb-image.jpg
              background_image: true
              description: イベントの写真をご覧ください。
              buttons:
                - title: 詳細
                  url: /flow/
                  icon: fa fa-arrow-right
                  style: btn-primary
            - title: ブロック 4
              url: /about/
              image: /assets/images/breadcrumb-image.jpg
              background_image: true
              description: イベントの写真をご覧ください。
              buttons:
                - title: 詳細
                  url: /flow/
                  icon: fa fa-arrow-right
                  style: btn-primary
                - title: Read
                  url: /flow/
                  icon: fa fa-book
                  style: btn-primary
  - row: container_row
    style: block_row fixed
    sections:
      - format: tabs
        style: #
        tabs:
          - title: 試験
            content: |
              ロレム・イプサム・ドロールはアメットに座り、エリトを奉献し、アイウスモド・テンプター・インシディドゥント・ウ・イコール・エ・ドロレ・マグナ・アリカを歌う。Ut enim ad minim veniam, クイス・ノススルード・エクスメルシエーション・ウラムコ・laboris nisi ut aliquip ex ea commodo consequat.デュイス・オート・アイラー・ドール・イン・レプレヘンデリットのボリュート・ヴェリット・エッセ・シルム・ドロワールで、私はヌラ・パリアトゥールを走らせた。除いて、オカキャット・クピダスト・ノン・プロイデント、カルパ・クイ・オフィシア・デセルント・モリト・アニム・イッド・エスト・ルーマムのサント。 >ロレン・イプサム・ドロールはアメットに座り、エリトを奉献し、セッド・ド・エイスモド・テンペル・インシディドゥット・ウット・レイバー・エ・ドロレ・マグナ・アリカをセドした。Ut enim ad minim veniam, クイス・>ノスラッド・エクスメルコ・ウレンコ・laboris nisi ut aliquip ex ea commodo consequat.デュワ・オート・アイラー・ドール・イン・レプレヘンデリットのデュワ・アイラー・ドロールは、私がヌラ・ファリアトゥールを逃げた>、ヴォルプルテート・ヴェリット・エッセ・シルム・ドロレで逃げました。除いて、オカキャット・クピダスト・ノン・プロイデント、カルパ・クイ・オフィシア・デセルント・モリト・アニム・イッド・エスト・ルーマムのサント。

              - 試験
              - 試験
              - 試験

              This is some more [content](/).
          - title: 試験 2
            content: |
              This is some test tab content. 2

              - 試験

              - 試験

              - 試験

              This is some more [content](/).
          - title: 試験 3
            content: |
              This is some test tab content. 3

              - 試験
              - 試験
              - 試験

              This is some more [content](/). 3
  - row: container_row
    #style: fixed
    background_image: /assets/images/breadcrumb-image.jpg
    sections:
      - format: title
        title_content:
          size: h2
          text: カスタムインクルードセクション
      - format: custom_include
        source: examples/custom_include.html
  - row: full_width_row
    style: fixed block_row
    sections:
      - format: title
        style: text-center
        title_content:
          text: 全幅ブロック行
          size: h2
      - format: block
        style: text-center
        item_width: 3
        block_section_content:
          blocks:
            - title: メンバー セクションの例
              url: /about/
              image: /assets/images/breadcrumb-image.jpg
              description: イベントの写真をご覧ください。
              buttons:
                - title: 詳細
                  url: /flow/
                  icon: fa fa-arrow-right
                  style: btn-primary
            - title: メンバー セクションの例
              url: /about/
              image: /assets/images/breadcrumb-image.jpg
              description: イベントの写真をご覧ください。
              buttons:
                - title: 詳細
                  url: /flow/
                  icon: fa fa-arrow-right
                  style: btn-primary
            - title: メンバー セクションの例
              url: /about/
              image: /assets/images/breadcrumb-image.jpg
              description: イベントの写真をご覧ください。
              buttons:
                - title: 詳細
                  url: /flow/
                  icon: fa fa-arrow-right
                  style: btn-primary
            - title: メンバー セクションの例
              url: /about/
              image: /assets/images/breadcrumb-image.jpg
              description: イベントの写真をご覧ください。
              buttons:
                - title: 詳細
                  url: /flow/
                  icon: fa fa-arrow-right
                  style: btn-primary
                - title: Read
                  url: /flow/
                  icon: fa fa-book
                  style: btn-primary
  - row: full_width_row
    #style: new
    sections:
      - format: title
        title_content:
          text: Feature Block Row (Full Width)
          size: h2
      - format: feature_block
        style: dotted
        feature_block_content:
          position: "left"
          type: "youtube_video"
          youtube:
            url: https://www.youtube.com/watch?v=QH2-TGUlwu4
            poster_image: /assets/images/breadcrumb-image.jpg
          title: 機能ブロック
          custom_include: test/feature_block.html
          text: >
            ユーチューブ動画を含む機能ブロック。
          buttons:
            - title: ボタン 1
              url: /about/
              style: btn-primary
            - title: ボタン 2
              url: /about/
              style: btn-primary
      - format: feature_block
        #   style: text-center text-white
        feature_block_content:
          position: "right"
          type: "image"
          image_content_path: /assets/images/breadcrumb-image.jpg
          title: 機能ブロック 2
          text: >
            イメージを含むフィーチャー ブロック。
          custom_include: test/feature_block.html
          buttons:
            - title: ボタン 1
              url: /about/
              style: btn-primary
            - title: ボタン 2
              url: /about/
              style: btn-primary
  - row: container_row
    #style: new
    sections:
      - format: title
        title_content:
          text: Feature Block Row
          size: h2
      - format: feature_block
        style: dotted
        feature_block_content:
          position: "left"
          type: "slider"
          slider_content:
            lightbox_enabled: true
            seconds_per_slide: 5
            nav: true
            dots: false
            xs_items: 1
            sm_items: 1
            md_items: 1
            lg_items: 1
            items:
              - image: /assets/images/breadcrumb-image.jpg
                alt: Background Image
                title: Background Image 1
              - image: /assets/images/breadcrumb-image.jpg
                alt: Background Image
                title: Background Image 1
              - image: /assets/images/breadcrumb-image.jpg
                alt: Background Image
                title: Background Image 1
              - image: /assets/images/breadcrumb-image.jpg
                alt: Background Image
                title: Background Image 1
              - image: /assets/images/breadcrumb-image.jpg
                alt: Background Image
                title: Background Image 1
              - image: /assets/images/breadcrumb-image.jpg
                alt: Background Image
                title: Background Image 1
              - image: /assets/images/breadcrumb-image.jpg
                alt: Background Image
                title: Background Image 1
              - image: /assets/images/breadcrumb-image.jpg
                alt: Background Image
                title: Background Image 1
              - image: /assets/images/breadcrumb-image.jpg
                alt: Background Image
                title: Background Image 1
          title: 機能ブロック
          text: >
            フクロウのカルーセルスライダーを備えた機能ブロック。
          buttons:
            - title: ボタン 1
              url: /about/
              style: btn-primary
            - title: ボタン 2
              url: /about/
              style: btn-primary
      - format: feature_block
        #   style: text-center text-white
        feature_block_content:
          position: "right"
          type: "image"
          image_content_path: /assets/images/breadcrumb-image.jpg
          title: 機能ブロック
          text: >
            イメージを含むフィーチャー ブロック。
          buttons:
            - title: ボタン 1
              url: /about/
              style: btn-primary
            - title: ボタン 2
              url: /about/
              style: btn-primary
      - format: feature_block
        #   style: text-center text-white
        feature_block_content:
          position: "left"
          type: "youtube_video"
          youtube:
            url: https://www.youtube.com/watch?v=QH2-TGUlwu4
            poster_image: /assets/images/breadcrumb-image.jpg
          title: 機能ブロック(ユーチューブ動画付き)
          text: >
            これは、特集コンテンツの YouTube 動画を使用する機能ブロックです。
          buttons:
            - title: ボタン 1
              url: /about/
              style: btn-primary
            - title: ボタン 2
              url: /about/
              style: btn-primary
  - row: container_row
    #style: new
    sections:
      - format: title
        title_content:
          text: スライダー行の例
          size: h2
      - format: slider
        style: customCSS
        slider_content:
          lightbox_enabled: true
          seconds_per_slide: 5
          nav: true
          dots: false
          xs_items: 1
          sm_items: 2
          md_items: 4
          lg_items: 6
          items:
            - image: /assets/images/breadcrumb-image.jpg
              alt: Background Image
              title: Background Image 1
            - image: /assets/images/breadcrumb-image.jpg
              alt: Background Image
              title: Background Image 1
            - image: /assets/images/breadcrumb-image.jpg
              alt: Background Image
              title: Background Image 1
            - image: /assets/images/breadcrumb-image.jpg
              alt: Background Image
              title: Background Image 1
            - image: /assets/images/breadcrumb-image.jpg
              alt: Background Image
              title: Background Image 1
            - image: /assets/images/breadcrumb-image.jpg
              alt: Background Image
              title: Background Image 1
            - image: /assets/images/breadcrumb-image.jpg
              alt: Background Image
              title: Background Image 1
            - image: /assets/images/breadcrumb-image.jpg
              alt: Background Image
              title: Background Image 1
            - image: /assets/images/breadcrumb-image.jpg
              alt: Background Image
              title: Background Image 1
  - row: full_width_row
    #style: new
    sections:
      - format: title
        title_content:
          text: スライダー行の例 (全幅)
          size: h2
      - format: text
        style: text-center
        text_content:
          text: そのようなことについて何かを記述するテキストのいくつかのブロック.
      - format: slider
        style: customCSS
        slider_content:
          lightbox_enabled: true
          seconds_per_slide: 5
          nav: true
          dots: false
          xs_items: 1
          sm_items: 3
          md_items: 6
          lg_items: 9
  - row: custom_include_row
    source: examples/custom_include_row.html
---
