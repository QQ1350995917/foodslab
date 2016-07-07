message=$(date +%Y-%m-%d-%H-%M-%S)
echo "$message commit foodslab.cn"
git add .
git commit -m "$message"
