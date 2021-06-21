<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <a href="#" class="navbar-brand">
        <router-link to="/"><img src="../assets/icon-left-font-monochrome-black.svg" alt="logo groupmania" class="col-10 col-lg3"/></router-link>
      </a>
      <button
        class="navbar-toggler mt-3 mt-lg-0"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <input
          type="text"
          class="mx-lg-5 my-4 my-lg-0"
          size="45"
          placeholder="Rechercher"/>
        <ul class="navbar-nav ml-5">
          <li class="nav-item">
            <button type="button" class="btn btn-outline-primary rounded-pill mx-lg-2 my-2 my-lg-0">
              <router-link to="/login">Connection</router-link>
            </button>
          </li>
          <li class="nav-item">
            <button type="button" class="btn btn-outline-primary rounded-pill" >
              <router-link to="/signup">Inscription</router-link>
            </button>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>


<script>

export default {
  name: 'MonHeader',
  data(){
    return{
      loginUsername: '',
      loginPassword: ' '
    }
    
  }
}
</script>
