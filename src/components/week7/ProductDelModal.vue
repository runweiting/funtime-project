<template>
  <!-- delModal -->
  <div
    class="modal fade modal-lg"
    tabindex="-1"
    aria-labelledby="delModalLabel"
    aria-hidden="true"
    ref="modal"
  >
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="delModalLabel">刪除商品</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <!-- 刪除商品 -->
          <div class="container-fluid">
            <div class="row">
              <div class="col-sm-8">
                <h5 class="fw-bold text-danger">
                  {{ tempProduct.title }}
                  <span class="badge bg-dark ms-2">{{
                    tempProduct.category
                  }}</span>
                </h5>
                <p>{{ tempProduct.description }}</p>
                <p>
                  <small class="text-muted">
                    原價: {{ tempProduct.origin_price }} / 售價:
                    {{ tempProduct.price }}
                  </small>
                </p>
              </div>
              <div class="col-sm-4">
                <img :src="tempProduct.imageUrl" class="img-fluid" />
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            取消
          </button>
          <button @click="deleteProduct(this.selectedProduct.id)" type="button" class="btn btn-danger">
            確認刪除
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'pinia';
import adminProductsStore from '@/stores/dashboard/adminProductsStore';
import modalMixin from '@/mixins/modalMixin';

export default {
  props: {
    tempProduct: Object,
  },
  mixins: [modalMixin],
  data() {
    return {
      selectedProduct: {},
    };
  },
  created() {
    // 初始化 tempProduct
    this.selectedProduct = {
      ...this.tempProduct,
    };
  },
  computed: {
    ...mapState(adminProductsStore, ['delModalOpen'])
  },
  watch: {
    tempProduct: {
      deep: true,
      handler(updateTempProduct) {
        this.selectedProduct = updateTempProduct;
      },
    },
    delModalOpen: {
      handler(newState) {
        // false 時，隱藏 modal
        if (!newState) {
          this.hideModal();
        }
      },
    },
  },
  methods: {
    ...mapActions(adminProductsStore, ['deleteProduct'])
  }
};
</script>