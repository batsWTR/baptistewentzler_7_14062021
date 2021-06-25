<template>
  <form>
    <div class="d-flex align-items-center bg-primary text-white">
      <h6 class="modal-title mb-0" id="threadModalLabel">Nouveau post</h6>
    </div>
    <div class="modal-body">
      <div class="form-group">
        <label for="threadTitle">Title</label>
        <input
          type="text"
          class="form-control"
          id="threadTitle"
          placeholder="Enter title"
          autofocus=""
        />
      </div>
      <textarea
        class="form-control summernote"
        style="display: none"
      ></textarea>

      <div class="custom-file form-control-sm mt-3" style="max-width: 300px">
        <input
          type="file"
          class="custom-file-input"
          id="customFile"
          multiple=""
        />
        <label class="custom-file-label" for="customFile">Attachment</label>
      </div>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-light" data-dismiss="modal">
        Cancel
      </button>
      <button type="button" class="btn btn-primary">Post</button>
    </div>
  </form>
</template>


<script>
export default {
  name: "Create_post",
  components: {},
};
</script>