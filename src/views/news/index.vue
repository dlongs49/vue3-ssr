<template>
  <div class="content">
    <div
        class="item"
        v-for="(item, index) in list"
        :key="index"
    >
      <div class="date">
        <div class="dmbox">
          <span class="day">{{ item.time[2] }}</span>
          <span class="mon">{{ item.time[1] }}月</span>
        </div>
        <div class="line"></div>
      </div>
      <div class="item_img">
        <img  alt=""/>
      </div>
      <div class="item_txt">
        <h5>{{ item.Name }}</h5>
        <div class="txt">
          {{
            item.Title
          }}<a class="detail"
               href="javascript:void(0)"
        >详细信息>></a
        >
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {ref} from 'vue'
const list = ref([])

</script>

<style lang="less" scoped>
  .content {
    width: 1200px;
    margin: 0 auto;
    margin-bottom: 76px;

    .item {
      display: flex;
      margin-bottom: 45px;
      cursor: pointer;

      .date {
        display: flex;

        .dmbox {
          text-align: center;

          span {
            display: block;
          }

          .day {
            margin-top: -10px;
            font-size: 40px;
            font-weight: 800;
            color: #222222;
          }

          .mon {
            font-size: 18px;
            font-weight: 500;
            color: #999999;
          }
        }

        .line {
          margin-left: 20px;
          width: 19px;
          height: 5px;
          background: #91763e;
        }
      }

      .item_img {
        width: 220px;
        height: 160px;
        background: #e0e0e0;
        margin-left: 50px;
        overflow: hidden;

        img {
          transition: 0.3s;
        }

        &:hover img {
          transform: scale(1.06);
        }
      }

      .item_txt {
        width: 790px;
        margin-left: 50px;

        h5 {
          font-size: 20px;
          font-weight: 500;
          color: #333;
          margin-top: 25px;
          margin-bottom: 20px;
          transition: 0.3s;

          &:hover {
            color: #ad8637;
          }
        }

        .txt {
          font-size: 14px;
          font-weight: 400;
          color: #666;
          line-height: 26px;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;

          .detail {
            color: #ad8637;
          }
        }
      }
    }
  }
</style>
