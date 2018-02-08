<template>
  <svg
    :width="size"
    :height="size"
  >
    <g
      :class="$style.viz"
      :transform="transform"
    />
  </svg>
</template>

<style module>
  .viz {}
</style>

<script>

export default {
  name: 'sunburst',
  props: {
		padding: {
			type: Object,
			default: () => ({
				left: 20,
				right: 20,
				top: 20,
				bottom: 20,
			})
		},
		size: {
			type: Number,
			default: () => 960
		},
		data: {
			type: Array,
			default: () => []
		}
  },
  computed: {
    transform: function () {
      return `translate(${this.padding.left}, ${this.padding.top})`
    }
  },
  mounted() {
    this.render()
  },
  methods: {
    render() {

    }
  }
}
</script>
