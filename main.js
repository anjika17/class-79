student_name_array=[];
function submit(){
  var student_1 = document.getElementById("name_1").value ;
  var student_2 = document.getElementById("name_2").value ;
  var student_3 = document.getElementById("name_3").value ;
  var student_4 = document.getElementById("name_4").value ;
   
  student_name_array.push(student_1);
  student_name_array.push(student_2);
  student_name_array.push(student_3);
  student_name_array.push(student_4);

  console.log(student_name_array);
  document.getElementById("display_names").innerHTML=student_name_array;
  document.getElementById("submit_button").style.display="none";
  document.getElementById("sort_button").style.display="inline-block";
}

function sorting(){
  student_name_array.sort();
  console.log(student_name_array);
document.getElementById("display_names").innerHTML=student_name_array;
}