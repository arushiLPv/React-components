import React from "react";

function AdditionOfAccounts() {
  return (
    <div class="card-body">
      <div class="d-block d-xl-flex align-items-center row">
        <div class="text-xl-center d-flex align-items-center justify-content-xl-center mb-3 mb-xl-0 col-xl-5">
          <div class="icon icon-shape icon-md icon-shape-tertiary rounded me-4 me-sm-0">
           
          </div>
          <div class="d-sm-none">
            <h5>Revenue</h5>
            <h3 class="mb-1">$43,594</h3>
          </div>
        </div>
        <div class="px-xl-0 col-xl-7 col-12">
          <div class="d-none d-sm-block">
            <h5>Revenue</h5>
            <h3 class="mb-1">$43,594</h3>
          </div>
          <small>
            Feb 1 - Apr 1,{" "}
            
            WorldWide
          </small>
          <div class="small mt-2">
            {/* <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="angle-up"
              class="svg-inline--fa fa-angle-up fa-w-10 text-success me-1"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 320 512"
            > */}
              {/* <path
                fill="currentColor"
                d="M177 159.7l136 136c9.4 9.4 9.4 24.6 0 33.9l-22.6 22.6c-9.4 9.4-24.6 9.4-33.9 0L160 255.9l-96.4 96.4c-9.4 9.4-24.6 9.4-33.9 0L7 329.7c-9.4-9.4-9.4-24.6 0-33.9l136-136c9.4-9.5 24.6-9.5 34-.1z"
              ></path>
            </svg> */}
            <span class="text-success fw-bold">28.4%</span> Since last month
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdditionOfAccounts;
