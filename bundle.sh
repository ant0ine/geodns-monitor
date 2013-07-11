#!/bin/bash

dest="$1"
if [[ -z "$dest" ]]; then
    dest="data.go"
fi

if [ "`uname`" = "Linux" ]; then
  wrap="-w 80"
  echo="echo -ne"
else
  wrap="-b 80"
  echo="echo"
fi

$echo "package main\n\n// this file is auto-generated by bundle.sh\n" > $dest

function bundle() {
    for f in $1/*; do
        if [ -d $f ]; then
            bundle $f
            continue
        fi    
        echo "Bundling $f"
        $echo "\t\"$f\": \`" >> $dest
        cat $f |base64 $wrap >> $dest
        $echo "\`,\n" >> $dest
    done
}

echo "var _bundle = map[string]string{" >> $dest

bundle templates
bundle static

$echo "}\n" >> $dest
