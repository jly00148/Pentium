1.webpack新的配制,前两个文件作废
2.常用命令:
  1)查看版本:npx webpack -v
  2)查看命令帮助:npx webpack --help
  3)显示打包过程:npx webpack --progress
  4)自动打包:自动打包,有更新就会自动打包
  5)添加npm脚本:npm run build一同执行
  	  "scripts": {
			"start": "webpack serve"
    		"build": "webpack --watch --progress"
  		},