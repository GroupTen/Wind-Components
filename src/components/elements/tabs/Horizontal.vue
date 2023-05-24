<template>
  <div>
    <div class="sm:hidden">
      <select
        v-model="currentTab"
        aria-label="Selected tab"
        class="form-select block w-full"
      >
        <option
          v-for="(tab, index) in tabs"
          :key="index"
          :selected="currentTab === tab.name"
          :value="tab.name"
        >
          {{ tab.name }}
        </option>
      </select>
    </div>
    <div class="hidden sm:block">
      <div class="border-b border-gray-200">
        <nav
          :class="$attrs.alignment != null ? $attrs.alignment : null"
          class="-mb-px flex px-5 lg:px-8"
        >
          <WButtonsBase
            v-for="(tab, index) in tabs"
            :key="index"
            :type="value === tab.name ? 'tabSelected' : 'tab'"
            :icon="tab.icon != null ? tab.icon : null"
            @click.native="currentTab = tab.name"
          >
            <div class="flex items-center gap-1">
              <span>{{ tab.name }}</span>
              <svg
                v-show="tab.showAlert"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="w-4 h-4 fill-warning-700"
              >
                <path
                  fill-rule="evenodd"
                  d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
          </WButtonsBase>
        </nav>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    tabs: {
      type: Array,
      default() {
        return [];
      },
    },
    value: {
      type: String,
      required: false,
      default: "",
    },
    defaultTab: {
      type: String,
      required: false,
      default: "",
    },
  },
  data() {
    return {
      currentTab: this.defaultTab ? this.defaultTab : this.tabs[0].name,
    };
  },
  watch: {
    currentTab() {
      this.$emit("input", this.currentTab);
    },
  },
  created() {
    this.$emit("input", this.currentTab);
  },
};
</script>
