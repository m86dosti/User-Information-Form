        function saveUserInfo() {  
            const name = document.getElementById("name").value;  
            const age = document.getElementById("age").value;  
            const address = document.getElementById("address").value;  
            const phone = document.getElementById("phone").value;  
            const email = document.getElementById("email").value;  
            const password = document.getElementById("password").value;  
            const confirmPassword = document.getElementById("confirmPassword").value;  
            const gender = document.getElementById("gender").value;  
            const birthday = document.getElementById("birthday").value;  
            const country = document.getElementById("country").value;  
            const state = document.getElementById("state").value;  
            const city = document.getElementById("city").value;  
            localStorage.setItem("name", name);  
            localStorage.setItem("age", age);  
            localStorage.setItem("address", address);  
            localStorage.setItem("phone", phone);  
            localStorage.setItem("email", email);  
            localStorage.setItem("password", password);  
            localStorage.setItem("confirmPassword", confirmPassword);  
            localStorage.setItem("gender", gender);  
            localStorage.setItem("birthday", birthday);  
            localStorage.setItem("country", country);  
            localStorage.setItem("state", state);  
            localStorage.setItem("city", city);  
            displayStoredInfo();}  
        function displayStoredInfo() {  
            let info = "";  
            info += "<strong>Name:</strong> " + localStorage.getItem("name") + "<br />"  + "<hr/>";  
            info += "<strong>Age:</strong> " + localStorage.getItem("age") + "<br />" + "<hr/>";  
            info += "<strong>Address:</strong> " + localStorage.getItem("address") + "<br />"+ "<hr/>";  
            info += "<strong>Phone:</strong> " + localStorage.getItem("phone") + "<br />"+ "<hr/>";  
            info += "<strong>Email:</strong> " + localStorage.getItem("email") + "<br />"+ "<hr/>";  
            info += "<strong>Gender:</strong> " + localStorage.getItem("gender") + "<br />"+ "<hr/>";  
            info += "<strong>Birthday:</strong> " + localStorage.getItem("birthday") + "<br />"+ "<hr/>";  
            info += "<strong>Country:</strong> " + localStorage.getItem("country") + "<br />"+ "<hr/>";  
            info += "<strong>State:</strong> " + localStorage.getItem("state") + "<br />"+ "<hr/>";  
            info += "<strong>City:</strong> " + localStorage.getItem("city") + "<br />";  
            document.getElementById("storedInfo").innerHTML = info;  
        }  
        window.onload = function () {  
            displayStoredInfo(); 
        };  
