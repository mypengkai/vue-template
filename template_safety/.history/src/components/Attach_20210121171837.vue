<template>
  <div class="att_main">
    <div class="att_num_tip">
      <span>上传附件:</span>
      <span>{{selectedMediaNum}}/{{mediaLength}}</span>
    </div>
    <div class="att_con">
      <div class="att_item" v-for="(item, index) in attachList" :key="index">
        <img v-if="item[filePath]" class="att_img" :src="item[filePath]" />
        <img v-if="!readonly" class="att_del" @click="delImg(index)" src="@/assets/del.png" />
      </div>
      <div class="att_item" v-show="attachList.length < mediaLength && !readonly" @click="add">
        <img class="att_img" src="@/assets/tianjia.png" />
      </div>
    </div>

    <template>
      <van-action-sheet :actions="myItemsOnlyImage" v-model="showAction" cancel-text="取消" @select="onSelect"></van-action-sheet>
    </template>
  </div>
</template>

<script>
import { openCamera } from "@/units/camera";
import getUrl from "../api/baseUrl";
let task = null;
export default {
  data() {
    return {
      showAction: false,
      myItemsOnlyImage: [{ name: "拍照",type:'img' }, { name: "从相册中选" ,type:'photo'}],
      showVideo: false,
      selectedMediaNum: 0,
      task: ""
    };
  },
  props: {
    attachList: {
      type: Array
    },
    readonly: {
      type: Boolean
    },
    file: {
      type: String,
      default: "file"
    },
    filePath: {
      type: String,
      default: "filePath"
    },
    mediaLength: {
      type: Number,
      default: 3
    },
    //文件上传路径
    uploadFilePath: {
      type: String,
      require: true,
      default: "/safetyPatrol/pictureUpload"
    },
    uploadFileOption: {
      type: String
    }
  },
  methods: {
    delImg(index) {
      this.selectedMediaNum--;
      this.attachList.splice(index, 1);
    },
    add() {
      this.showAction = true;
    },
    onSelect(item) {
      if (item.type === "img") {
        this.takePhoto();
        this.showAction = false;
      } else if (item.name == "从相册中选") {
        this.selectAlbum();
        this.showAction = false;
      }
    },

    //拍照
    takePhoto() {
      openCamera(
        "cameraImg",
        this.mediaLength - this.selectedMediaNum,
        (state, file, path) => {
          if (state == "1") {
            this.uploadFile(path);
            let newFile = {};
            newFile[this.file] = file;
            newFile[this.filePath] = path;
            newFile["isNew"] = true;
            newFile["state"] = false;
            if (this.selectedMediaNum > this.mediaLength) {
              plus.nativeUI.toast("多媒体资源超出" + this.mediaLength);
            } else {
              this.selectedMediaNum++;
            }
            this.attachList.push(newFile);
          }
        }
      );
    },
    //从相册中选
    selectAlbum() {
      openCamera(
        "selectImg",
        this.mediaLength - this.selectedMediaNum,
        (state, file, path) => {
          if (state == "1") {
            this.uploadFile(path);
            let newFile = {};
            newFile[this.file] = file;
            newFile[this.filePath] = path;
            newFile["isNew"] = true;
            newFile["state"] = false;
            if (this.selectedMediaNum > this.mediaLength) {
              plus.nativeUI.toast("多媒体资源超出" + this.mediaLength);
            } else {
              this.selectedMediaNum++;
            }
            this.attachList.push(newFile);
          }
        }
      );
    },


    //文件上传
    uploadFile(path) {
      //开始上传
      var url = getUrl.baseUrl + this.uploadFilePath;
      task = plus.uploader.createUpload(
        url,
        { method: "POST", blocksize: 204800, priority: 100 },
        (upload, status) => {
          if (status === 200) {
            this.$emit("uploadCallback", upload.responseText);
            this.attachList[this.attachList.length - 1].state = true;
          }
        }
      );
      task.addFile(path, { key: "file" });
      // 设置自定义数据头
      task.setRequestHeader("X-AUTH-TOKEN", this.$store.state.token);
      task.addData("type", this.uploadFileOption);
      task.start(); // 开始上传
    }
  }
};
</script>

<style scoped>
.att_main {
  background-color: #fff;
}
.att_con {
  overflow: hidden;
  padding-top: 10px;
}
.att_num_tip {
  line-height: 20px;
  font-size: 14px;
  color: #555555;
  display: flex;
  justify-content: space-between;
  padding: 0 0.4rem;
}
.att_item {
  width: 25%;
  float: left;
  text-align: center;
  position: relative;
  margin: 0 8px 15px 8px;
  border-radius: 5px;
}
.att_img {
  width: 65px;
  height: 65px;
  margin: 0 auto;
}
.att_del {
  width: 20px;
  position: absolute;
  top: -8px;
  right: 50%;
  margin-right: -40px;
  background-color: #fff;
  border-radius: 20px;
}
</style>
