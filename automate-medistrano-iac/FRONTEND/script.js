let btn = document.querySelectorAll("#plus");
// let addDetails =document.querySelector("block")
for (let i = 0; i < btn.length; i++) {
  btn[i].addEventListener ("click", btnClass);
}

//  let minusBtn = document.querySelectorAll(".minus")
//  for (let i = 0; i < minusBtn.length; i++) {
    
//     minusBtn[i].addEventListener("click", minusBtnd);
    
//   }
  
//   function minusBtnd(e){
//         console.log(e)
        
//             //e.target.parent.remove();
        
//   }
 

function btnClass(e) {
    let min = false
    classBtn=e.target.classList.value
    if(classBtn=="s3"){
        min=true
        let addBlk = document.createElement("div");
        addBlk.classList.add("rdata");
        addBlk.innerHTML = `<div class="resource-right-item"><button onclick="newElement()" class="minus">-</button>aws_s3_bucket</div>
        <div class="info1">
            <label "><b>S3 Name:</b></label><br>
            <input type="text"   ><br>
            <label ><b>S3 Region:</b></label><br>
            <input type="text"  ><br>
        </div>`;
        document.querySelector(".block").append(addBlk);

    }
    else if(classBtn=="iam"){
        min=true
        let addBlk = document.createElement("div");
        addBlk.classList.add("rdata");
        addBlk.innerHTML = `<div class="resource-right-item"><button onclick="newElement()" class="minus">-</button>aws_iam_role</div>
        <div class="info1">
            <label "><b>IAM Name:</b></label><br>
            <input type="text"   ><br>
            <label ><b>IAM Region:</b></label><br>
            <input type="text"  ><br>
        </div>`;
        document.querySelector(".block").append(addBlk);
    }
    else if(classBtn=="cloudwatch"){
        min=true
        let addBlk = document.createElement("div");
        addBlk.classList.add("rdata");
        addBlk.innerHTML = `<div class="resource-right-item"><button  onclick="newElement()" class="minus">-</button>aws_cloudwatch_log_group</div>
        <div class="info1">
            <label "><b>Cloudwatch Name:</b></label><br>
            <input type="text"   ><br>
            <label ><b>Cloudwatch Region:</b></label><br>
            <input type="text"  ><br>
        </div>`;
        document.querySelector(".block").append(addBlk);
    }
    else if(classBtn=="api"){
        min=true
        let addBlk = document.createElement("div");
        addBlk.classList.add("rdata");
        addBlk.innerHTML = `<div class="resource-right-item"><button onclick="newElement()" class="minus">-</button>aws_api_gateway</div>
        
        <div class="info1">
            <label "><b>API gateway Name:</b></label><br>
            <input type="text"   ><br>
            <label ><b>API gateway Region:</b></label><br>
            <input type="text"  ><br>
        </div>`;
        document.querySelector(".block").append(addBlk);
    }
    else if(classBtn=="lambda"){
        min=true
        let addBlk = document.createElement("div");
        addBlk.classList.add("rdata");
        addBlk.innerHTML = `<div class="resource-right-item"><button onclick="newElement()" class="minus">-</button>aws_lambda_function</div>
        <div class="info1">
            <label "><b>Lambda Name:</b></label><br>
            <input type="text"   ><br>
            <label ><b>Lambda Region:</b></label><br>
            <input type="text"  ><br>
        </div>`;
        document.querySelector(".block").append(addBlk);
    }
    else{
        console.log("not there")
    }
    
    // else if(classBtn=="minus"){
    //     console.log("hey")
    // }
}


function newElement() {
    // var li = document.createElement("li");
    // var inputValue = document.getElementById("myInput").value;
    // var t = document.createTextNode(inputValue);
    // li.appendChild(t);
    // if (inputValue === '') {
    //   alert("You must write something!");
    // } else {
    //   document.getElementById("myUL").appendChild(li);
    // }
    // document.getElementById("myInput").value = "";
  
    // var span = document.createElement("SPAN");
    // var txt = document.createTextNode("\u00D7");
    // span.className = "close";
    // span.appendChild(txt);
    // li.appendChild(span);
  
    // for (i = 0; i < close.length; i++) {
    //   close[i].onclick = function() {
    //     var div = this.parentElement;
    //     div.style.display = "none";
    //   }
    // }
    
    element.remove(); 
    console.log("hiii")
  }