<template>
  <div class="confGen">
    <h2>配置生成器</h2>
    <div>
      <div class="row">

        <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3">
          <select v-model="distro" class="form-control">
            <option version="ubuntu">ubuntu</option>
            <option version="kali">kali</option>
            <option version="npm">npm</option>
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
    <h3>{{user(distro)}}</h3>
  </div>
</template>

<script>
  export default {
    name: 'confGen',
    methods: {
      user(dist) {
        if (dist === 'npm') {
          return '加入#~/.npmrc';
        } else if (dist === 'ubuntu' || dist === 'kali') {
          return '替换/etc/apt/sources.list';
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

registry=http://mirror.sdu.edu.cn/npm/`;
        }
        return st;
      },
    },

    data() {
      return {
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