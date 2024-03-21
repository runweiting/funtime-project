<template>
    <div class="rounded-5 p-5" style="border: 5px dotted #E7EFFF;">
        <h3 class="fs-5 mb-10">集資進度</h3>
        <div class="w-100 px-8 pb-12">
            <div class="position-relative">
                <div class="progress" style="height: 5px;">
                    <div class="progress-bar bg-info-light" role="progressbar" style="width: 0%;" aria-valuenow="33.33" aria-valuemin="0" aria-valuemax="100">
                    </div>
                </div>
                <div class="position-absolute translate-middle z-index-8" style="top: 16px; left: 0.99%">
                    <div class="d-flex flex-column justify-content-center align-items-center gap-2">
                        <div :class="{ 'bg-info': this.currentProgress === 1 }" class="text-white rounded-circle position-relative"  style="width: 50px; height: 50px;">
                            <i class="bi bi-bag-check-fill fs-3 position-absolute top-50 start-50 translate-middle"></i>
                        </div>
                        <small class="text-dark-gray">加入預購</small>
                    </div>
                </div>
                <div class="position-absolute translate-middle z-index-8" style="top: 16px; left: 33.33%;">
                    <div class="d-flex flex-column justify-content-center align-items-center gap-2">
                        <div :class="{ 'bg-info': this.currentProgress === 2 }" class="text-white rounded-circle position-relative" style="width: 50px; height: 50px; background: #e9ecef;">
                            <i class="bi bi-buildings-fill fs-3 position-absolute top-50 start-50 translate-middle"></i>
                        </div>
                        <small class="text-dark-gray">集資成功</small>
                    </div>
                </div>
                <div class="position-absolute translate-middle z-index-8" style="top: 16px; left: 66.66%;">
                    <div class="d-flex flex-column justify-content-center align-items-center gap-2">
                        <div :class="{ 'bg-info': this.currentProgress === 3 }" class="text-white rounded-circle position-relative" style="width: 50px; height: 50px; background: #e9ecef;">
                            <i class="bi bi-alarm-fill fs-3 position-absolute top-50 start-50 translate-middle"></i>
                        </div>
                        <small class="text-dark-gray">通知付款</small>
                    </div>
                </div>
                <div class="position-absolute translate-middle z-index-8" style="top: 16px; left: 98.99%;">
                    <div class="d-flex flex-column justify-content-center align-items-center gap-2">
                        <div :class="{ 'bg-info': this.currentProgress === 4 }" class="text-white rounded-circle position-relative" style="width: 50px; height: 50px; background: #e9ecef;">
                            <i class="bi bi-box-seam-fill fs-3 position-absolute top-50 start-50 translate-middle"></i>
                        </div>
                        <small class="text-dark-gray">出貨</small>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            currentProgress: 1,
        }
    }
}
</script>