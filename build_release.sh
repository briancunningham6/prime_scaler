# scripts/build_release.sh
#!/bin/bash
set -e
echo "Building PrimeScaler release..."
# Environment setup
export MIX_ENV=prod
# Clean previous builds
mix deps.clean --all
mix clean
rm -rf _build
# Get dependencies
mix deps.get --only prod
# Compile and bundle assets
cd assets && npm ci && cd ..
mix assets.deploy
mix phx.digest
# Compile the application
mix compile
# Build release
mix release --overwrite
# Create zip package
VERSION=$(grep 'version:' mix.exs | sed -E 's/.*version: "([^"]+)".*/\1/')
RELEASE_NAME="prime_scaler-${VERSION}.zip"
mkdir -p releases
zip -r "releases/${RELEASE_NAME}" _build/prod/rel/prime_scaler
echo "Release built at releases/${RELEASE_NAME}"
