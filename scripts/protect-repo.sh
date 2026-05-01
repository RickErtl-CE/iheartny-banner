#!/usr/bin/env sh
set -eu

ROOT_DIR="$(cd "$(dirname "$0")/.." && pwd)"
OUT_DIR="$ROOT_DIR/protected/site"

if [ -z "${STATICRYPT_PASSWORD:-}" ]; then
  echo "Error: STATICRYPT_PASSWORD is not set."
  echo "Run: STATICRYPT_PASSWORD='your-password' npm run protect:repo"
  exit 1
fi

rm -rf "$OUT_DIR"
mkdir -p "$OUT_DIR"

# Copy all non-HTML assets/files, excluding generated and dependency directories.
rsync -a \
  --exclude '.git' \
  --exclude 'node_modules' \
  --exclude 'protected' \
  --exclude '.DS_Store' \
  --exclude '*.html' \
  "$ROOT_DIR/" "$OUT_DIR/"

# Encrypt every HTML entry point with one shared password.
find "$ROOT_DIR" -type f -name '*.html' \
  ! -path "$ROOT_DIR/node_modules/*" \
  ! -path "$ROOT_DIR/protected/*" \
  ! -path "$ROOT_DIR/.git/*" \
  | while IFS= read -r src_file; do
    rel_path="${src_file#$ROOT_DIR/}"
    dst_dir="$OUT_DIR/$(dirname "$rel_path")"
    mkdir -p "$dst_dir"

    npx staticrypt "$src_file" \
      --password "$STATICRYPT_PASSWORD" \
      --short \
      --directory "$dst_dir" \
      --template-title "Protected Creative Preview" \
      --template-instructions "Enter password to view this preview."

    dst_file="$dst_dir/$(basename "$src_file")"
    if [ ! -f "$dst_file" ]; then
      echo "Error: Staticrypt did not generate $dst_file"
      exit 1
    fi
  done

echo "Protected full-site build created at: $OUT_DIR"
