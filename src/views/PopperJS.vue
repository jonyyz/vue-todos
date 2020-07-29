<template>
  <div>
    <div
      id="tooltipTest"
      ref="tooltipTest"
      @mouseover="showTooltip = true"
      @mouseleave="showTooltip = false"
    >
      Hover over me for some tool tippage!
    </div>
    <div
      id="tooltip"
      ref="tooltip"
      :class="{ hideTooltip: !showTooltip }"
    >
      I am a helpful tooltip!
    </div>
  </div>
</template>

<script>
import { createPopper } from "@popperjs/core";

export default {
  name: "PopperJS",
  data: () => ({
    showTooltip: true
  }),
  mounted() {
    this.$nextTick(() => {
      const { tooltipTest, tooltip } = this.$refs;

      this._popperInstance = createPopper(tooltipTest, tooltip, {
        placement: "bottom"
      });

      this.showTooltip = false;
    });
  },
  beforeDestroy() {
    this._popperInstance.destroy();
    this._popperInstance = null;
  }
};
</script>

<style lang="scss" scoped>
#tooltipTest {
  display: inline;
  border-bottom: dotted 1px black;
  cursor: help;
}

.hideTooltip {
  display: none;
}
</style>
