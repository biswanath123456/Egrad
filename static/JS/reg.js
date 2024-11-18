
const f = document.getElementsByTagName('form')[0];
const f1 = document.getElementsByTagName('form')[1];
const f2 = document.getElementsByTagName('form')[2];
var formValid = 0;
const personal = document.querySelector('#p');
const education = document.querySelector('#e');
const security = document.querySelector('#s');

const per = document.querySelector('#personal');
const ed = document.querySelector('#education');
const secure = document.querySelector('#security');

personal.classList.add('visit');

personal.addEventListener('click',()=>{
    per.style.display = 'block';
    ed.style.display = 'none';
    secure.style.display = 'none';
    personal.classList.add('visit');
    education.classList.remove('visit');
    security.classList.remove('visit');
})

education.addEventListener('click',()=>{
    per.style.display = 'none';
    ed.style.display = 'block';
    secure.style.display = 'none';
    personal.classList.remove('visit');
    education.classList.add('visit');
    security.classList.remove('visit');
})

security.addEventListener('click',()=>{
    per.style.display = 'none';
    ed.style.display = 'none';
    secure.style.display = 'block';
    personal.classList.remove('visit');
    education.classList.remove('visit');
    security.classList.add('visit');
})

const FNAME = document.querySelector('#fname');
const LNAME = document.querySelector('#lname');
const Address = document.querySelector('#address');
const dist = document.querySelector('#dist');
const state = document.querySelector('#state');
const pin = document.querySelector('#pin');

const Phone = document.querySelector("#phone");
const Email = document.querySelector('#email');

const e = document.getElementsByClassName('error');

function setError(input,errmsg,box){
    var p = document.getElementById(input);
    p.innerText = errmsg;
    box.style.borderColor = 'red';
}

function success(box){
    box.style.borderColor = 'green';
}

function clearError(){
    for(let item of e ){
        item.innerHTML='';
    }
}

function havespace(value){
    for(let i of value){
        if(i==' ')
            return true;
    }
    return false;
}

function havenum(value){
    for(let i of value){
        if(i == '1' || i == '2' ||i == '3' ||i == '4' ||i == '5' ||i == '6' ||i == '7' ||i == '8' ||i == '9' ||i == '0')
            return true;
    }
}

function haveSpecialChars(str) {
    const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    return specialChars.test(str);
}


f.addEventListener('submit',(event)=>{
    event.preventDefault();
    clearError();
    var valid = 0;
    const fnameval = FNAME.value.trim();
    if(fnameval == "")
        setError('er_fname','Enter your Name',FNAME);
    else if(fnameval.length < 3){
       setError('er_fname','Enter a valid Name',FNAME);
    }
    else if(havespace(fnameval)){
        setError('er_fname','There should be no space',FNAME);
    }
    else if(havenum(fnameval)){
        setError('er_fname','There should be no Digit',FNAME);
    }
    else if((haveSpecialChars(fnameval)))
    {
        setError('er_fname','There should be no Special Char.',FNAME);
    }
    else{
        success(FNAME);
        valid++;
    }

    const lnameval = LNAME.value.trim();
    if(lnameval == "")
        setError('er_lname','Enter your Name',LNAME);
    else if(lnameval.length < 3){
       setError('er_lname','Enter a valid Name',LNAME);
    }
    else if(havespace(lnameval)){
        setError('er_lname','There should be no space',LNAME);
    }
    else if(havenum(lnameval)){
        setError('er_lname','There should be no Digit',LNAME);
    }
    else if((haveSpecialChars(lnameval)))
    {
        setError('er_lname','There should be no Special Char.',LNAME);
    }
    else{
        success(LNAME);
        valid++;
    }

    const addrVal = Address.value.trim();
    if(addrVal == ""){
        setError('er_addr','Enter your Address',Address);
    }
    else if(addrVal.length < 5)
    {
        setError('er_addr','Enter a Valid Address',Address);
    }
    else{
        success(Address);
        valid++;
    }

    const distval = dist.value.trim();
    if(dist == "")
        setError('er_dist','Enter your District',dist);
    else if(distval.length < 3){
       setError('er_dist','Enter a valid District',dist);
    }
    else if(havespace(distval)){
        setError('er_dist','There should be no space',dist);
    }
    else{
        success(dist);
        valid++;
    }

    const stateval = state.value.trim();
    if(stateval == "")
        setError('er_state','Enter your State',state);
    else if(stateval.length < 3){
       setError('er_state','Enter a valid State',state);
    }
    else if(havespace(stateval)){
        setError('er_state','There should be no space',state);
    }
    else{
        success(state);
        valid++;
    }

    const pinVal = pin.value;
    if(pinVal == ""){
        setError('er_pin','Enter your PIN',pin);
    }
    else if(pinVal.length != 6)
    {
        setError('er_pin','Enter a Valid PIN',pin);
    }
    else{
        success(pin);
        valid++;
    }

    const phVal = Phone.value;
    if(phVal == ""){
        setError('er_ph','Enter your PH.No',Phone);
    }
    else if(phVal.length != 10)
    {
        setError('er_ph','Enter a Valid PH.No',Phone);
    }
    else{
        success(Phone);
        valid++;
    }

    const emailVal = Email.value.trim();
    if(emailVal == ""){
        setError('er_email','Enter your Email',Email);
    }
    else if(emailVal.indexOf('@') == 0)
    {
        setError('er_email','Enter a Valid Email',Email);
    }
    else if(emailVal.lastIndexOf('.') == (emailVal.length-1))
    {
        setError('er_email','Enter a Valid Email',Email);
    }
    else if(emailVal.lastIndexOf('.')  < (emailVal.indexOf('@') + 3)){
        setError('er_email','Enter a Valid Email',Email);
    }
    else{
        success(Email);
        valid++;
    }

    if(valid==8){
        // per.style.display = 'block';
        per.style.display = 'none';
        ed.style.display = 'block';
        secure.style.display = 'none';
        personal.classList.remove('visit');
        education.classList.add('visit');
        security.classList.remove('visit');
        formValid++;
    }
})


