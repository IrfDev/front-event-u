<template>
  <div class="form-group">
    <label :for="id">
      {{ label }}
    </label>
    <input
      :id="id"
      :name="name"
      :type="type"
      :aria-describedby="ariaDescribedBy"
      :placeholder="placeholder"
      :required="required"
      v-model="value"
      class="form-control"
      @input="$emit('input', $event)"
      @change="$emit('change', $event)"
    >
    <small
      v-if="help"
      :id="`${id}-help`"
      class="form-text text-muted"
    >
      {{ help }}
    </small>
  </div>
</template>

<script>
const stringDefault = {
  type: String,
  default: ''
}

export default {
  name: 'FormInput',
  props: {
    id: {
      type: [Number, String],
      required: true
    },
    label: stringDefault,
    type: stringDefault,
    ariaDescribedBy: stringDefault,
    placeholder: stringDefault,
    help: stringDefault,
    name: stringDefault,
    required: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      value: null
    }
  }
}
</script>

<style scoped>
</style>
