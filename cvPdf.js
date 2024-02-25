
document.getElementById('imageUpload').addEventListener('change', function() {
    if (this.files && this.files[0]) {
        var reader = new FileReader();
        
        reader.onload = function(e) {
           
            var img = document.createElement("img");
            img.src = e.target.result;
            img.style.width = "100%"; 
            
            var container = document.getElementById('imageContainer');
            container.innerHTML = ""; 
            container.appendChild(img);
        };
        
        // Lire le fichier sélectionné et déclencher l'événement 'onload'
        reader.readAsDataURL(this.files[0]);
    }
});




document.getElementById('addEducation').addEventListener('click', function() {
    const newField = document.createElement('div');
    newField.innerHTML = `             <p><strong>Date</strong></p>
      
      
    <select id="mesChoix" name="mesChoix[]" multiple>
        <option value="choix1">2011</option>
        <option value="choix2">2012</option>
        <option value="choix3">2013</option>
        <option value="choix4">2014</option>
        <option value="choix5">2015</option>
        <option value="choix6">2016</option>
        <option value="choix7">2017</option>
        <option value="choix8">2018</option>
        <option value="choix9">2019</option>
        <option value="choix10">2020</option>
        <option value="choix11">2021</option>
        <option value="choix12">2022</option>
        <option value="choix13">2023</option>

    </select></br></br>


  <p><strong> Degree </strong></p>
    <select id="mesChoix" name="mesChoix[]" multiple>
        <option value="choix1">Baccalauréat</option>
        <option value="choix2">Deug</option>
        <option value="choix3">Licence</option>
        <option value="choix4">Master</option>
        <option value="choix5">Doctorat</option>
    </select></br></br>


  <p><strong>Establishment</strong></p>   
  <label for="Establishment" class="label"></label>
  <input type="text" id="Establishment" class="input-field" required></br></br></br>


`; 
    const educationSection = document.getElementById('educationSection');
    educationSection.appendChild(newField);
});



document.getElementById('addExperience').addEventListener('click', function() {
    const newField = document.createElement('div');
    newField.innerHTML = ` <p><strong>Date</strong></p>
    <select id="mesChoix" name="mesChoix[]" multiple>
        <option value="choix1">2015</option>
        <option value="choix2">2016</option>
        <option value="choix3">2017</option>
        <option value="choix4">2018</option>
        <option value="choix5">2019</option>
        <option value="choix6">2020</option>
        <option value="choix7">2021</option>
        <option value="choix8">2022</option>
        <option value="choix9">2023</option>
        <option value="choix10">2024</option>

    </select></br></br>


</form>
<p><strong> Post</strong></p>
<label for="Post" class="label"></label>
<input type="text" id="Post" class="input-field" required>
<p><strong>Company</strong></p>      
<label for="Company" class="label"></label>
<input type="text" id="Company" class="input-field" required></br></br></br>

`; 
    const experienceSection = document.getElementById('experienceSection');
    experienceSection.appendChild(newField);
});

document.getElementById('downloadPdf').addEventListener('click', function () {
    // Sélectionnez l'élément que vous souhaitez convertir en PDF. 
    // Vous pouvez utiliser document.body pour capturer tout le corps du document.
    const element = document.body; 
    
    // Options pour html2pdf
    const opt = {
        margin:       1,
        filename:     'MonCV.pdf',
        image:        { type: 'jpeg', quality: 0.98 },
        html2canvas:  { scale: 2 },
        jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
    };
    
    // Utilisez html2pdf() pour passer l'élément et les options, puis créez le PDF.
    html2pdf().set(opt).from(element).save();
});
    


