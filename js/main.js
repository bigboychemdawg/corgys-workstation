function getResult(){
      let geo = document.getElementById("select").value
      if (geo == "RU"){
        let i = 1
        let x = document.getElementById("quantity").value
        while (i <= x){
        let element = document.createElement("tr")
        element.innerHTML = "<th>"+makeNumber(2)+" "+makeNumber(2)+" "+makeNumber(6)+"</th>"
        result = document.getElementById("result")
        result.append(element)
        document.getElementById("copy1").style.display = "block"
        i++
        }
      }
      else if (geo == "BY"){
        let i = 1
        let x = document.getElementById("quantity").value
        while (i <= x){
        let element = document.createElement("tr")
        element.innerHTML = "<th>"+makeNumber(1)+makeLetter(2)+" "+makeNumber(6)+"</th>"
        result = document.getElementById("result")
        result.append(element)
        document.getElementById("copy1").style.display = "block"
        i++
        }
      }
      else if (geo == "UA"){
        let i = 1
        let x = document.getElementById("quantity").value
        while (i <= x){
        let element = document.createElement("tr")
        element.innerHTML = "<th>"+makeLetter(3)+" "+makeNumber(6)+"</th>"
        result = document.getElementById("result")
        result.append(element)
        document.getElementById("copy1").style.display = "block"
        i++
        }
      }
      else if (geo == "UAzagran1"){
        let i = 1
        let x = document.getElementById("quantity").value
        while (i <= x){
        let element = document.createElement("tr")
        element.innerHTML = "<th>"+makeNumber(8)+"-"+makeNumber(5)+"</th>"
        result = document.getElementById("result")
        result.append(element)
        document.getElementById("copy1").style.display = "block"
        i++
        }
      }
      else if (geo == "UAzagran2"){
        let i = 1
        let x = document.getElementById("quantity").value
        while (i <= x){
        let element = document.createElement("tr")
        element.innerHTML = "<th>"+makeLetter(2)+makeNumber(6)+"<"+makeNumber(1)+"UKR"+makeNumber(7)+makeLetter(1)+makeNumber(20)+"<"+makeNumber(2)+"</th>"
        result = document.getElementById("result")
        result.append(element)
        document.getElementById("copy1").style.display = "block"
        i++
        }
      }
      function makeLetter(e) {
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        for (var i = 0; i < e; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));
        return text;
    }
    function makeNumber(e) {
        var text = "";
        var possible = "0123456789";
        for (var i = 0; i < e; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));
        return text;
    }
    }
    
    function getResult1() {setInterval(getResult(), 1000)}

    function getResultPath1() {
  let i = 1
  let y = document.getElementById("start").value
  let x = document.getElementById("input").value
  let path = document.getElementById("path").value
  while (i <= x){
    let element = document.createElement("tr")
    element.innerHTML = "<th>"+path+"\\"+y+".png</th>"
    result = document.getElementById("result2")
    result.append(element)
    document.getElementById("copy2").style.display = "block"
    i++
    y++
  }
}
  function getResultPath() {setInterval(getResultPath1(), 1000)}

      function getResultName1() {
  let i = 1
  let y = document.getElementById("start1").value
  let x = document.getElementById("input1").value
  while (i <= x){
    let element = document.createElement("tr")
    element.innerHTML = "<th>"+y+"|_|undefined|_|[{}]]|_|undefined</th>"
    result = document.getElementById("result3")
    result.append(element)
    document.getElementById("copy3").style.display = "block"
    i++
    y++
  }
}
  function getResultName() {setInterval(getResultName1(), 1000)}

  function clearTbody() {setTimeout(clearTbody1, 100)}

  function clearTbody1(){
    let result1 = document.getElementById("result")
    let result2 = document.getElementById("result2")
    let result3 = document.getElementById("result3")
    result1.innerHTML = ""
    result2.innerHTML = ""
    result3.innerHTML = ""
  }
  function clearTextarea() {
    let textarea = document.getElementById("translit")
    let submit = document.getElementById("submit")
    let copy = document.getElementById("copy4")
    setTimeout(function(){textarea.value = ''}, 100)
    submit.style.display = 'block'
    copy.style.display = 'none'
  }

function createDate(){
  let i = 1
  let quantity = document.getElementById("quantityDate").value
  while (i <= quantity){
        let element = document.createElement("tr")
        let startDate1 = randomDate(new Date(2010, 0, 1), new Date())
        let startDate = startDate1.toLocaleDateString()
        var year = startDate1.getFullYear();
        var month = startDate1.getMonth();
        var day = startDate1.getDate();
        let endDate = new Date(year + 40, month, day).toLocaleDateString()
        element.innerHTML = "<th>"+startDate+"</th>"+"<th>"+endDate+"</th>"
        result = document.getElementById("result4")
        result.append(element)
        i++
  }
    let submit = document.getElementById("dateSubmit")
    let copy = document.getElementById("copy5")
    submit.style.display = 'none'
    copy.style.display = 'block'

}
function randomDate(start, end) {
 return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

function clearResult4(){
  let submit = document.getElementById("dateSubmit")
  let copy = document.getElementById("copy5")
  let result = document.getElementById("result4")
  setTimeout(function(){result.innerHTML = ''}, 100)
  submit.style.display = 'block'
  copy.style.display = 'none'
}
