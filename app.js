const list = document.querySelectorAll("li")
    list.forEach((node) => 1[
        node.addEventListener('mousedown', function(e){
            e.preventDefault()
            const result = document.querySelector(".result")
            const value = node.innerText.trim()
            const resulttext = result.innerText.trim()
            if( resulttext == "0"|| resulttext == "undefined"|| resulttext == "Infinity"){
                result.innerText = ""
            }
            if(value.toLowerCase() == "c")
            {
                result.innerText = "0"
                return true

            }
            result.append(value)
            
            if(value == '='){
                let solution = eval(resulttext)
                result.innerText = solution
                return true
            }
        })
    ])