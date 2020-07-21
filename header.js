$("#header").append(`        
<div class="row justify-content-end align-items-center py-2">
  <div>
    <div class="btn-group btn-group-sm bg-warning button-create">
      <a class="btn " data-toggle="dropdown" href="#">
        <i class="fas fa-plus fsize-10"></i> Create
        <span class="caret"></span>
      </a>
      <ul class="dropdown-menu">
      <button
      type="button"
      class="btn btn-secondary bg-white text-black-50"
      data-toggle="modal"
      data-target="#myModal"
    >
      Open Modal
    </button>
    <div class="modal fade" id="myModal" role="dialog">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal">
              &times;
            </button>
            <h4 class="modal-title">Modal Header</h4>
          </div>
          <div class="modal-body">
            <p>Some text in the modal.</p>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-default"
              data-dismiss="modal"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>>
        <li><i class="fas fa-award"></i> Praise</li>
        <li><i class="fas fa-pencil-alt"></i> Private Note</li>
        <li><i class="fas fa-bars"></i> Feedback</li>
        <li><i class="far fa-comments"></i> 1:1 Meeting</li>
        <li><i class="fas fa-user-cog"></i> Feedback Request</li>
      </ul>
    </div>            
  </div>
  <div>
    <div class="input-group input-group-sm px-2">
      <div class="input-group-prepend">
        <span class="input-group-text bg-light" id="basic-addon1"><i class="fas fa-search-location"></i></span>
      </div>
      <input type="text" class="form-control" placeholder="Jump to..." aria-label="Username" aria-describedby="basic-addon1">
    </div>     
  </div>
  <div>
     <i class="far fa-bell fa-lg pr-2"></i>
  </div>
  <div>
      <a class="btn btn-sm username" href="account.html">Username</a>
  </div>
</div>
`);
