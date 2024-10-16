function booking() {
    var nameEl = document.getElementById("name");
    var nameError = document.getElementById('name_error');

    if (nameEl.value === '') {
        nameError.innerHTML = "Name is required";
        nameEl.style.borderColor = 'red';
        return '';
    } else {
        nameError.innerHTML = "";
        nameEl.style.borderColor = 'green';
    }

    var phonenoEl = document.getElementById("phoneno");
    var phonenoError = document.getElementById('phoneno_error');

    if (phonenoEl.value === '') {
        phonenoError.innerHTML = "Phone number is required";
        phonenoEl.style.borderColor = 'red';
        return '';
    } else if (phonenoEl.value.length !== 10) {
        phonenoError.innerHTML = "Phone number must be 10 digits";
        phonenoEl.style.borderColor = 'red';
        return '';
    } else {
        phonenoError.innerHTML = "";
        phonenoEl.style.borderColor = 'green';
    }

    var ageEl = document.getElementById("age");
    var ageError = document.getElementById('age_error');

    if (ageEl.value === '') {
        ageError.innerHTML = "Age is required";
        ageEl.style.borderColor = 'red';
        return '';
    } else if (isNaN(ageEl.value) || ageEl.value <= 0) {
        ageError.innerHTML = "Age must be a valid number";
        ageEl.style.borderColor = 'red';
        return '';
    } else {
        ageError.innerHTML = "";
        ageEl.style.borderColor = 'green';
    }

    var aadharnoEl = document.getElementById("aadhar");
    var aadharError = document.getElementById('aadhar_error');

    if (aadharnoEl.value === '') {
        aadharError.innerHTML = "Aadhar number is required";
        aadharnoEl.style.borderColor = 'red';
        return '';
    } else if (aadharnoEl.value.length !== 12) {
        aadharError.innerHTML = "Aadhar number must be 12 digits";
        aadharnoEl.style.borderColor = 'red';
        return '';
    } else {
        aadharError.innerHTML = "";
        aadharnoEl.style.borderColor = 'green';
    }

    var genderEl = document.getElementById("gender");
    var genderError = document.getElementById('gender_error');

    if (genderEl.value === '') {
        genderError.innerHTML = "Gender is required";
        genderEl.style.borderColor = 'red';
        return '';
    } else {
        genderError.innerHTML = "";
        genderEl.style.borderColor = 'green';
    }


    var sourceEl = document.getElementById("source");
    var sourceError = document.getElementById('source_error');

    if (sourceEl.value === '') {
        sourceError.innerHTML = "sourcestation is required";
        sourceEl.style.borderColor = 'red';
        return '';
    } else {
        sourceError.innerHTML = "";
        sourceEl.style.borderColor = 'green';
    }

    var destinationEl = document.getElementById("destination");
    var destinationError = document.getElementById('destination_error');

    if (destinationEl.value === '') {
        destinationError.innerHTML = "destinationstation is required";
        destinationEl.style.borderColor = 'red';
        return '';
    } else {
        destinationError.innerHTML = "";
        destinationEl.style.borderColor = 'green';
    }

    var trainnameEl = document.getElementById("trainname");
    var trainnameError = document.getElementById('trainname_error');

    if (trainnameEl.value === '') {
        trainnameError.innerHTML = "trainname is required";
        trainnameEl.style.borderColor = 'red';
        return '';
    } else {
        trainnameError.innerHTML = "";
        trainnameEl.style.borderColor = 'green';
    }

    var trainnoEl = document.getElementById("trainnumber");
    var trainnoError = document.getElementById('trainno_error');

    if (trainnoEl.value === '') {
        trainnoError.innerHTML = "trainno is required";
        trainnoEl.style.borderColor = 'red';
        return '';
    } else if (trainnoEl.value.length !== 5) {
        trainnoError.innerHTML = "trainno must be 5 digits";
        trainnoEl.style.borderColor = 'red';
        return '';
    } else {
        trainnoError.innerHTML = "";
        trainnoEl.style.borderColor = 'green';
    }

    var dateEl = document.getElementById("date");
    var dateError = document.getElementById('date_error');

    if (dateEl.value === '') {
        dateError.innerHTML = "dateofjourney is required";
        dateEl.style.borderColor = 'red';
        return '';
    } else {
        dateError.innerHTML = "";
        dateEl.style.borderColor = 'green';
    }


    const ticket = {
        Name :nameEl.value,
        Phone :phonenoEl.value,
        age :ageEl.value,
        aadhar :aadharnoEl.value,
        Gender :genderEl.value,
        source :sourceEl.value,
        destination :destinationEl.value,
        trainName :trainnameEl.value,
        trainNo :trainnoEl.value,
        Date :dateEl.value,
    };
    console.log(ticket);
    let bookingarr=JSON.parse(localStorage.getItem('details'))|| [];
    bookingarr.push(ticket);
    console.log(bookingarr);
    localStorage.setItem('details',JSON.stringify(bookingarr));
    window.location.href="./seat.html"

}