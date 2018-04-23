#!/usr/bin/env bash

# Ask for download URL.
echo "Download URL:";
read url;

# Ask for Serie name.
echo "Serie:";
read serie;

# Ask for season number.
echo "Seizoen:";
read season;

# Ask for episode number.
echo "Aflevering:"; 
read episode;

# Download episode to specific folder.
ffmpeg -i ${url} "/Volumes/Series/${serie}/S${season}/E${episode}/${serie} - S${season}E${episode}.mp4"