const clgname = document.querySelector('#clg');
const cid = document.querySelector('#cid');
const sem = document.querySelector('#semester');
const batch = document.querySelector('#batch');
const branch = document.querySelector('#branch');

f1.addEventListener('submit',(event)=>{
    event.preventDefault();
    clearError();
    var valid = 0;

    const clgVal = clgname.value.trim();
    if(clgVal == ""){
        setError('er_clg','Enter your College Name',clgname);
    }
    else if(clgVal.length < 5)
    {
        setError('er_clg','Enter a Valid College Name',clgname);
    }
    else{
        success(clgname);
        valid++;
    }

    const cidval = cid.value.trim();
    if(cidval == "")
        setError('er_cid','Enter your ID',cid);
    else if(cidval.length < 3){
       setError('er_cid','Enter a valid ID',cid);
    }
    else if(havespace(cidval)){
        setError('er_cid','There should be no space',cid);
    }
    else{
        success(cid);
        valid++;
    }

    const semVal = sem.value;
    if(semVal<1 || semVal>8){
        setError('er_sem','Enter a Valid Sem(i.e. 1-8)',sem);
    }
    else{
        success(sem);
        valid++;
    }

    const branchVal = branch.value.trim();
    if(branchVal == ""){
        setError('er_branch','Enter your Branch',branch);
    }
    else if(branchVal.length < 5)
    {
        setError('er_branch','Enter a Valid Branch',branch);
    }
    else{
        success(branch);
        valid++;
    }

    const batchVal = batch.value;
    if(batchVal>2018 && batchVal<2050){
        success(batch);
        valid++;
    }
    else{
        setError('er_batch','Enter a Valid Batch',batch);
    }

    if(valid==5){
        per.style.display = 'none';
        ed.style.display = 'none';
        secure.style.display = 'block';
        personal.classList.remove('visit');
        education.classList.remove('visit');
        security.classList.add('visit');
        formValid++;
    }
})

const pass = document.querySelector('#pass');
const cpass = document.querySelector('#cpass');


function havecaps(str){
    var code, i, len;

  for (i = 0, len = str.length; i < len; i++) {
        code = str.charCodeAt(i);
        if ((code > 64 && code < 91)){
            return true;
        }
    }
    return false;
}

function isAlphaNumeric(str) {
    var code, i, len;
  
    for (i = 0, len = str.length; i < len; i++) {
      code = str.charCodeAt(i);
      if (!(code > 47 && code < 58) && // numeric (0-9)
          !(code > 64 && code < 91) && // upper alpha (A-Z)
          !(code > 96 && code < 123)) { // lower alpha (a-z)
        return false;
      }
    }
    return true;
  };

f2.addEventListener('submit',(event)=>{
    event.preventDefault();
    clearError();
    var valid = 0;

    const passVal = pass.value;

    if(havespace(passVal)){
        setError('er_pass','Follow the Mentioned Rule(4)',pass);
    }
    else if(passVal.length < 8){
        setError('er_pass','Follow the Mentioned Rule(1)',pass);
    }
    else if(!(haveSpecialChars(passVal)))
    {
        setError('er_pass','Follow the Mentioned Rule(5)',pass);
    }
    else if(!(havecaps(passVal)))
    {
        setError('er_pass','Follow the Mentioned Rule(2)',pass);
    }
    else if( isAlphaNumeric(passVal) ){
        setError('er_pass','Follow the Mentioned Rule(3)',pass);
    }
    else{
        success(pass);
        valid++;
    }

    const cpassVal = cpass.value;
    if(cpassVal != passVal){
        setError('er_cpass','Password doesnot match',cpass);
    }
    else{
        success(cpass);
        valid++;
    }
    if(valid==2 && formValid==2){
        document.querySelector('.overlay').classList.add('showoverlay');
        document.querySelector('.upload').classList.add('showUpload');
    }
})