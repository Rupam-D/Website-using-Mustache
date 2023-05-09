const submitBtn = document.getElementById("submitBtn")
console.log("conecteed")

const getInfo = async (eve) => {

     alert("hello")
     try {
          const response = await fetch(url)
     } catch {
          console.log(err)
     }

}

submitBtn.addEventListener("click", getInfo)