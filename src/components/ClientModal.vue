<template>
  <div
    class="modal fade"
    id="client-checkin--modal"
    tabindex="-1"
    role="dialog"
    aria-labelledby="client-checkin--modalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <div class="modal-header--inner">
            <h5 class="modal-title" id="client-checkin--modalLabel">
              <i class="icon icon-user --green"></i> Client Check In
            </h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
        </div>
        <div class="modal-body">
          <div class="modal-body--inner">
            <div class="form-group">
              <label>Customer Phone or Email:</label>
              <input type="text" class="form-control" placeholder="Customer Phone or Email" />
            </div>
            <div class="form-group">
              <label>Customer Name:</label>
              <input type="text" class="form-control" placeholder="Customer Name" />
            </div>
            <div class="modal-buttons d-flex align-items-center justify-content-between">
              <button type="button" class="btn btn-link">Send to Multiple Clients</button>
              <button type="button" class="btn btn-success">Send a Review Invite</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
