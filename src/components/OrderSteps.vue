<template>
    <div class="container bg-light rounded-5 px-6 py-3 px-lg-12 px-xl-15">
        <div class="d-flex justify-content-center gap-1 gap-414-2 gap-md-6 gap-lg-12">
            <div class="d-flex align-items-center gap-2 gap-lg-4">
                <i :class="{ 'text-dark-secondary': currentProgress >= 1}" class="bi bi-check-circle-fill"></i>
                <span class="span-lh-ls">確認品項</span>
            </div>
            <i class="bi bi-chevron-right"></i>
            <div class="d-flex align-items-center gap-2 gap-lg-4 text-gray">
                <i :class="{ 'text-dark-secondary': currentProgress >= 2}" class="bi bi-check-circle-fill"></i>
                <span :class="{ 'text-black': currentProgress >= 2}" class="span-lh-ls text-gray">填寫訂單</span>
            </div>
            <i class="bi bi-chevron-right"></i>
            <div class="d-flex align-items-center gap-2 gap-lg-4 text-gray">
                <i :class="{ 'text-dark-secondary': currentProgress >= 3}" class="bi bi-check-circle-fill"></i>
                <span :class="{ 'text-black': currentProgress >= 3}" class="span-lh-ls">預購結果</span>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    props: {
        currentProgress: Number,
    }
};
</script>