default export `# AOSP镜像使用帮助
>该镜像上游是[清华大学开源镜像站](https://mirrors.tuna.tsinghua.edu.cn/help/AOSP/)，每天凌晨三点进行代码同步。

###简洁说明
可以参考官方的使用教程[](https://source.android.com/source/downloading.html)。使用\`git://mirror.sdu.edu.cn/\` 替换 \`https://android.googlesource.com/\` 即可。

###具体说明（新开始）
（参考[https://mirrors.tuna.tsinghua.edu.cn/help/AOSP/](https://mirrors.tuna.tsinghua.edu.cn/help/AOSP/)编写）

1. 下载repo工具

        mkdir ~/bin
        PATH=~/bin:$PATH
        curl https://storage.googleapis.com/git-repo-downloads/repo > ~/bin/repo #Google
        curl https://mirrors.tuna.tsinghua.edu.cn/git/git-repo > ~/bin/repo #Tsinghua
        chmod a+x ~/bin/repo

2. 创建工作目录并进入

        mkdir WORKING_DIRECTORY
        cd WORKING_DIRECTORY
3. 初始化仓库
    >如果提示无法连接到 gerrit.googlesource.com，请参照[清华大学镜像站中git-repo的帮助页面](https://mirrors.tuna.tsinghua.edu.cn/help/git-repo)中的更新一节。

    + 完整初始化：
    
            repo init -u git://mirror.sdu.edu.cn/platform/manifest
    
    + 同步某个特定的Android版本([列表](https://source.android.com/source/build-numbers#source-code-tags-and-builds)):
            
            repo init -u git://mirror.sdu.edu.cn/platform/manifest  -b android-7.1.2_r1
    
4. 同步源码
    
        repo sync
        
###具体说明（替换已有源码的remote）
1. 修改\`.repo/manifest.xml\`,将\`name\`为\`aosp\`的\`remote\`中\`fetch\`的值修改为\`..\`
2. 修改\`.repo/manifests.git/config\`,将\`url\`修改为\`url=git://mirror.sdu.edu.cn/platform/manifest\`

`