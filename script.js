// 1
document.querySelector("footer>div").addEventListener("click", function() { console.log("clique") });

// 1-bis
let i = 0;
document.querySelector("footer>div").addEventListener("click",
    function() {
        i += 1;
        console.log(`tu as cliqué ${i} fois`)
    });

//2

const ex_2 = () => {
    let a = document.querySelector("div>button");

    a.addEventListener("click", function() {
        document.querySelector("#navbarHeader").classList.toggle("collapse")
    });
}
ex_2()
    // classList toggle => add/remove selon si la class est present


//3

const ex_3 = () => {
    a = document.querySelector("div>.btn.btn-sm.btn-outline-secondary")
    a.addEventListener("click", function() {
        a.parentElement.parentElement.parentElement.firstElementChild.style["color"] = "red"

    });
}
ex_3()


//4
const fonctionnalite_4 = () => {
    a = document.querySelectorAll("div>.btn.btn-sm.btn-outline-secondary")[1]
    a.addEventListener("click", function() {
        let b = document.querySelectorAll(".card-body>p.card-text")[1].style["color"];
        if (b !== "green") {
            document.querySelectorAll(".card-body>p.card-text")[1].style["color"] = "green";

        } else {
            document.querySelectorAll(".card-body>p.card-text")[1].style.removeProperty("color")

        }
    });
}
fonctionnalite_4()

//5

function ex_5() {
    a = document.querySelector(".navbar")
    a.addEventListener("dblclick", function() {
        if (document.querySelector("link")["href"] !== "") {
            document.querySelector("link").removeAttribute("href")

        } else {
            document.querySelector("link")["href"] = "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        }
    })
}
ex_5()

//6
const ex_6 = () => {
    a = document.querySelectorAll("div>button.btn.btn-sm.btn-success")

    a.forEach(element => {
        element.addEventListener("mouseover", function() {
            for (let i = 0; i < a.length; i++) {
                document.querySelectorAll("div>.card.mb-4.box-shadow>div>p")[i].style["visibility"] = "hidden"

                document.querySelectorAll("div>.card.mb-4.box-shadow")[i].firstElementChild.style["maxWidth"] = "20%"

            }

        })
    })

    a.forEach(element => {
        element.addEventListener("mouseout", function() {
            for (let i = 0; i < a.length; i++) {
                document.querySelectorAll("div>.card.mb-4.box-shadow>div>p")[i].style["visibility"] = "visible"

                document.querySelectorAll("div>.card.mb-4.box-shadow")[i].firstElementChild.style["maxWidth"] = "100%"

            }

        })
    })

}
ex_6()


//7

const ex_7 = () => {
    a = document.querySelectorAll(".col-md-4");
    document.querySelectorAll(".col-md-4")[0].parentElement
        //var l = 0 // on utilise l pour creer une condtion qui va nous permettre de créer avec Math.floor(Math.random() * 5) un effet alléatoire
    document.querySelector(".btn.btn-secondary.my-2").addEventListener("click", function() {
            //if (l == 0) {
            document.querySelectorAll(".col-md-4")[0].parentElement.insertBefore(a[5], a[0]);
            document.querySelectorAll(".col-md-4")[0].parentElement.insertBefore(a[0], a[-1]);


            //  } else {
            // document.querySelectorAll(".col-md-4")[0].parentElement.insertBefore(a[5], a[Math.floor(Math.random() * 5)])
        }
        // l += 1
        // })
    )
}
ex_7()

//8

const ex_8 = () => {
    a = document.querySelectorAll(".col-md-4");
    document.querySelectorAll(".col-md-4")[0].parentElement
    document.querySelector(".btn.btn-primary.my-2").addEventListener("click", function() {
        document.querySelector(".btn.btn-primary.my-2").removeAttribute("href");
        document.querySelectorAll(".col-md-4")[0].parentElement.insertBefore(a[5], a[-1]);
        document.querySelectorAll(".col-md-4")[0].parentElement.insertBefore(a[0], a[1]);


    })
}

ex_8()

//9

const ex_9 = () => {
    document.addEventListener("keypress", function(event) {
        console.log(event.key)
        if (event.key == "a") {
            b = document.createAttribute("class")
            b.value = "col-4"
            document.querySelector("body").setAttributeNode(b)
        } else if (event.key == "y") {
            b = document.createAttribute("class")
            b.value = "col-4 mx-auto"
            document.querySelector("body").setAttributeNode(b)

        } else if (event.key == "p") {
            b = document.createAttribute("class")
            b.value = "col-4 ml-auto"
            document.querySelector("body").setAttributeNode(b)

        } else if (event.key == "b") {
            b = document.createAttribute("class")
            b.value = ""
            document.querySelector("body").setAttributeNode(b)

        }

    })
}

ex_9()