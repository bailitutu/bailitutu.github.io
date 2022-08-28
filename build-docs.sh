#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run docs:build

# 进入生成的文件夹
cd docs/.vuepress/dist

git add .
git commit -m 'publish blog'

# 部署到 https://bailitutu.github.io
git push
