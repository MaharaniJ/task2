import React from 'react';


function Card(props){
  return  <div class="col-lg-4">
  <div class="card mb-5 mb-lg-0">
    <div class="card-body">
      <h5 class="card-title text-muted text-uppercase text-center">{props.data.plan}</h5>
      <h6 class="card-price text-center">${props.data.price}<span class="period">/month</span></h6>
      <hr />
      <ul class="fa-ul">
        <li class={props.data.usersEnabler?"":"text-muted"}><span class="fa-li"><i class={props.data.usersEnabler?"fas fa-check":"fas fa-times"}></i></span>{props.data.users}</li>
        <li class={props.data.storageEnabler?"":"text-muted"}><span class="fa-li"><i class={props.data.storageEnabler?"fas fa-check":"fas fa-times"}></i></span>{props.data.storage}</li>
        <li class={props.data.publicprojectEnabler?"":"text-muted"}><span class="fa-li"><i class={props.data.publicprojectEnabler?"fas fa-check":"fas fa-times"}></i></span>{props.date.publicproject}</li>
        <li class={props.data.communityaccessEnabler?"":"text-muted"}><span class="fa-li"><i class={props.data.communityaccessEnabler?"fas fa-check":"fas fa-times"}></i></span>{props.data.communityaccess}</li>
        <li class={props.data.provideprojectEnabler?"":"text-muted"}><span class="fa-li"><i class={props.data.provideprojectEnabler?"fas fa-check":"fas fa-times"}></i></span>{props.data.provideproject}</li>
        <li class={props.data.phonesupportEnabler?"":"text-muted"}><span class="fa-li"><i class={props.data.phonesupportEnabler?"fas fa-check":"fas fa-times"}></i></span>{props.data.phonesupport}</li>
        <li class={props.data.subdomainEnabler?"":"text-muted"}><span class="fa-li"><i class={props.data.subdomainEnabler?"fas fa-check":"fas fa-times"}></i></span>{props.data.subdomain}
        </li>
        <li class={props.data.statusreportEnabler?"":"text-muted"}><span class="fa-li"><i class={props.data.statusreportEnabler?"fas fa-check":"fas fa-times"}></i></span>{props.data.statusreport}
          </li>
      </ul>
      <div class="d-grid">
        <a href="windows location" class="btn btn-primary text-uppercase">Button</a>
      </div>
    </div>
  </div>
</div>

} 
export default Card;