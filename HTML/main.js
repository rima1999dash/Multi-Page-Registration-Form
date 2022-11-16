const steps = Array.from(document.querySelectorAll("form .step"));
const nextBtn = document.querySelectorAll("form .next-btn");
const prevBtn = document.querySelectorAll("form .previous-btn");
const form = document.querySelector("form");
const email = document.getElementById("email")

const realfilebtn1 = document.getElementById("real-file1")
const custombtn1 = document.getElementById("custom-button1")
const customtext1 = document.getElementById("cusstom-text1")

const realfilebtn2 = document.getElementById("real-file2")
const custombtn2 = document.getElementById("custom-button2")
const customtext2 = document.getElementById("cusstom-text2")

const realfilebtn3 = document.getElementById("real-file3")
const custombtn3 = document.getElementById("custom-button3")
const customtext3 = document.getElementById("cusstom-text3")

const realfilebtn4 = document.getElementById("real-file4")
const custombtn4 = document.getElementById("custom-button4")
const customtext4 = document.getElementById("cusstom-text4")

const inputtxtmobile = document.getElementById('phone-number-mobile').value;

const submiterr = document.getElementById('submit-error')

custombtn1.addEventListener("click",function(){
  realfilebtn1.click()
});

custombtn2.addEventListener("click",function(){
  realfilebtn2.click()
});

custombtn3.addEventListener("click",function(){
  realfilebtn3.click()
});

custombtn4.addEventListener("click",function(){
  realfilebtn4.click()
});


realfilebtn1.addEventListener("change",function () {
  if (realfilebtn1.value){
    customtext1.innerHTML = realfilebtn1.value.match(/[\/\\]([\w\d\s\.\-\(\)]+)$/)[1];
  } else{
    customtext1.innerHTML = "No File Choosen";
  }
  let files = realfilebtn1.files;
  if (files.length > 0){
    if(files[0].size > 4 * 1024 * 1024){
      customtext1.innerHTML = "File size is more then 4MB";
    }
  }
  regex = new RegExp('[^.]+$');
  extension = realfilebtn1.value.match(regex);
  if (!(extension == "pdf" || extension == "docs" || extension == "doc" || extension == "jpg" || extension == "jpeg")){
    customtext1.innerHTML = "Incorrect File type, please upload a valid image or DOC or PDF file";
  }
});

realfilebtn2.addEventListener("change",function () {
  if (realfilebtn2.value){
    customtext2.innerHTML = realfilebtn2.value.match(/[\/\\]([\w\d\s\.\-\(\)]+)$/)[1];
  } else{
    customtext2.innerHTML = "No File Choosen";
  }
  let files = realfilebtn2.files;
  if (files.length > 0){
    if(files[0].size > 4 * 1024 * 1024){
      customtext2.innerHTML = "File size is more then 4MB";
    }
  }
  regex = new RegExp('[^.]+$');
  extension = realfilebtn2.value.match(regex);
  if (!(extension == "pdf" || extension == "docs" || extension == "doc" || extension == "jpg" || extension == "jpeg")){
    customtext2.innerHTML = "Incorrect File type, please upload a valid image or DOC or PDF file";
  }
});

realfilebtn3.addEventListener("change",function () {
  if (realfilebtn3.value){
    customtext3.innerHTML = realfilebtn3.value.match(/[\/\\]([\w\d\s\.\-\(\)]+)$/)[1];
  } else{
    customtext3.innerHTML = "No File Choosen";
  }
  let files = realfilebtn3.files;
  if (files.length > 0){
    if(files[0].size > 4 * 1024 * 1024){
      customtext3.innerHTML = "File size is more then 4MB";
    }
  }
  regex = new RegExp('[^.]+$');
  extension = realfilebtn3.value.match(regex);
  if (!(extension == "pdf" || extension == "docs" || extension == "doc" || extension == "jpg" || extension == "jpeg")){
    customtext3.innerHTML = "Incorrect File type, please upload a valid image or DOC or PDF file";
  }
});

realfilebtn4.addEventListener("change",function () {
  if (realfilebtn4.value){
    customtext4.innerHTML = realfilebtn4.value.match(/[\/\\]([\w\d\s\.\-\(\)]+)$/)[1];
  } else{
    customtext4.innerHTML = "No File Choosen";
  }
  let files = realfilebtn4.files;
  if (files.length > 0){
    if(files[0].size > 4 * 1024 * 1024){
      customtext4.innerHTML = "File size is more then 10MB";
    }
  }
  regex = new RegExp('[^.]+$');
  extension = realfilebtn4.value.match(regex);
  if (!(extension == "pdf" || extension == "docs" || extension == "doc" || extension == "jpg" || extension == "jpeg")){
    customtext4.innerHTML = "Incorrect File type, please upload a valid image or DOC or PDF file";
  }
});

nextBtn.forEach((button) => {
  button.addEventListener("click", () => {
	  if (EmailIdValidation() && phonenumber()){
		  changeStep("next");
	  }
    
    
  });
});
prevBtn.forEach((button) => {
  button.addEventListener("click", () => {
    changeStep("prev");
  });
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const inputs = [];
  form.querySelectorAll("input").forEach((input) => {
    const { name, value } = input;
    if (value.length == 0) {
      submiterr.innerHTML = "Please fill all the mendotory fields";
      return false
    } else {
		if (name == 'gender'){
        if ((input.checked) == true){
          inputs.push({ name, value });
        } else {
			return false
        }
    } else{
      inputs.push({ name, value });
    }
	}
  
  });
  console.log(inputs);

  form.reset();
  let index = 0;
  const active = document.querySelector(".active");
  index = steps.indexOf(active);
  steps[index].classList.remove("active");
  steps[0].classList.add("active");
});

function changeStep(btn) {
  let index = 0;
  const active = document.querySelector(".active");
  index = steps.indexOf(active);
  steps[index].classList.remove("active");
  if (btn === "next") {
    index++;
  } else if (btn === "prev") {
    index--;
  }
  steps[index].classList.add("active");
}

function EmailIdValidation(){

  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(document.getElementById('email').value))
  {
    return (true)
  }
    alert("You have entered an invalid email address!")
    return (false)
}

function phonenumber(){
  var phoneno1 = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(document.getElementById('phone-number-mobile').value)
  if(phoneno1)
        {
      return (true)
        }
      else
        {
          alert("You have entered an invalid phone number!")
        return (false)
        }
}
