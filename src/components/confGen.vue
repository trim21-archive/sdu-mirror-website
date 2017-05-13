<template>
  <div class="confGen">
    <h2>配置生成器</h2>
    <div>
      <div class="row">

        <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3">
          <select v-model="distro" class="form-control">
              <option v-for="dist in distroList">{{dist}}</option>
               <!--<option version="ubuntu">ubuntu</option>-->
               <!--<option version="kali">kali</option>-->
               <!--<option version="npm">npm</option>-->
            </select>
        </div>

        <div v-if="getVersionOfDistro(distro).length>1" class="col-xs-3 col-sm-3 col-md-3 col-lg-3">
          <select v-model="version" class="form-control">
            <option v-if="getVersionOfDistro(distro)" v-for="item in getVersionOfDistro(distro)" :value="item.key">{{item.name}}</option>
          </select>
        </div>

      </div>
    </div>
    <br>
    <pre>{{ gen(distro,version) }}</pre>
    <h2>使用说明</h2>
    <div></div>
    <!--<h3>{{user(distro)}}</h3>-->
    <div v-html="marked(user(distro))"></div>

  </div>
</template>

<script>
  /* eslint-disable no-unused-vars */
  const marked = require('marked');

  marked.setOptions({
    renderer: new marked.Renderer(),
    gfm: true,
    tables: true,
    breaks: true,
    pedantic: true,
    sanitize: true,
    smartLists: true,
    smartypants: true,
  });

  export default {
    name: 'confGen',
    methods: {
      marked,
      user(dist) {
        if (dist === 'npm') {
          return '加入#~/.npmrc';
        } else if (dist === 'ubuntu' || dist === 'kali') {
          return '替换/etc/apt/sources.list';
        } else if (dist === 'aosp') {
          return `# AOSP镜像使用帮助

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

`;
        }
        return dist;
      },
      getVersionOfDistro(distro) {
        if (distro === 'npm') {
          return [{
            key: 'npm',
            name: 'npm',
          }];
        } else if (distro === 'ubuntu') {
          return [{
            key: 'artful',
            name: 'artful (17.10)',
          }, {
            key: 'zesty',
            name: 'zesty (17.04)',
          }, {
            key: 'yakkety',
            name: 'yakkety (16.10)',
          }, {
            key: 'xenial',
            name: 'xenial (16.04)',
          }, {
            key: 'wily',
            name: 'wily (15.10)',
          }, {
            key: 'vivid',
            name: 'vivid (15.04)',
          }, {
            key: 'utopic',
            name: 'utopic (14.10)',
          }, {
            key: 'trusty',
            name: 'trusty (14.04)',
          }, {
            key: 'saucy',
            name: 'raring (13.10)',
          }, {
            key: 'raring',
            name: 'raring (13.04)',
          }, {
            key: 'quantal',
            name: 'quantal (12.10)',
          }, {
            key: 'precise',
            name: 'precise (12.04)',
          },
          ];
        } else if (distro === 'kali') {
          return [{
            key: 'kali',
            name: 'kali',
          }];
        } else if (distro === 'aosp') {
          return [{
            key: 'aosp',
            name: 'aosp',
          }];
        }
        return null;
      },
      gen(distro, version) {
        if (!(distro && version)) {
          return '233';
        }
        let st = '';
        //         if (this.distro === 'kali') {
        //           st = `#/etc/apt/sources.list

        // deb https://mirror.sdu.edu.cn/kali kali-rolling main non-free contrib
        // deb-src https://mirror.sdu.edu.cn/kali kali-rolling main non-free contrib`;
        //         } else
        if (this.distro === 'ubuntu') {
          st = `#/etc/apt/sources.list

deb https://mirror.sdu.edu.cn/ubuntu/ ${version} main restricted universe multiverse
deb https://mirror.sdu.edu.cn/ubuntu/ ${version}-security main restricted universe multiverse
deb https://mirror.sdu.edu.cn/ubuntu/ ${version}-updates main restricted universe multiverse
# deb https://mirror.sdu.edu.cn/ubuntu/ ${version}-proposed main restricted universe multiverse
# deb https://mirror.sdu.edu.cn/ubuntu/ ${version}-backports main restricted universe multiverse
deb-src https://mirror.sdu.edu.cn/ubuntu/ ${version} main restricted universe multiverse
deb-src https://mirror.sdu.edu.cn/ubuntu/ ${version}-security main restricted universe multiverse
deb-src https://mirror.sdu.edu.cn/ubuntu/ ${version}-updates main restricted universe multiverse
# deb-src https://mirror.sdu.edu.cn/ubuntu/ ${version}-proposed main restricted universe multiverse`;
        } else if (this.distro === 'npm') {
          st = `#~/.npmrc

registry=https://mirror.sdu.edu.cn/npm/`;
        } else if (this.distro === 'aosp') {
          st = '';
        }
        return st;
      },
    },

    data() {
      return {
        distroList: ['npm', 'ubuntu'],
        distro: 'ubuntu',
        version: 'artful',
      };
    },
  };

</script>

<style scoped>
  pre {
    text-align: start;
  }
</style>