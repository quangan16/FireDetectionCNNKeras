function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
      
        reader.onload = function (e) {
            $('#blah')
                .attr('src', e.target.result)
                .width(250)
                .height(150);
        };
      
        reader.readAsDataURL(input.files[0]);
    }
    }
function deleteOld(){
    const fs = require('fs')
    const path = 'C:/Users/nqan1/OneDrive/Documents/Coding_2022/Coding_Project/XuLyAnh/FireDetectionWeb/API/uploaded/test_image/non_fire.36.png'
    try {
  fs.unlinkSync(path)
  //file removed
} catch(err) {
  console.error(err)
}
}
