#!/usr/bin/env bash

# Ask for port
echo "Port:"
read port

# Erase region
esptool.py --port ${port} erase_region 0x0F4000 0x008000

# Erase Flash
esptool.py --port ${port} erase_flash
