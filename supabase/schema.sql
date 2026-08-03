-- ============================================================
-- UI Dictionary Japan — Supabase Schema (PostgreSQL)
-- Prisma schema と対応。SupabaseのSQL Editorで実行するか、
-- `npx prisma db push` を使用してください。
-- このファイルは RLS（Row Level Security）ポリシーを含みます。
-- ============================================================

-- ---------- 拡張 ----------
create extension if not exists pg_trgm; -- あいまい検索（trigram）

-- ---------- Enum ----------
create type role as enum ('USER', 'EDITOR', 'ADMIN');
create type item_status as enum ('DRAFT', 'PUBLISHED', 'ARCHIVED');
create type submission_status as enum ('PENDING', 'APPROVED', 'REJECTED');

-- ---------- users ----------
create table users (
  id text primary key,
  name text,
  email text unique not null,
  email_verified timestamptz,
  image text,
  role role not null default 'USER',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- ---------- categories ----------
create table categories (
  id text primary key,
  slug text unique not null,
  name text not null,
  name_ja text not null,
  description text not null,
  icon text not null,
  "group" text not null,
  sort_order int not null default 0,
  created_at timestamptz not null default now()
);

-- ---------- ui_items ----------
create table ui_items (
  id text primary key,
  slug text unique not null,
  name text not null,
  name_ja text not null,
  description text not null,
  status item_status not null default 'PUBLISHED',
  difficulty int not null default 1 check (difficulty between 1 and 3),
  content jsonb not null,
  code jsonb not null,
  aliases text[] not null default '{}',
  gradient text,
  category_id text not null references categories(id),
  views int not null default 0,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index idx_ui_items_category on ui_items(category_id);
create index idx_ui_items_ranking on ui_items(status, views desc);
-- 日本語あいまい検索用（name / name_ja / aliases）
create index idx_ui_items_name_trgm on ui_items using gin (name gin_trgm_ops);
create index idx_ui_items_name_ja_trgm on ui_items using gin (name_ja gin_trgm_ops);
create index idx_ui_items_aliases on ui_items using gin (aliases);

-- ---------- related_items ----------
create table related_items (
  from_id text not null references ui_items(id) on delete cascade,
  to_id text not null references ui_items(id) on delete cascade,
  primary key (from_id, to_id)
);

-- ---------- tags ----------
create table tags (
  id text primary key,
  name text unique not null
);

create table tags_on_items (
  item_id text not null references ui_items(id) on delete cascade,
  tag_id text not null references tags(id) on delete cascade,
  primary key (item_id, tag_id)
);

-- ---------- collections ----------
create table collections (
  id text primary key,
  slug text unique not null,
  name text not null,
  description text not null,
  long_description text not null,
  gradient text not null,
  icon text not null,
  sort_order int not null default 0
);

create table items_on_collections (
  item_id text not null references ui_items(id) on delete cascade,
  collection_id text not null references collections(id) on delete cascade,
  sort_order int not null default 0,
  primary key (item_id, collection_id)
);

-- ---------- item_images ----------
create table item_images (
  id text primary key,
  item_id text not null references ui_items(id) on delete cascade,
  public_id text not null,       -- Cloudinary publicId
  alt text not null,
  width int not null,
  height int not null,
  credit text,
  created_at timestamptz not null default now()
);
create index idx_item_images_item on item_images(item_id);

-- ---------- favorites ----------
create table favorites (
  user_id text not null references users(id) on delete cascade,
  item_id text not null references ui_items(id) on delete cascade,
  created_at timestamptz not null default now(),
  primary key (user_id, item_id)
);
create index idx_favorites_item on favorites(item_id);

-- ---------- view_logs ----------
create table view_logs (
  id text primary key default gen_random_uuid()::text,
  item_id text not null references ui_items(id) on delete cascade,
  user_id text references users(id) on delete set null,
  anon_hash text,
  created_at timestamptz not null default now()
);
create index idx_view_logs_item_date on view_logs(item_id, created_at);

-- ---------- submissions ----------
create table submissions (
  id text primary key default gen_random_uuid()::text,
  title text not null,
  url text not null,
  description text not null,
  category text not null,
  tags text[] not null default '{}',
  screenshot text,
  email text not null,
  user_id text references users(id) on delete set null,
  status submission_status not null default 'PENDING',
  review_note text,
  created_at timestamptz not null default now(),
  reviewed_at timestamptz
);
create index idx_submissions_queue on submissions(status, created_at);

-- ============================================================
-- Row Level Security
-- ============================================================
alter table users enable row level security;
alter table categories enable row level security;
alter table ui_items enable row level security;
alter table related_items enable row level security;
alter table tags enable row level security;
alter table tags_on_items enable row level security;
alter table collections enable row level security;
alter table items_on_collections enable row level security;
alter table item_images enable row level security;
alter table favorites enable row level security;
alter table view_logs enable row level security;
alter table submissions enable row level security;

-- 公開コンテンツ: 誰でも読める
create policy "public read categories" on categories for select using (true);
create policy "public read published items" on ui_items for select using (status = 'PUBLISHED');
create policy "public read related" on related_items for select using (true);
create policy "public read tags" on tags for select using (true);
create policy "public read tags_on_items" on tags_on_items for select using (true);
create policy "public read collections" on collections for select using (true);
create policy "public read items_on_collections" on items_on_collections for select using (true);
create policy "public read item_images" on item_images for select using (true);

-- ユーザー: 自分の行のみ
create policy "read own user" on users for select using (auth.uid()::text = id);
create policy "update own user" on users for update using (auth.uid()::text = id);

-- お気に入り: 自分のもののみ読み書き
create policy "read own favorites" on favorites for select using (auth.uid()::text = user_id);
create policy "insert own favorites" on favorites for insert with check (auth.uid()::text = user_id);
create policy "delete own favorites" on favorites for delete using (auth.uid()::text = user_id);

-- 閲覧ログ: 誰でもINSERTのみ（読み取りはservice roleのみ）
create policy "insert view logs" on view_logs for insert with check (true);

-- 投稿: 誰でもINSERT、投稿者本人は自分の投稿を読める
create policy "insert submissions" on submissions for insert with check (true);
create policy "read own submissions" on submissions for select using (auth.uid()::text = user_id);

-- 管理操作（ui_itemsの書き込み、submissionsの審査等）は
-- service_role キー（サーバーサイド）経由でのみ行う。

-- ============================================================
-- 集計ビュー: 人気ランキング（直近30日）
-- ============================================================
create or replace view v_ranking_30d as
select
  i.id,
  i.slug,
  i.name,
  i.name_ja,
  count(v.id) as views_30d
from ui_items i
left join view_logs v
  on v.item_id = i.id and v.created_at > now() - interval '30 days'
where i.status = 'PUBLISHED'
group by i.id
order by views_30d desc;
