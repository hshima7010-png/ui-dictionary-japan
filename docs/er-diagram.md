# ER図 — UI Dictionary Japan

```mermaid
erDiagram
    users ||--o{ accounts : "OAuth連携"
    users ||--o{ sessions : "ログイン"
    users ||--o{ favorites : "保存する"
    users ||--o{ submissions : "投稿する"
    users ||--o{ view_logs : "閲覧する"

    categories ||--o{ ui_items : "分類する"

    ui_items ||--o{ favorites : "保存される"
    ui_items ||--o{ view_logs : "閲覧される"
    ui_items ||--o{ item_images : "画像を持つ"
    ui_items ||--o{ tags_on_items : ""
    tags ||--o{ tags_on_items : ""
    ui_items ||--o{ items_on_collections : ""
    collections ||--o{ items_on_collections : ""
    ui_items ||--o{ related_items : "関連する"

    users {
        text id PK
        text email UK
        text name
        role role "USER/EDITOR/ADMIN"
        timestamptz created_at
    }

    categories {
        text id PK
        text slug UK
        text name
        text name_ja
        text icon
        text group
        int sort_order
    }

    ui_items {
        text id PK
        text slug UK
        text name
        text name_ja
        text description
        item_status status "DRAFT/PUBLISHED/ARCHIVED"
        int difficulty "1-3"
        jsonb content "whatIs/merits/demerits..."
        jsonb code "html/tailwind/react/shadcn"
        text_array aliases "自然言語エイリアス"
        text category_id FK
        int views
        timestamptz updated_at
    }

    related_items {
        text from_id PK,FK
        text to_id PK,FK
    }

    tags {
        text id PK
        text name UK
    }

    tags_on_items {
        text item_id PK,FK
        text tag_id PK,FK
    }

    collections {
        text id PK
        text slug UK
        text name
        text gradient
        int sort_order
    }

    items_on_collections {
        text item_id PK,FK
        text collection_id PK,FK
        int sort_order
    }

    item_images {
        text id PK
        text item_id FK
        text public_id "Cloudinary"
        text alt
        int width
        int height
    }

    favorites {
        text user_id PK,FK
        text item_id PK,FK
        timestamptz created_at
    }

    view_logs {
        text id PK
        text item_id FK
        text user_id FK "nullable"
        text anon_hash "匿名日次ハッシュ"
        timestamptz created_at
    }

    submissions {
        text id PK
        text title
        text url
        text screenshot "Cloudinary publicId"
        text email
        text user_id FK "nullable"
        submission_status status "PENDING/APPROVED/REJECTED"
        timestamptz reviewed_at
    }
```

## 設計方針

**contentとcodeをJSONBにした理由** — 「UIとは？」「メリット」などの本文セクションは今後増減する可能性が高く、正規化するとマイグレーションコストが本文の柔軟性を上回るためです。検索対象となる `name` / `name_ja` / `aliases` / `description` のみカラムに切り出し、trigram GINインデックスであいまい検索に対応しています。

**view_logsを生ログで持つ理由** — 「直近30日ランキング」「急上昇」など期間集計の要件に応えるため、`ui_items.views`（累計キャッシュ）と `view_logs`（生ログ）の二層構成にしています。ランキングは `v_ranking_30d` ビューで集計し、`views` カラムは日次バッチで同期します。

**匿名閲覧の扱い** — 個人情報を保存せず、IP+UserAgentの日次ソルト付きハッシュ（`anon_hash`）で同一ユーザーの重複カウントを排除します。

**related_itemsが自己多対多の理由** — 「AccordionはTabsと関連」のような対称的な関係を片方向2レコードで表現し、編集画面から柔軟に管理できるようにしています。
