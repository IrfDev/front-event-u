<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <navbar-brand
      text="MediumClone"
    />

    <navbar-toggler
      data-target="navbar"
      aria-controls="#navbar"
      aria-label="navbar"
      @click="toggleCollapse"
    />

    <navbar-collapse
      id="navbar"
      :active="active"
    >
      <navbar-nav>
        <navbar-nav-item
          :active="$route.path === '/'"
        >
          <navbar-nav-link
            text="All posts"
            label="go to home page with all posts"
            to="/"
          />
        </navbar-nav-item>
        <navbar-nav-item
          :active="$route.path === '/new-post'"
        >
          <navbar-nav-link
            text="New post"
            label="go to new post page"
            to="/new-post"
          />
        </navbar-nav-item>
      </navbar-nav>
    </navbar-collapse>
  </nav>
</template>

<script>
import NavbarBrand from './NavbarBrand'
import NavbarToggler from './NavbarToggler'
import NavbarCollapse from './NavbarCollapse'

import NavbarNav from './NavbarNav'
import NavbarNavItem from './NavbarNavItem'
import NavbarNavLink from './NavbarNavLink'

export default {
  name: 'Navbar',
  components: {
    NavbarBrand,
    NavbarToggler,
    NavbarCollapse,
    NavbarNav,
    NavbarNavItem,
    NavbarNavLink
  },
  data () {
    return {
      active: false
    }
  },
  methods: {
    toggleCollapse () {
      this.active = !this.active
    }
  }
}
</script>

<style scoped>
</style>
