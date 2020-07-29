$("#header").append(`

<div class="modal fade" id="myModalObj" role="dialog">
<div class="modal-dialog modal-lg">
  <div class="modal-content">
    <div class="modal-header">
      <button type="button" class="close" data-dismiss="modal">
        &times;
      </button>       
    </div>
    <div class="modal-body col-12 row">
      <div class ="col-4 row pl-5 border-right">
        <h1 class="user-image-circle-blue-small text-white align-items-box-center small">MZ</h1>
        <p class="pl-1">Mirko Zoric</p>
      </div>
      <div class ="col-8 px-5">
        <h4>Select Cycle</h4>
        <h5><i class="fa fa-bullseye" aria-hidden="true"></i> Objective Cycle Q3/2020 Engineering Team</h5>
        <p>Please reflect on what you'd like to accomplish during this time period. 
          What outcomes can be measured to ensure that you'll have reached those goals?</p>
          <h5><i class="fa fa-bullseye" aria-hidden="true"></i> Objective Cycle Q2/2020 Engineering Team</h5>
          <p>Welcome to the objective setting cycle for Q2 2020. This is where you 
            get to agree with your manager on what you would like to achieve in the 
            last quarter of the year. As a recommendation, aim for a minimum 3 
            work/behavioral objectives that have tangible measurment against them.
          </p>
          <p class="py-2"> Of course, feel free to set more than 3 goals above, but be 
            realistic with your time and think about doing some things really well, not lots of 
            things poorly.
          </p>
          <p class="py-2">This is the objectives cycle for the time between 1/04/2019 and 
            30/06/2020.
          </p>
      </div>
    </div>  
  </div>
</div>
</div>
 

<div class="modal fade" id="myModalPraise" role="dialog">
<div class="modal-dialog">
  <div class="modal-content">
    <div class="modal-header">
      <h4>New Praise</h4>
      <button type="button" class="close" data-dismiss="modal">
        &times;
      </button>
    </div>
    <div class="modal-body">
      <div class="col-12 ">
        <div class="row">
          <i class="fas fa-ribbon fa-3x">
            <div class="dropdown float-right">
              <button class="btn btn-secondary dropdown-toggle bg-transparent border-0 text-black-50 align-self-center" 
              type="button" 
              id="dropdownMenuButton" 
              data-toggle="dropdown" 
              aria-haspopup="true" 
              aria-expanded="false">
                Select a Badge
              </button>
              <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <a class="dropdown-item" href="#">Action</a>
                <a class="dropdown-item" href="#">Another action</a>
                <a class="dropdown-item" href="#">Something else here</a>
              </div>
            </div>
          </i>
        </div>      
        <div class="row py-3">
          <i class="far fa-user fa-3x"></i>          
          <button type="button" class="btn bg-transparent text-black-50 btn-sm">Add a User</button>
          <button type="button" class="btn ml-auto">+</button>   
        </div>              
      </div>
    </div>
    <h5 class="text-black-50 pl-3">Great improvements this quarter</h5>
    <div class="modal-footer">
        <p class="mr-auto small">Description</p>
      <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"> </textarea>
      <i class="fas fa-globe text-black-50"> Public</i>
      <button type="button" class="btn-default bg-gray-light text-black-50 btn-sm">Praise</button>
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
