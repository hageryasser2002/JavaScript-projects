
var namm = document.getElementById("name");
var male = document.getElementsByName("radio");
var color = document.getElementById("sel");
var btn = document.getElementById("btnReg");


function printMsg() {

    var dayDate = new Date();
    var expireDate = new Date();
    expireDate.setDate(dayDate.getDate() + 2);

    setCookie("name", namm.value, expireDate);
     if (male[0].checked) {
        console.log("female");
        setCookie("gender", "1.jpg", expireDate);
    } else {
        console.log("male");
        setCookie("gender", "2.jpg", expireDate);

    }
    setCookie("color",color.value , expireDate);
    getCookie("name");

    // deleteCookie("name");
    // deleteCookie("gender");
    // deleteCookie("color");

}




function setCookie(key, value, expireDate) {
    document.cookie = key + "=" + value + ";" + "expires=" + expireDate;

}

function getCookie(key) {
   for (var i = 0; i <document.cookie.split(";")[0].length; i++) {
     //console.log(document.cookie.split(";").length);
     var val= document.cookie.split(";")[i].split("=")[0];
     if (val == key) {
           console.log("true");
       }
       
    }
}


function deleteCookie(key) {
    var x = new Date();
    x.setDate(x.getDate() - 3);
    document.cookie = key + "=" + "dfd" + ";expires=" + x;
}

function hasCookie(key) {
    for (var i = 0; i < document.cookie.split(";").length; i++) {
        if (document.cookie.split(";")[i] == key) {
            return true;
        } else {
            return false;
        }
    }
}


function AllCookies() {
    return document.cookie.split(";");// return all keys, values
}






// // هذه الدالة لعرض الرسالة بعد التسجيل وتحديث الكوكيز
// function register() {
//     const name = document.getElementById("name").value;
//     const age = document.getElementById("age").value;
//     const gender = document.querySelector('input[name="gender"]:checked').value;
//     const color = document.getElementById("colorSelect").value;

//     // حفظ البيانات في الكوكيز
//     setCookie("name", name, 7);
//     setCookie("age", age, 7);
//     setCookie("gender", gender, 7);
//     setCookie("color", color, 7);

//     // تحديث الصفحة
//     document.getElementById("dForm").style.display = "none";
//     document.getElementById("profile").style.display = "block";

//     // عرض البيانات
//     document.getElementById("userName").textContent = name;
//     document.getElementById("visitCount").textContent = getCookie("visitCount") || 0;
//     document.getElementById("profilePic").src = gender === "male" ? "male.jpg" : "female.jpg";

//     // تلوين النص حسب اللون المختار
//     document.getElementById("userName").style.color = color;
//     document.getElementById("visitCount").style.color = color;
//     document.getElementById("timer").style.color = color;

//     // زيادة العداد (عدد الزيارات)
//     let visits = parseInt(getCookie("visitCount") || 0);
//     visits++;
//     setCookie("visitCount", visits, 7);

//     // بدء التايمر
//     startTimer();
// }

// // هذه الدالة لتشغيل التايمر
// function startTimer() {
//     let timer = 0;
//     const timerElement = document.getElementById("timer");
//     setInterval(function() {
//         timer++;
//         timerElement.textContent = timer;
//     }, 1000);
// }

// // دالة لضبط الكوكيز
// function setCookie(key, value, days) {
//     const expires = new Date();
//     expires.setDate(expires.getDate() + days);
//     document.cookie = `${key}=${value};expires=${expires.toUTCString()};path=/`;
// }

// // دالة للحصول على قيمة الكوكيز
// function getCookie(key) {
//     const name = key + "=";
//     const decodedCookies = decodeURIComponent(document.cookie);
//     const ca = decodedCookies.split(";");
//     for (let i = 0; i < ca.length; i++) {
//         let c = ca[i];
//         while (c.charAt(0) == " ") {
//             c = c.substring(1);
//         }
//         if (c.indexOf(name) == 0) {
//             return c.substring(name.length, c.length);
//         }
//     }
//     return "";
// }

// // دالة لإعادة تعيين الصفحة
// function resetProfile() {
//     document.getElementById("dForm").style.display = "block";
//     document.getElementById("profile").style.display = "none";
//     // حذف الكوكيز عند إعادة التعيين
//     deleteCookie("name");
//     deleteCookie("age");
//     deleteCookie("gender");
//     deleteCookie("color");
//     deleteCookie("visitCount");
// }

// // دالة لحذف الكوكيز
// function deleteCookie(key) {
//     document.cookie = `${key}=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/`;
// }