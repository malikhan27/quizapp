var divelement = document.getElementById("main-div");
console.log(divelement);

function windowchange() {
  divelement.innerHTML = `

<div class="mt-2 p-3" style="border-bottom: 1px solid rgba(116, 109, 109, 0.37);">
  <h1 style="display:Inline;" class="ms-5">WEB AND APP DEVELOPMENT </h1> <span> (2 Subjects) </span>
</div>

<div class="accordion w-75 accordion-flush mt-4" id="accordionFlushExample">
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
        HTML & CSS
      </button>
    </h2>
    <div id="flush-collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">
      <table class="table">
   <tbody class="fw-bold";>
     <tr>
       <td>QUIZ NAME</td>
       <td colspan="3">HTLM & CSS</td>
     </tr>
     <tr>
       <td>TOTAL QUESTIONS</td>
       <td colspan="3">10</td>
     </tr>
     <tr>
       <td>TIME</td>
       <td colspan="3">20 MINUTES</td>
     </tr>
     <tr>
       <td>PASSING MARKS</td>
       <td colspan="3">70%</td>
     </tr>
    </tbody>
   </table>
   <a class="btn btn-primary" href=""></a>
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
        Javascript
      </button>
    </h2>
    <div id="flush-collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">
      <table class="table" style="color:"#350661";">
   <tbody class="fw-bold" >
     <tr>
       <td>QUIZ NAME</td>
       <td colspan="3">JAVASCRIPT</td>
     </tr>
     <tr>
       <td>TOTAL QUESTIONS</td>
       <td colspan="3">10</td>
     </tr>
     <tr>
       <td>TIME</td>
       <td colspan="3">20 MINUTES</td>
     </tr>
     <tr>
       <td>PASSING MARKS</td>
       <td colspan="3">70%</td>
     </tr>
    </tbody>
   </table>
   <a class="btn btn-danger" style="background-color:"#350661"!important; color:"white !important"" href="">Join Now</a>
      </div>
    </div>
  </div>
 
`;
}
