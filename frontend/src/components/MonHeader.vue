<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <a href="#" class="navbar-brand">
        <img
          src="../assets/icon-left-font-monochrome-black.svg"
          alt="logo groupmania"
          class="col-10 col-lg3"
        />
      </a>
      <button
        class="navbar-toggler mt-3 mt-lg-0"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <input
          type="text"
          class="mx-lg-5 my-4 my-lg-0"
          size="45"
          placeholder="Rechercher"
          v-model="recherche"
        />
        <ul class="navbar-nav ml-5">
          <li class="nav-item">
            <button
              type="button"
              class="btn btn-outline-primary rounded-pill mx-lg-2 my-2 my-lg-0"
              data-bs-toggle="modal"
              data-bs-target="#modalConnection"
            >
              Connection
            </button>
          </li>
          <li class="nav-item">
            <button
              type="button"
              class="btn btn-outline-primary rounded-pill"
              data-bs-toggle="modal"
              data-bs-target="#modalInscription"
            >
              Inscription
            </button>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <!--- -----------------modal connection------------------------>
  <div
    class="modal fade"
    id="modalConnection"
    tabindex="-1"
    aria-labelledby="modalConnectionLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="modalConnectionLabel">Connectez-vous</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Fermer"
          ></button>
        </div>
        <div class="modal-body">...</div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            Annuler
          </button>
          <button
            type="button"
            class="btn btn-primary"
            data-bs-dismiss="modal"
            @click="connection"
          >
            Connection
          </button>
        </div>
      </div>
    </div>
  </div>

  <!--- -----------------modal inscription------------------------>
  <div
    class="modal fade"
    id="modalInscription"
    tabindex="-1"
    aria-labelledby="modalInscriptionLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="modalInscriptionLabel">Inscrivez-vous</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Fermer"
          ></button>
        </div>
        <div class="modal-body">...</div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            Annuler
          </button>
          <button
            type="button"
            class="btn btn-primary"
            data-bs-dismiss="modal"
            @click="inscription"
          >
            Inscription
          </button>
        </div>
      </div>
    </div>
  </div>
  `
</template>