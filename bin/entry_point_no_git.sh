#!/bin/bash
set -euo pipefail

echo "Entry point script running (git-free version)"

CONFIG_FILE=_config.yml

start_jekyll() {
    # Skip git checks for worktree compatibility
    if [ -f Gemfile.lock ]; then
        echo "Gemfile.lock exists, keeping it"
    fi

    # Pre-create _site language directories to avoid imagemagick race condition with polyglot
    mkdir -p _site
    for lang in $(grep 'languages:' _config.yml | grep -oP '"[^"]+"' | tr -d '"'); do
        mkdir -p "_site/$lang"
    done

    bundle exec jekyll serve --config _config.yml,_config_dev.yml --incremental --watch --port=8080 --host=0.0.0.0 --livereload --verbose --trace --force_polling &
}

start_jekyll

while true; do
    inotifywait -q -e modify,move,create,delete $CONFIG_FILE
    if [ $? -eq 0 ]; then
        echo "Change detected to $CONFIG_FILE, restarting Jekyll"
        jekyll_pid=$(pgrep -f jekyll)
        kill -KILL $jekyll_pid
        start_jekyll
    fi
done
