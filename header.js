$("#header").append(`

      <div id="myModalObj" class="modal fade" role="dialog">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <button type="button" class="close" data-dismiss="modal">&times;</button>
              <h4 class="modal-title">Objective</h4>
            </div>
            <div class="modal-body">
              <p>Some text in the modal.</p>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
 

      <div id="myModalPraise" class="modal fade" role="dialog">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <button type="button" class="close" data-dismiss="modal">&times;</button>
              <h4 class="modal-title">Praise</h4>
            </div>
            <div class="modal-body">
              <p>Some text in the modal.</p>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>


<div>
<i class="fas fa-info-circle fa-4x header-icon-position" ></i>
  <div class="row justify-content-end align-items-center py-2">
  <div>
    <div class="btn-group btn-group-sm bg-warning button-create">
      <a class="btn " data-toggle="dropdown" href="#">
        <i class="fas fa-plus fsize-10"></i> Create
        <span class="caret"></span>
      </a>
      <ul class="dropdown-menu">
      <button class="modal-button" data-toggle="modal" data-target="#myModalObj"><i class="fas fa-bullseye px-2"></i>Objective</button>                 
      <button class="modal-button" data-toggle="modal" data-target="#myModalPraise"><i class="fas fa-award px-2"></i>Praise</button>
      <button class="modal-button"><i class="fas fa-pencil-alt px-2"></i>Private Note</button>
      <button class="modal-button"><i class="fas fa-bars px-2"></i>Feedback</button>
      <button class="modal-button"><i class="far fa-comments px-2"></i>1:1 Meeting</button>
      <button class="modal-button"><i class="far fa-user px-2"></i>Feedback Request</button>
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
</div>

`);
