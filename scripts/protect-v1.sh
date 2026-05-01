#!/usr/bin/env sh
set -eu

ROOT_DIR="$(cd "$(dirname "$0")/.." && pwd)"
SRC_DIR="$ROOT_DIR/banners/300x250/v1"
OUT_DIR="$ROOT_DIR/protected/300x250/v1"

if [ -z "${STATICRYPT_PASSWORD:-}" ]; then
  echo "Error: STATICRYPT_PASSWORD is not set."
  echo "Run: STATICRYPT_PASSWORD='your-password' npm run protect:v1"
  exit 1
fi

rm -rf "$OUT_DIR"
mkdir -p "$OUT_DIR/assets"

cd "$ROOT_DIR"

npx staticrypt "$SRC_DIR/index.html" \
  --password "$STATICRYPT_PASSWORD" \
  --short \
  --directory "$OUT_DIR" \
  --template-title "Protected Creative Preview" \
  --template-instructions "Enter password to view this preview."

if [ ! -f "$OUT_DIR/index.html" ]; then
  echo "Error: Staticrypt did not generate $OUT_DIR/index.html"
  exit 1
fi

cp "$SRC_DIR/styles.css" "$OUT_DIR/styles.css"
cp "$SRC_DIR/script.js" "$OUT_DIR/script.js"
cp "$SRC_DIR/backup.svg" "$OUT_DIR/backup.svg"
cp -R "$SRC_DIR/assets/." "$OUT_DIR/assets/"

echo "Protected build created at: $OUT_DIR"
