
    var detail = JSON.parse(localStorage.getItem('details')) || [];

let UpperAllocation = 0;
let MiddleAllocation = 0;
let LowerAllocation = 0;
detail.forEach(bookingarr => {
if(bookingarr.age >=60) {
    const lower = document.getElementsByClassName('lower');

    if(LowerAllocation < lower.length){
        lower[LowerAllocation].innerHTML = "Allocated";
        lower[LowerAllocation].classList.add('Allocated');

        lower[LowerAllocation].style.borderColor = 'black';
        lower[LowerAllocation].style.backgroundColor = 'green';

        const allocation_id = lower[LowerAllocation].getAttribute('id');
        console.log(allocation_id);

        bookingarr.allocation_id = allocation_id;

        localStorage.setItem('allocate',JSON.stringify(detail));

        console.log(detail);
        LowerAllocation++;
    }else{
        console.log('No lower berths available for allocation.')
    }
}else if (bookingarr.age>=40 && bookingarr.age<60) {
    const middle = document.getElementsByClassName('middle');

    if (MiddleAllocation<middle.length){
        middle[MiddleAllocation].innerHTML = "Allocated";
        middle[MiddleAllocation].classList.add('Allocated');

        middle[MiddleAllocation].style.borderColor = 'black';
        middle[MiddleAllocation].style.backgroundColor = 'green';

        const allocation_id = middle[MiddleAllocation].getAttribute('id');
        console.log(allocation_id);  

        bookingarr.allocation_id = allocation_id;

        localStorage.setItem('allocate',JSON.stringify(detail));

        console.log(detail);
        MiddleAllocation++;
    }else{
        console.log('No middle berths available for allocation.')
    }
}else if (bookingarr.age <=39) {
    const upper = document.getElementsByClassName('upper');

    if (UpperAllocation<upper.length){
        upper[UpperAllocation].innerHTML = "Allocated";
        upper[UpperAllocation].classList.add('Allocated');

        upper[UpperAllocation].style.borderColor = 'black';
        upper[UpperAllocation].style.backgroundColor = 'green';

        const allocation_id = upper[UpperAllocation].getAttribute('id');
        console.log(allocation_id);  

        bookingarr.allocation_id = allocation_id;

        localStorage.setItem('allocate',JSON.stringify(detail));

        console.log(detail);
        UpperAllocation++;
    }else{
        console.log('No middle berths available for allocation.')
    }
}
    var upper=document.querySelectorAll('.upper')
    console.log("--------------"+upper);
    upper.forEach(ele =>{
        ele.addEventListener('click',() =>{
            console.log(ele.id)
            detail.forEach(val =>{
                if(ele.id == val.allocation_id){
                    Swal.fire({
                        title:"Good job!",
                        text:val.Name + " " +val.Phone + " "+val.age + " "+val.aadhar+ " "+val.Gender+ " "+val.source+" "+val.destination+" "+val.trainName+' '+val.trainNo+" "+val.Date+" ",
                        icon:"sucess"
                    })
                }
            })
        })
    }) 
    var middle=document.querySelectorAll('.middle')
    console.log("--------------"+middle);
    middle.forEach(ele =>{
        ele.addEventListener('click',() =>{
            console.log(ele.id)
            detail.forEach(val =>{
                if(ele.id == val.allocation_id){
                    Swal.fire({
                        title:"Good job!",
                        text:val.Name + " " +val.Phone + " "+val.age + " "+val.aadhar+ " "+val.Gender+ " "+val.source+" "+val.destination+" "+val.trainName+' '+val.trainNo+" "+val.Date+" ",
                        icon:"sucess"
                    })
                }
            })
        })
    }) 
    var lower=document.querySelectorAll('.lower')
    console.log("--------------"+lower);
    lower.forEach(ele =>{
        ele.addEventListener('click',() =>{
            console.log(ele.id)
            detail.forEach(val =>{
                if(ele.id == val.allocation_id){
                    Swal.fire({
                        title:"Good job!",
                        text:val.Name + " " +val.Phone + " "+val.age + " "+val.aadhar+ " "+val.Gender+ " "+val.source+" "+val.destination+" "+val.trainName+' '+val.trainNo+" "+val.Date+" ",
                        icon:"sucess"
                    })
                }
            })
        })
    }) 
});
