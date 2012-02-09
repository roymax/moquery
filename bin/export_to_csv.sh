#!/bin/sh

sqlite3  -nullvalue -csv ./db/telocation.db "SELECT l.'_id', l.location AS 'provide', t.location AS 'area' FROM mob_location l LEFT JOIN tel_location t ON l.areacode = t.'_id'" > ./db/data.csv

echo 'export data finished.'

