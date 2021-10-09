<template>
  <div class="mvs">
    <div class="menu">
      <div class="category-area d-flex align-center">
        <span>地区：</span
        ><category :categories="areas" @changeCategory="onChangeArea" />
      </div>
      <div class="category-type d-flex align-center">
        <span>类型：</span
        ><category :categories="types" @changeCategory="onChangeType" />
      </div>
      <div class="category-order d-flex align-center">
        <span>排序：</span
        ><category :categories="orders" @changeCategory="onChangeOrder" />
      </div>
    </div>
    <div class="mv-list">
      <el-row :gutter="8" class="flex-wrap" type="flex" justify="start">
        <el-col
          class="my-4 d-flex justify-center"
          :md="12"
          :lg="6"
          v-for="item in mvList"
          :key="item.id"
        >
          <!-- {{ item }} -->
          <card
            :imgUrl="item.imgUrl"
            :width="'240px'"
            :height="'160px'"
            :title="item.mvName"
            isLazy
          >
            <template v-slot:cover>
              <div class="card-cover cursor-pointer">
                <h3 class="title">播放量：{{ item.playCount }}</h3>
                <i class="icon el-icon-video-play"></i>
              </div>
            </template>
          </card>
        </el-col>
      </el-row>
    </div>
    <pagination
      class="text-center mt-4"
      :total="total"
      @nextClick="onChangePage"
      @prevClick="onChangePage"
      @currentChange="onChangePage"
    />
  </div>
</template>

<script>
import { freezeMany } from '@/utils/object'
import Category from '@/components/common/Category'
import { getMvs } from '@/api/mvs'
import Card from '@/components/common/Card'
import Pagination from '@/components/common/Pagination'

export default {
  name: 'mvs',
  components: {
    Category,
    Card,
    Pagination,
  },
  data() {
    const areas = [
      { tag: '全部', id: 0 },
      { tag: '内地', id: 1 },
      { tag: '港台', id: 2 },
      { tag: '欧美', id: 3 },
      { tag: '日本', id: 4 },
      { tag: '韩国', id: 5 },
    ]
    const types = [
      { tag: '全部', id: 0 },
      { tag: '官方版', id: 1 },
      { tag: '原生', id: 2 },
      { tag: '现场版', id: 3 },
      { tag: '网易出品', id: 4 },
    ]
    const orders = [
      { tag: '上升最快', id: 0 },
      { tag: '最新', id: 1 },
      { tag: '最热', id: 2 },
    ]
    freezeMany(areas, types, orders)
    return {
      areas,
      types,
      orders,
      currentArea: areas[0],
      currentType: types[0],
      currentOrder: orders[0],
      mvList: [],
      page: 0,
      limit: 12,
      total: 0,
    }
  },
  created() {
    this.onChangeStates()
  },
  methods: {
    onChangeOrder(newVal) {
      this.currentOrder = newVal
      // this.onChangeStates()
    },
    onChangeType(newVal) {
      this.currentType = newVal
      // this.onChangeStates(newVal)
    },
    onChangeArea(newVal) {
      this.currentArea = newVal
      // this.onChangeStates()
    },
    onChangeStates() {
      getMvs(
        this.currentArea.tag,
        this.currentType.tag,
        this.currentOrder.tag,
        this.page * this.limit,
        this.limit
      )
        .then(this._setData)
        .catch((e) => console.log(e))
    },
    onChangePage(page) {
      if (this.page != page - 1) {
        this.page = page - 1
      }
    },
    _setData(result) {
      // console.log('mvs - setData: ', result)
      if (result.total && this.total != result.total) {
        this.total = result.total
      }
      this.mvList = result.data
    },
  },
  watch: {
    currentArea() {
      this.onChangeStates()
    },
    currentType() {
      this.onChangeStates()
    },
    currentOrder() {
      this.onChangeStates()
    },
    page() {
      this.onChangeStates()
    },
  },
}
</script>

<style lang="scss" scoped>
.card-cover {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  overflow: hidden;

  .title {
    padding: 4px;
    margin-top: -40px;
    transition: all 1s;
    // background: var(--grey-color-1);
    background: rgba($color: #eee, $alpha: 0.6);
  }
  .icon {
    position: absolute;
    right: 0%;
    bottom: 18%;
    width: 50px;
    height: 50px;
    font-size: 30px;
    text-align: center;
    color: rgba($color: #fff, $alpha: 0.8);
    opacity: 0;
    transition: all 1s;
  }
  &:hover .title {
    margin-top: 0;
  }
  &:hover .icon {
    opacity: 1;
  }
}
</style>
