#!/usr/bin/env sh

wait_for_rskj() {
  echo Connecting to RSKj
  for i in `seq 1 30`;
  do
    nc -z localhost 4444 && return 0
    sleep 0.5
  done
  echo Failed to connect to RSKj
  exit 1
}

wait_for_rskj
node_modules/.bin/truffle --ci --network rsk test "$@"
