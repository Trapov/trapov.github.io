<template>
<div :class="cssClasses">
  <slot> </slot>
</div>  
</template>

<script>
export default {
  props: {
    column: Boolean,
    fluid: Boolean,
    row: Boolean,
    justifyContent: String,
    columnIfMd: Boolean,
    rowIfMd: Boolean,
    rowIfSm: Boolean,
    columnIfSm: Boolean,
    alignItems: String,
    size: Number
  },
  data() {
    return {
      cssClasses: []
      
    }
  },
  mounted() {
    this.cssClasses = this.computeCssClasses();
  },
  methods: {
    computeCssClasses() {
      const cssClasses = [];

      if(this.$props.column) {
        cssClasses.push('column');
      }
      if(this.$props.row) {
        cssClasses.push('row');
      }
      if(this.$props.columnIfMd) {
        cssClasses.push('column-if-md');
      }
      if(this.$props.rowIfMd) {
        cssClasses.push('row-if-md');
      }
      if(this.$props.rowIfSm) {
        cssClasses.push('row-if-sm');
      }
      if(this.$props.columnIfSm) {
        cssClasses.push('column-if-sm');
      }
      if(this.$props.fluid) {
        cssClasses.push('container')
      }
      if(this.$props.justifyContent) {
        switch (this.$props.justifyContent) {
          case 'center':
            cssClasses.push('justify-content-center');
            break;
          default:
            break;
        }
      }
      if(this.$props.alignItems) {
        console.log(this.$props.alignItems);

        switch (this.$props.alignItems) {
          case 'center':
            cssClasses.push('align-items-center');
            break;
          default:
            break;
        }
      }
      if(this.$props.size) {
          cssClasses.push(`item-${this.size}`);
      }
      return cssClasses;
    }
  }  
}
</script>

<style scoped>

.container.column {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
}

.container.align-items-center {
  align-items: center;
}

.container.justify-content-center {
  justify-content: center;
}

@media screen and (max-width: 950px) {
  .container {
    padding: 4px 8px 0 7px !important;
  }
}
@media screen and (min-width: 950px) {
  .container {
    padding: 20px;
    display: flex;
  }

  .container .item-2 {
    flex: 2;
  }
  .container .item-6 {
    flex: 6;
  }
}

@media screen and (max-width: 1250px) {
  .column-if-md {
    flex-flow: column !important;
  }
  .row-if-md {
    flex-flow: row !important;
  }
}
</style>