#!/usr/bin/env bash

capture-website http://localhost:8123/lovelace/default_view screenshots/theme-overview.png        --width="1280" --height="720" --overwrite;
capture-website http://localhost:8123/map                   screenshots/theme-map.png             --width="1280" --height="720" --overwrite;
capture-website http://localhost:8123/logbook               screenshots/theme-logbook.png         --width="1280" --height="720" --overwrite;
capture-website http://localhost:8123/history               screenshots/theme-history.png         --width="1280" --height="720" --overwrite;
capture-website http://localhost:8123/developer-tools/info  screenshots/theme-developer-tools.png --width="1280" --height="720" --overwrite;
capture-website http://localhost:8123/config/dashboard      screenshots/theme-configuration.png   --width="1280" --height="720" --overwrite;
capture-website http://localhost:8123/profile               screenshots/theme-profile.png         --width="1280" --height="720" --overwrite;
