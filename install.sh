trap_exit() {
  echo "[3/3] Cleaning up containers" &&
  docker compose -f docker-compose-kiwa.yml down -v --remove-orphans &&
  rm -f docker-compose-kiwa.yml
}
trap trap_exit EXIT;

echo "[1/3] Downloading latest docker compose file from GitHub" &&
curl -fsSL https://raw.githubusercontent.com/waldbrandpraevention/frontend/main/docker-compose.yml -o docker-compose-kiwa.yml &&
echo "[2/3] Running containers" &&
docker compose -f docker-compose-kiwa.yml pull &&
docker compose -f docker-compose-kiwa.yml up